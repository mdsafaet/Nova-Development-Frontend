import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nova-region-banner-dismissed";

const REGIONS = {
  BD: {
    country: "Bangladesh",
    name: "Nova Bangladesh",
    city: "Dhaka",
    url: "https://bd.novadevelopment.com/",
  },
  GB: {
    country: "the United Kingdom",
    name: "Nova UK",
    city: "London",
    url: "https://uk.novadevelopment.com",
  },
  US: {
    country: "the United States",
    name: "Nova USA",
    city: "New York",
    url: "https://us.novadevelopment.com",
  },
};

export default function RegionBanner() {
  const [region, setRegion] = useState(null);

  const dismiss = useCallback(() => {
    setRegion(null);

    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Still close the banner if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // Detection can continue without storage.
    }

    const controller = new AbortController();
    let active = true;

    async function detectCountry() {
      try {
        const params = new URLSearchParams(window.location.search);
        let country = params.get("country");

        // An explicit override bypasses the API, including on localhost.
        if (country === null) {
          const response = await fetch("/api/geo", {
            signal: controller.signal,
            cache: "no-store",
          });

          if (!response.ok) return;

          const data = await response.json();
          country = data.country;
        }

        if (!active || typeof country !== "string") return;

        const code = country.trim().toUpperCase();

        if (Object.hasOwn(REGIONS, code)) {
          setRegion(REGIONS[code]);
        }
      } catch {
        // Missing API, invalid JSON or network failure: show nothing.
      }
    }

    detectCountry();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!region) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        dismiss();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [region, dismiss]);

  if (!region) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-label="Regional site suggestion"
      aria-describedby="nova-region-description"
      className="nova-region-enter fixed bottom-4 left-4 z-50 box-border w-[calc(100%-2rem)] max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-xl"
    >
      <p
        id="nova-region-description"
        className="m-0 text-sm leading-6"
      >
        It looks like you're browsing from {region.country}. Our{" "}
        {region.city} team has local projects, prices and advisors.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href={region.url}
          className="inline-flex items-center justify-center rounded-lg bg-[#112899] px-4 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#0d207a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#112899]"
        >
          Visit {region.name}
        </a>

        <button
          type="button"
          onClick={dismiss}
          className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#112899]"
        >
          Stay here
        </button>
      </div>
    </aside>
  );
}