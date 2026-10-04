export default function Intro() {
  return (
    <section className="vm-intro">
      <div className="container">
        <div className="nova-section-label reveal" style={{ justifyContent: "center" }}>
          <span>Our Purpose</span>
        </div>
        <div className="vm-big-quote">
          <span className="vm-q reveal" style={{ "--d": ".05s" }}>
            “
          </span>
          <h2 className="reveal" style={{ "--d": ".1s" }}>
            We develop places <span>that outlive us.</span>
          </h2>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Not measured by quarters, but by decades. Every master plan, every acre and every partnership is
            guided by long-term thinking — ensuring what we build today remains relevant and cherished
            tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
