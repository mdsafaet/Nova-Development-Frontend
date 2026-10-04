export default function Stewardship() {
  return (
    <section id="stewardship" className="csr-stewardship">
      <div className="container">
        <div className="nova-section-label nova-section-label-light reveal" style={{ marginBottom: "16px" }}>
          <span>Stewardship</span>
        </div>
        <h2 className="reveal" style={{ "--d": ".1s" }}>
          Think beyond <span>today’s development.</span>
        </h2>
        <p className="csr-steward-lead reveal" style={{ "--d": ".2s" }}>
          Long-term stewardship means we stay — managing, maintaining and improving places for decades.
        </p>
        <div className="csr-steward-grid">
          <div className="reveal" style={{ "--d": ".3s" }}>
            <i className="fa-solid fa-shield-halved" />
            <strong>Governance</strong>
            <p>Audited, board-governed CSR funds — transparent reporting every year.</p>
          </div>
          <div className="reveal" style={{ "--d": ".4s" }}>
            <i className="fa-solid fa-handshake" />
            <strong>Partnership</strong>
            <p>With NGOs, local councils and residents — co-designed, locally led.</p>
          </div>
          <div className="reveal" style={{ "--d": ".5s" }}>
            <i className="fa-solid fa-arrow-trend-up" />
            <strong>Measurement</strong>
            <p>Track outcomes, not just spend — people, hectares, learning hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
