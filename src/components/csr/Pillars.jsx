export default function Pillars() {
  return (
    <section id="pillars" className="csr-pillars">
      <div className="container">
        <div className="nova-section-label reveal">
          <span>CSR Pillars</span>
        </div>
        <h2 className="reveal" style={{ "--d": ".1s" }}>
          Four ways we <span>give back.</span>
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
          Each pillar is a long-term programme — not a one-off donation — with dedicated stewardship.
        </p>
        <div className="csr-pillars-grid">
          <div className="csr-pillar reveal" style={{ "--d": ".3s" }}>
            <span className="num">01</span>
            <i className="fa-solid fa-people-group" />
            <strong>Community Development</strong>
            <p>Neighbourhood infrastructure, livelihoods and inclusive spaces where we develop.</p>
            <a href="#">
              Explore <span>↗</span>
            </a>
          </div>
          <div className="csr-pillar reveal" style={{ "--d": ".4s" }}>
            <span className="num">02</span>
            <i className="fa-solid fa-leaf" />
            <strong>Environmental Stewardship</strong>
            <p>Native landscapes, low-impact infrastructure and restoration beyond our boundaries.</p>
            <a href="#">
              Explore <span>↗</span>
            </a>
          </div>
          <div className="csr-pillar reveal" style={{ "--d": ".5s" }}>
            <span className="num">03</span>
            <i className="fa-solid fa-graduation-cap" />
            <strong>Education &amp; Youth</strong>
            <p>Schools, scholarships and youth mentorship — investing in the next generation.</p>
            <a href="#">
              Explore <span>↗</span>
            </a>
          </div>
          <div className="csr-pillar reveal" style={{ "--d": ".6s" }}>
            <span className="num">04</span>
            <i className="fa-solid fa-seedling" />
            <strong>Sustainable Development</strong>
            <p>Resilient, resource-efficient places that age well and tread lightly.</p>
            <a href="#">
              Explore <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
