export default function Values() {
  return (
    <section id="values" className="vm-values">
      <div className="container">
        <div className="nova-section-label nova-section-label-light reveal" style={{ marginBottom: "16px" }}>
          <span>Core Values</span>
        </div>
        <h2 className="reveal" style={{ "--d": ".1s" }}>
          Guided by <span>what endures.</span>
        </h2>
        <p className="vm-values-lead reveal" style={{ "--d": ".2s" }}>
          Four principles inherited from the Chairman’s office — filter every decision, every acre, every
          partnership.
        </p>
        <div className="vm-values-grid">
          <div className="vm-value-card reveal" style={{ "--d": ".3s" }}>
            <span className="num">01</span>
            <i className="fa-solid fa-shield-halved" />
            <strong>Integrity</strong>
            <p>
              Do the right thing at every stage — transparent governance, audited delivery, accountable
              partnerships.
            </p>
          </div>
          <div className="vm-value-card reveal" style={{ "--d": ".4s" }}>
            <span className="num">02</span>
            <i className="fa-solid fa-award" />
            <strong>Excellence</strong>
            <p>
              Set a higher standard for design, engineering and delivery in every market — one Nova standard.
            </p>
          </div>
          <div className="vm-value-card reveal" style={{ "--d": ".5s" }}>
            <span className="num">03</span>
            <i className="fa-solid fa-leaf" />
            <strong>Stewardship</strong>
            <p>
              Think beyond today’s development — resilient, sustainable, community-first places that age well.
            </p>
          </div>
          <div className="vm-value-card reveal" style={{ "--d": ".6s" }}>
            <span className="num">04</span>
            <i className="fa-solid fa-handshake" />
            <strong>Partnership</strong>
            <p>
              Build lasting relationships with investors, partners and communities — returns measured in
              decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
