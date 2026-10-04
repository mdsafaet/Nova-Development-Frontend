export default function Markets() {
  return (
    <section id="markets" className="inv-markets">
      <div className="container">
        <div className="nova-section-label reveal">
          <span>Global Platform</span>
        </div>
        <h2 className="reveal" style={{ "--d": ".1s" }}>
          Four markets. <span>One standard.</span>
        </h2>
        <p
          className="reveal"
          style={{
            "--d": ".2s",
            maxWidth: "640px",
            color: "var(--muted-body)",
            marginTop: "12px",
            lineHeight: "1.7",
            fontSize: "14px",
          }}
        >
          Local expertise, global discipline — design, engineering, governance and stewardship held to one
          Nova standard.
        </p>
        <div className="inv-markets-grid">
          <div className="inv-market reveal" style={{ "--d": ".3s" }}>
            <img src="https://flagcdn.com/w40/ae.png" alt="UAE" />
            <strong>UAE — Dubai</strong>
            <span>Head office · Boulevard Plaza 24F · Operating</span>
            <small>Luxury residential &amp; commercial</small>
          </div>
          <div className="inv-market reveal" style={{ "--d": ".4s" }}>
            <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh" />
            <strong>Bangladesh — Dhaka</strong>
            <span>Gulshan 2 · Nova Land Tower · Operating</span>
            <small>Land estates &amp; master-planning</small>
          </div>
          <div className="inv-market reveal" style={{ "--d": ".5s" }}>
            <img src="https://flagcdn.com/w40/us.png" alt="USA" />
            <strong>USA — New York</strong>
            <span>One World Trade Center 62F · Expanding</span>
            <small>Commercial &amp; capital advisory</small>
          </div>
          <div className="inv-market reveal" style={{ "--d": ".6s" }}>
            <img src="https://flagcdn.com/w40/gb.png" alt="UK" />
            <strong>UK — London</strong>
            <span>Canary Wharf · Entering</span>
            <small>Residential &amp; mixed-use</small>
          </div>
        </div>
      </div>
    </section>
  );
}
