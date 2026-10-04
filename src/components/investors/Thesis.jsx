import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Thesis() {
  return (
    <section id="thesis" className="vm-split">
      <div className="container">
        <div className="vm-split-grid">
          <div className="vm-split-text">
            <span className="vm-num reveal">01 — Investment Thesis</span>{" "}
            <span className="eyebrow text-gold reveal">Why investors choose Nova</span>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              De-risk growth. <span>Deliver legacy.</span>
            </h2>
            <div
              className="nova-gold-line reveal"
              style={{ "--d": ".2s", margin: "18px 0 22px", width: "56px" }}
            />
            <p className="vm-lead reveal" style={{ "--d": ".2s" }}>
              Land, capital, design and stewardship — integrated to create resilient, long-term value across
              market cycles.
            </p>
            <p className="reveal" style={{ "--d": ".25s" }}>
              Nova combines market intelligence, rigorous diligence and design excellence to structure
              investments that perform for owners and delight residents — from land assembly and entitlements
              to engineering, delivery and community management.
            </p>
            <ul className="vm-checks">
              <li className="reveal" style={{ "--d": ".3s" }}>
                <i className="fa-solid fa-check" /> Risk-adjusted structuring — phased capital, escrow
                protection
              </li>
              <li className="reveal" style={{ "--d": ".4s" }}>
                <i className="fa-solid fa-check" /> Engineering discipline — on time, on standard, every
                market
              </li>
              <li className="reveal" style={{ "--d": ".5s" }}>
                <i className="fa-solid fa-check" /> Long-term stewardship — places that compound value for
                decades
              </li>
            </ul>
            <div className="d-flex gap-3 mt-4 flex-wrap reveal" style={{ "--d": ".6s" }}>
              <Link to="/contact" className="btn btn-gold text-uppercase reveal" style={{ "--d": ".3s" }}>
                Investor enquiries <span>↗</span>
              </Link>{" "}
              <Link
                to="/portfolio"
                className="btn text-uppercase reveal"
                style={{
                  "--d": ".4s",
                  padding: "14px 28px",
                  borderRadius: "0",
                  background: "#fff",
                  color: "#0F131F",
                  border: "1px solid var(--border-c)",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: ".08em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Explore portfolio <span>↗</span>
              </Link>
            </div>
          </div>
          <div className="vm-split-media fade-reveal" style={{ "--d": ".3s" }}>
            <img src={img.projectCommercial} alt="Investor thesis — disciplined development" loading="lazy" />
            <div className="vm-media-cap">
              <span>Thesis · Discipline</span>
              <strong>45+ projects · 3,200 acres · 17 years</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
