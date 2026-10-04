import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section style={{ background: "var(--sand)", padding: "60px 0", borderTop: "1px solid var(--border-c)" }}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-4">
        <div>
          <h3
            className="reveal"
            style={{
              "--d": ".1s",
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: "800",
              letterSpacing: "-.03em",
              margin: "0",
              color: "#0F131F",
            }}
          >
            Let's build <span style={{ color: "var(--gold)" }}>what comes next.</span>
          </h3>
          <p
            className="reveal"
            style={{ "--d": ".2s", margin: "8px 0 0", color: "var(--muted-body)", fontSize: "14px" }}
          >
            Speak with our team about projects, partnerships or investment opportunities.
          </p>
        </div>
        <div className="d-flex gap-3 flex-wrap align-items-center reveal" style={{ "--d": ".3s" }}>
          <a
            href="index.htmlcontact.html"
            className="btn btn-gold text-uppercase reveal"
            style={{ "--d": ".3s" }}
          >
            Speak to an advisor <span>↗</span>
          </a>{" "}
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
              boxShadow: "0 2px 10px rgba(15,19,31,.05)",
              transition: "all .22s ease",
            }}
          >
            Explore portfolio <span style={{ fontSize: "18px" }}>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
