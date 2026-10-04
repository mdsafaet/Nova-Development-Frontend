import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Investors() {
  return (
    <section id="investors" className="nova-investor-section nova-investor-modern">
      <div className="container">
        <div className="nova-investor-modern-grid">
          <div className="nova-investor-visual fade-reveal" style={{ "--d": ".3s" }}>
            <div className="investor-img-card">
              <img src={img.investor} alt="Business handshake — investor partnership" loading="lazy" />
              <div className="investor-img-overlay" />
              <div className="investor-deal-badge">
                <span className="dot" /> Deal-ready governance · Audited &amp; Transparent
              </div>
              <div className="investor-floating-card  ">
                <small className="eyebrow text-gold">Proven exits</small>
                <div className="gdv">
                  32
                  <span>+</span> <em>Exits</em>
                </div>
                <p>Successful, on-time exits across market cycles — phased capital discipline.</p>
                <div className="mini-stats">
                  <span>
                    <strong>Escrow</strong> Protected
                  </span>{" "}
                  <span>
                    <strong>On-Time</strong> Delivery
                  </span>
                </div>
              </div>
            </div>
            <div className="investor-trust-bar reveal" style={{ "--d": ".4s" }}>
              <span>
                <i className="fa-solid fa-building-columns" /> Institutional &amp; private capital
              </span>{" "}
              <span className="sep">•</span>{" "}
              <span>
                <i className="fa-solid fa-shield-halved" /> Governance first
              </span>{" "}
              <span className="sep">•</span>{" "}
              <span>
                <i className="fa-solid fa-earth-asia" /> 4 markets
              </span>
            </div>
          </div>
          <div className="nova-investor-copy">
            <div
              className="nova-section-label nova-section-label-light reveal"
              style={{ "--d": "0s", marginBottom: "18px" }}
            >
              <span>Investors</span>
            </div>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Capital with a <span>long-term view.</span>
            </h2>
            <p className="investor-lead reveal" style={{ "--d": ".2s" }}>
              Nova combines disciplined capital allocation, market intelligence and development expertise to
              create resilient long-term value — built for investors who measure returns in decades, not
              quarters.
            </p>
            <div className="investor-metrics">
              <div className="inv-metric reveal" style={{ "--d": ".3s" }}>
                <i className="fa-solid fa-chart-simple" /> <span className="num">01 — Portfolio</span>{" "}
                <strong>
                  <sup>$</sup>
                  1.2B
                </strong>
                <p>Gross development value</p>
              </div>
              <div className="inv-metric reveal" style={{ "--d": ".4s" }}>
                <i className="fa-solid fa-arrow-trend-up" /> <span className="num">02 — Returns</span>{" "}
                <strong>18%</strong>
                <p>Target net IRR — risk-adjusted</p>
              </div>
              <div className="inv-metric reveal" style={{ "--d": ".5s" }}>
                <i className="fa-solid fa-handshake" /> <span className="num">03 — Partners</span>{" "}
                <strong>120+</strong>
                <p>Institutional &amp; private partners</p>
              </div>
              <div className="inv-metric reveal" style={{ "--d": ".6s" }}>
                <i className="fa-solid fa-shield-halved" /> <span className="num">04 — Governance</span>{" "}
                <strong>100%</strong>
                <p>Audited &amp; board-governed</p>
              </div>
            </div>
            <div className="investor-why reveal" style={{ "--d": ".7s" }}>
              <span>
                <i className="fa-solid fa-check" /> Risk-adjusted structuring
              </span>{" "}
              <span>
                <i className="fa-solid fa-check" /> Design &amp; engineering discipline
              </span>{" "}
              <span>
                <i className="fa-solid fa-check" /> Long-term stewardship
              </span>
            </div>
            <div className="investor-actions reveal" style={{ "--d": ".8s" }}>
              <Link to="/investors" className="btn btn-gold text-uppercase">
                Investor information <span>↗</span>
              </Link>{" "}
              <a href="#" className="investor-secondary-link">
                Download investment deck <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
