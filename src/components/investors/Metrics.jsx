export default function Metrics() {
  return (
    <section id="metrics" className="inv-metrics-section">
      <div className="container">
        <div className="nova-section-label nova-section-label-light reveal" style={{ marginBottom: "16px" }}>
          <span>Performance</span>
        </div>
        <h2 className="reveal" style={{ "--d": ".1s" }}>
          Built for <span>resilient returns.</span>
        </h2>
        <p className="inv-metrics-lead reveal" style={{ "--d": ".2s" }}>
          Investor-focused metrics — distinct from operating profile, audited and transparent.
        </p>
        <div className="inv-metrics-grid">
          <div className="inv-metric-card reveal" style={{ "--d": ".3s" }}>
            <i className="fa-solid fa-chart-simple" />
            <span className="num">01 — Portfolio</span>
            <strong>
              <sup>$</sup>
              1.2B
            </strong>
            <p>Gross development value across land, residential and commercial</p>
          </div>
          <div className="inv-metric-card reveal" style={{ "--d": ".4s" }}>
            <i className="fa-solid fa-arrow-trend-up" />
            <span className="num">02 — Returns</span>
            <strong>18%</strong>
            <p>Target net IRR — risk-adjusted, phased exits</p>
          </div>
          <div className="inv-metric-card reveal" style={{ "--d": ".5s" }}>
            <i className="fa-solid fa-handshake" />
            <span className="num">03 — Partners</span>
            <strong>120+</strong>
            <p>Institutional, private and family offices across 4 markets</p>
          </div>
          <div className="inv-metric-card reveal" style={{ "--d": ".6s" }}>
            <i className="fa-solid fa-shield-halved" />
            <span className="num">04 — Governance</span>
            <strong>100%</strong>
            <p>Audited, board-governed, escrow-protected delivery</p>
          </div>
        </div>
        <div className="inv-extra-bar reveal" style={{ "--d": ".7s" }}>
          <span>
            <i className="fa-solid fa-building-columns" /> Escrow protected
          </span>{" "}
          <span className="sep">•</span>
          <span>
            <i className="fa-solid fa-clock-rotate-left" /> 32+ on-time exits
          </span>{" "}
          <span className="sep">•</span>
          <span>
            <i className="fa-solid fa-earth-asia" /> Dubai · Dhaka · New York · London
          </span>
        </div>
      </div>
    </section>
  );
}
