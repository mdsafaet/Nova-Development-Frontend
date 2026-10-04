import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nova-region-banner-dismissed";

const REGIONS = {
  BD: {
    country: "Bangladesh",
    name: "Nova Bangladesh",
    city: "Dhaka",
    url: "/coming-soon",
  },
  GB: {
    country: "the United Kingdom",
    name: "Nova UK",
    city: "London",
    url: "/coming-soon",
  },
  US: {
    country: "the United States",
    name: "Nova USA",
    city: "New York",
    url: "/coming-soon",
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
      className="nova-region-enter rb:fixed rb:bottom-4 rb:left-4 rb:z-[9999] rb:box-border rb:w-[calc(100%-2rem)] rb:max-w-md rb:rounded-2xl rb:border rb:border-solid rb:border-[rgb(22,29,64)]/15 rb:bg-[rgb(245,243,237)] rb:p-5 rb:text-[rgb(22,29,64)] rb:shadow-xl"
    >
      <div className="rb:mb-3 rb:flex rb:items-center rb:gap-2 rb:text-xs rb:font-bold rb:tracking-[0.16em] rb:text-[rgb(22,29,64)] rb:uppercase">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="rb:h-4 rb:w-4 rb:shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18M5 7h14M5 17h14" />
        </svg>

        <span>{region.name}</span>
      </div>

      <p
        id="nova-region-description"
        className="rb:m-0 rb:text-sm rb:leading-6 rb:text-[rgb(22,29,64)]/80"
      >
        It looks like you're browsing from {region.country}. Our{" "}
        {region.city} team has local projects, prices and advisors.
      </p>

      <div className="rb:mt-4 rb:flex rb:flex-wrap rb:items-center rb:gap-3">
        {region.disabled ? (
          <button
            type="button"
            disabled
            className="rb:inline-flex rb:cursor-not-allowed rb:items-center rb:justify-center rb:rounded-full rb:border-0 rb:bg-[rgb(22,29,64)] rb:px-4 rb:py-2.5 rb:text-sm rb:font-semibold rb:text-white rb:opacity-50"
          >
            {region.name} — Coming soon
          </button>
        ) : (
          <a
            href={region.url}
            className="rb:inline-flex rb:items-center rb:justify-center rb:rounded-full rb:bg-[rgb(22,29,64)] rb:px-4 rb:py-2.5 rb:text-sm rb:font-semibold rb:text-white rb:no-underline rb:transition-colors rb:hover:bg-[rgb(22,29,64)]/90 rb:focus-visible:outline-2 rb:focus-visible:outline-offset-2 rb:focus-visible:outline-[rgb(22,29,64)]"
          >
            Visit {region.name}
          </a>
        )}

        <button
          type="button"
          onClick={dismiss}
          className="rb:inline-flex rb:cursor-pointer rb:items-center rb:justify-center rb:rounded-full rb:border-0 rb:bg-transparent rb:px-3 rb:py-2.5 rb:text-sm rb:font-semibold rb:text-[rgb(22,29,64)] rb:transition-colors rb:hover:bg-[rgb(22,29,64)]/10 rb:focus-visible:outline-2 rb:focus-visible:outline-offset-2 rb:focus-visible:outline-[rgb(22,29,64)]"
        >
          Stay here
        </button>
      </div>
    </aside>
  );
}