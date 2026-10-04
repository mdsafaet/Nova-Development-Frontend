export default function Values() {
  return (
    <section className="cp-values">
      <div className="container">
        <div className="nova-section-label nova-section-label-light reveal" style={{ marginBottom: "16px" }}>
          <span>Values</span>
        </div>
        <h2
          className="reveal"
          style={{
            "--d": ".1s",
            margin: "0",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px,4vw,44px)",
            lineHeight: ".98",
            letterSpacing: "-.04em",
            fontWeight: "800",
            color: "#fff",
          }}
        >
          Guided by{" "}
          <span
            style={{
              color: "var(--gold-soft)",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: "400",
            }}
          >
            what endures.
          </span>
        </h2>
        <p
          className="reveal"
          style={{
            "--d": ".2s",
            maxWidth: "600px",
            margin: "14px 0 0",
            color: "rgba(255,255,255,.6)",
            lineHeight: "1.75",
            fontSize: "14px",
          }}
        >
          Every master plan, every acre and every partnership is guided by long-term thinking — ensuring what
          we build today remains relevant and cherished tomorrow.
        </p>
        <div className="cp-values-grid">
          <div className="cp-value-card reveal" style={{ "--d": ".3s" }}>
            <i className="fa-solid fa-shield-halved" /> <span className="num">01</span>{" "}
            <strong>Integrity</strong>
            <p>Do the right thing at every stage — transparent governance, audited delivery.</p>
          </div>
          <div className="cp-value-card reveal" style={{ "--d": ".4s" }}>
            <i className="fa-solid fa-award" /> <span className="num">02</span> <strong>Excellence</strong>
            <p>Set a higher standard for design, engineering and delivery in every market.</p>
          </div>
          <div className="cp-value-card reveal" style={{ "--d": ".5s" }}>
            <i className="fa-solid fa-leaf" /> <span className="num">03</span> <strong>Stewardship</strong>
            <p>Think beyond today's development — resilient, sustainable, community-first.</p>
          </div>
          <div className="cp-value-card reveal" style={{ "--d": ".6s" }}>
            <i className="fa-solid fa-handshake" /> <span className="num">04</span>{" "}
            <strong>Partnership</strong>
            <p>Build lasting relationships with investors, partners and communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
