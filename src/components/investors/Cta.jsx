import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="vm-cta">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-4">
        <div>
          <h3 className="reveal" style={{ "--d": ".1s" }}>
            Partner with <span>long-term capital.</span>
          </h3>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Request the investment deck or speak with our investor relations team.
          </p>
        </div>
        <div className="d-flex gap-3 flex-wrap reveal" style={{ "--d": ".3s" }}>
          <Link to="/contact" className="btn btn-gold text-uppercase reveal" style={{ "--d": ".3s" }}>
            Speak to IR <span>↗</span>
          </Link>{" "}
          <a
            href="#"
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
            Download deck <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
