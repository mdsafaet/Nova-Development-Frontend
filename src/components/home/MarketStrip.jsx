export default function MarketStrip() {
  return (
      <div className="position-relative market-strip z-2">
        <div className="container">
          <div className="row g-0">
            <div
              className="col-sm-6 col-lg-3 market-strip-item animate__animated animate__fadeIn"
              style={{ "--animate-duration": "1s", animationDelay: ".6s" }}
            >
              <a
                href="#dubai"
                className="d-flex justify-content-between align-items-center py-3 text-decoration-none"
              >
                <span className="d-flex align-items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/ae.png"
                    alt="United Arab Emirates flag"
                    className="flag-icon"
                  />{" "}
                  <span>
                    <span className="d-block fw-semibold market-name">UAE</span>{" "}
                    <span className="d-block small market-city">Dubai</span>
                  </span>
                </span>{" "}
                <span className="d-flex align-items-center gap-2 status-tag">
                  <span className="dot" /> Operating
                </span>
              </a>
            </div>
            <div
              className="col-sm-6 col-lg-3 market-strip-item animate__animated animate__fadeIn"
              style={{ "--animate-duration": "1s", animationDelay: ".75s" }}
            >
              <a
                href="#bangladesh"
                className="d-flex justify-content-between align-items-center py-3 text-decoration-none"
              >
                <span className="d-flex align-items-center gap-2">
                  <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh flag" className="flag-icon" />{" "}
                  <span>
                    <span className="d-block fw-semibold market-name">Bangladesh</span>{" "}
                    <span className="d-block small market-city">Dhaka</span>
                  </span>
                </span>{" "}
                <span className="d-flex align-items-center gap-2 status-tag">
                  <span className="dot" /> Operating
                </span>
              </a>
            </div>
            <div
              className="col-sm-6 col-lg-3 market-strip-item animate__animated animate__fadeIn"
              style={{ "--animate-duration": "1s", animationDelay: ".9s" }}
            >
              <a
                href="#usa"
                className="d-flex justify-content-between align-items-center py-3 text-decoration-none"
              >
                <span className="d-flex align-items-center gap-2">
                  <img src="https://flagcdn.com/w40/us.png" alt="United States flag" className="flag-icon" />{" "}
                  <span>
                    <span className="d-block fw-semibold market-name">USA</span>{" "}
                    <span className="d-block small market-city">New York</span>
                  </span>
                </span>{" "}
                <span className="d-flex align-items-center gap-2 status-tag">
                  <span className="dot" /> Expanding
                </span>
              </a>
            </div>
            <div
              className="col-sm-6 col-lg-3 market-strip-item last animate__animated animate__fadeIn"
              style={{ "--animate-duration": "1s", animationDelay: "1.05s" }}
            >
              <a
                href="#uk"
                className="d-flex justify-content-between align-items-center py-3 text-decoration-none"
              >
                <span className="d-flex align-items-center gap-2">
                  <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom flag" className="flag-icon" />{" "}
                  <span>
                    <span className="d-block fw-semibold market-name">UK</span>{" "}
                    <span className="d-block small market-city">London</span>
                  </span>
                </span>{" "}
                <span className="d-flex align-items-center gap-2 status-tag">
                  <span className="dot" /> Entering
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
