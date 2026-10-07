import ReactCountryFlag from "react-country-flag";

const markets = [
  { code: "AE", href: "#dubai", name: "UAE", city: "Dubai", status: "Operating", delay: ".6s" },
  { code: "BD", href: "#bangladesh", name: "Bangladesh", city: "Dhaka", status: "Operating", delay: ".75s" },
  { code: "US", href: "#usa", name: "USA", city: "New York", status: "Expanding", delay: ".9s" },
  { code: "GB", href: "#uk", name: "UK", city: "London", status: "Entering", delay: "1.05s", last: true },
];

export default function MarketStrip() {
  return (
    <div className="position-relative market-strip z-2">
      <div className="container">
        <div className="row g-0">
          {markets.map((m, i) => (
            <div
              key={m.code}
              className={`col-sm-6 col-lg-3 market-strip-item animate__animated animate__fadeIn${
                m.last ? " last" : ""
              }`}
              style={{ "--animate-duration": "1s", animationDelay: m.delay }}
            >
              <a
                href={m.href}
                className="d-flex justify-content-between align-items-center py-3 text-decoration-none"
              >
                <span className="d-flex align-items-center gap-2">
                  <span
                    className="flag-float"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
<ReactCountryFlag
  countryCode={m.code}
  svg
  aria-label={`${m.name} flag`}
  title={m.name}
  style={{
    width: "2.4rem",
    height: "1.6rem",
    borderRadius: "3px",
    objectFit: "cover",
    display: "block",
    boxShadow: "0 0 0 1px rgba(255,255,255,.25)",
  }}
/>
                  </span>{" "}
                  <span>
                    <span className="d-block fw-semibold market-name">{m.name}</span>{" "}
                    <span className="d-block small market-city">{m.city}</span>
                  </span>
                </span>{" "}
                <span className="d-flex align-items-center gap-2 status-tag">
                  <span className="dot" /> {m.status}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}