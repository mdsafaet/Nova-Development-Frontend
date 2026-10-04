export default function Capabilities() {
  return (
    <section id="capabilities" className="cp-capabilities">
      <div className="container">
        <div className="nova-section-label reveal">
          <span>Capabilities</span>
        </div>
        <h2 className="nova-display-title reveal" style={{ "--d": ".1s" }}>
          What we do — <span>end to end.</span>
        </h2>
        <p className="nova-muted-text reveal" style={{ "--d": ".2s", maxWidth: "640px", marginTop: "14px" }}>
          Integrated development platform spanning the full lifecycle — de-risking growth for investors while
          delivering places that perform for owners and delight residents.
        </p>
        <div className="cp-cap-grid">
          <div className="cp-cap-card reveal" style={{ "--d": ".3s" }}>
            <i className="fa-solid fa-magnifying-glass-chart" />
            <h3>Land &amp; Master Planning</h3>
            <p>
              Intelligent acquisition, diligence, entitlements and master planning — building resilient
              neighborhoods and infrastructure.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-check" /> Land assembly &amp; diligence
              </li>
              <li>
                <i className="fa-solid fa-check" /> Master planning &amp; entitlements
              </li>
              <li>
                <i className="fa-solid fa-check" /> Sustainable infrastructure
              </li>
            </ul>
          </div>
          <div className="cp-cap-card reveal" style={{ "--d": ".4s" }}>
            <i className="fa-solid fa-helmet-safety" />
            <h3>Design &amp; Delivery</h3>
            <p>
              Design excellence, engineering discipline and construction stewardship — on time, on standard,
              every market.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-check" /> Architecture &amp; engineering
              </li>
              <li>
                <i className="fa-solid fa-check" /> Construction &amp; delivery
              </li>
              <li>
                <i className="fa-solid fa-check" /> Quality &amp; governance
              </li>
            </ul>
          </div>
          <div className="cp-cap-card reveal" style={{ "--d": ".5s" }}>
            <i className="fa-solid fa-handshake" />
            <h3>Capital &amp; Stewardship</h3>
            <p>
              Disciplined capital, transparent governance and long-term stewardship — returns measured in
              decades.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-check" /> Investment &amp; advisory
              </li>
              <li>
                <i className="fa-solid fa-check" /> Asset &amp; community management
              </li>
              <li>
                <i className="fa-solid fa-check" /> Long-term stewardship
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
