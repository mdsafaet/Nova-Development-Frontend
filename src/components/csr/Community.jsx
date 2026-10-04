import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Community() {
  return (
    <section id="community" className="vm-split vm-split--alt">
      <div className="container">
        <div className="vm-split-grid">
          <div className="vm-split-media fade-reveal" style={{ "--d": ".3s" }}>
            <img src={img.projectFeatured} alt="Places that outlive us" loading="lazy" />
            <div className="vm-media-cap">
              <span>Stewardship · Legacy</span>
              <strong>Places that outlive us</strong>
            </div>
          </div>
          <div className="vm-split-text">
            <span className="vm-num reveal">02 — Our Promise</span>{" "}
            <span className="eyebrow text-gold reveal">Why it matters</span>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              We build for <span>those who come next.</span>
            </h2>
            <div
              className="nova-gold-line reveal"
              style={{ "--d": ".2s", margin: "18px 0 22px", width: "56px" }}
            />
            <p className="vm-lead reveal" style={{ "--d": ".2s" }}>
              Every master plan is a promise to future residents, neighbours and ecosystems.
            </p>
            <p className="reveal" style={{ "--d": ".25s" }}>
              That promise is what makes a development endure — not just commercially, but socially and
              environmentally. It’s the same standard across Dubai, Dhaka, New York and London.
            </p>
            <div className="d-flex gap-3 mt-4 flex-wrap reveal" style={{ "--d": ".3s" }}>
              <Link to="/contact" className="btn btn-gold text-uppercase reveal" style={{ "--d": ".3s" }}>
                Partner with us <span>↗</span>
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
                See our places <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
