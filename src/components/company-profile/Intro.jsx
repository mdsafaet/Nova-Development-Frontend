import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Intro() {
  return (
    <section className="cp-intro">
      <div className="container">
        <div className="cp-intro-grid">
          <div>
            <div className="nova-section-label reveal">
              <span>Our Story</span>
            </div>
            <h2
              className="nova-display-title reveal"
              style={{ "--d": ".1s", fontSize: "clamp(34px,4vw,48px)" }}
            >
              Discipline, transparency <span>&amp; future-focused.</span>
            </h2>
            <p className="nova-lead reveal" style={{ "--d": ".2s", marginTop: "20px" }}>
              Founded in Dhaka in 2009 with a simple ambition: make land development more disciplined.
            </p>
            <p className="nova-muted-text reveal" style={{ "--d": ".2s" }}>
              A small yet dedicated core team laid the foundation for a platform that now operates across
              Dubai, Bangladesh, USA and UK. In 2016 we established our Dubai platform, expanding into luxury
              residential and investment-led development. By 2019 we entered North America — extending our
              integrated model to New York.
            </p>
            <p className="nova-muted-text reveal" style={{ "--d": ".2s", marginTop: "14px" }}>
              Today we manage land estates, residences and commercial assets — 45+ projects, 3,200 acres, one
              global standard.
            </p>
            <div className="d-flex gap-3 mt-4 flex-wrap">
              <Link
                to="/#brand-story"
                className="btn btn-gold text-uppercase reveal"
                style={{ "--d": ".3s" }}
              >
                View brand story <span>↗</span>
              </Link>{" "}
              <a
                href="index.htmlchairman.html"
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
                  boxShadow: "0 2px 10px rgba(15,19,31,.05)",
                  transition: "all .22s ease",
                }}
              >
                Chairman message <span style={{ fontSize: "18px", transition: "transform .2s ease" }}>↗</span>
              </a>
            </div>
          </div>
          <div className="cp-intro-img fade-reveal" style={{ "--d": ".3s" }}>
            <img src={img.projectFeatured} alt="Nova Meadows master-planned estate" />
            <div className="cp-intro-badge reveal" style={{ "--d": ".4s" }}>
              <div>
                <strong>Nova Meadows · Dhaka</strong>
                <span>Eastern growth corridor · Master-planned</span>
              </div>
              <em>Est. 2009</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
