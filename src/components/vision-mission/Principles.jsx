export default function Principles() {
  return (
    <section id="principles" className="vm-principles">
      <div className="container">
        <div className="nova-section-label reveal">
          <span>How We Execute</span>
        </div>
        <h2 className="reveal" style={{ "--d": ".1s" }}>
          Four disciplines — <span>end to end.</span>
        </h2>
        <div className="vm-principles-grid">
          <div className="vm-principle reveal" style={{ "--d": ".3s" }}>
            <i className="fa-solid fa-magnifying-glass-chart" />
            <h3>Land &amp; Master Planning</h3>
            <p>Intelligent acquisition, diligence and entitlements — building resilient neighborhoods.</p>
          </div>
          <div className="vm-principle reveal" style={{ "--d": ".4s" }}>
            <i className="fa-solid fa-pen-ruler" />
            <h3>Design &amp; Engineering</h3>
            <p>Architecture and engineering discipline — on time, on standard, every market.</p>
          </div>
          <div className="vm-principle reveal" style={{ "--d": ".5s" }}>
            <i className="fa-solid fa-helmet-safety" />
            <h3>Delivery &amp; Governance</h3>
            <p>Construction stewardship with transparent, board-governed delivery.</p>
          </div>
          <div className="vm-principle reveal" style={{ "--d": ".6s" }}>
            <i className="fa-solid fa-building-columns" />
            <h3>Capital &amp; Stewardship</h3>
            <p>Phased capital, escrow protection and long-term community management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
