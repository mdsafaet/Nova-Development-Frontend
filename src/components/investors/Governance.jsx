import { img } from "@/assets/images";

export default function Governance() {
  return (
    <section id="governance" className="vm-split vm-split--alt">
      <div className="container">
        <div className="vm-split-grid">
          <div className="vm-split-media fade-reveal" style={{ "--d": ".3s" }}>
            <img src={img.projectFeatured} alt="Governance — transparency" loading="lazy" />
            <div className="vm-media-cap">
              <span>Governance · Trust</span>
              <strong>Audited &amp; board-governed</strong>
            </div>
          </div>
          <div className="vm-split-text">
            <span className="vm-num reveal">02 — Governance</span>{" "}
            <span className="eyebrow text-gold reveal">How we protect capital</span>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Transparency is <span>our structure.</span>
            </h2>
            <div
              className="nova-gold-line reveal"
              style={{ "--d": ".2s", margin: "18px 0 22px", width: "56px" }}
            />
            <p className="vm-lead reveal" style={{ "--d": ".2s" }}>
              Deal-ready governance from day one — transparent reporting, board oversight and protected
              capital flows.
            </p>
            <div className="vm-mission-cards">
              <div className="reveal" style={{ "--d": ".3s" }}>
                <i className="fa-solid fa-file-shield" />
                <strong>Audited</strong>
                <span>Financials &amp; delivery</span>
              </div>
              <div className="reveal" style={{ "--d": ".4s" }}>
                <i className="fa-solid fa-people-group" />
                <strong>Board</strong>
                <span>Independent oversight</span>
              </div>
              <div className="reveal" style={{ "--d": ".5s" }}>
                <i className="fa-solid fa-vault" />
                <strong>Escrow</strong>
                <span>Protected capital</span>
              </div>
              <div className="reveal" style={{ "--d": ".6s" }}>
                <i className="fa-solid fa-chart-line" />
                <strong>Reporting</strong>
                <span>Quarterly, transparent</span>
              </div>
            </div>
            <p className="reveal" style={{ marginTop: "18px", "--d": ".7s" }}>
              Every project is ring-fenced, escrow-managed and reported with the same standard across UAE,
              Bangladesh, USA and UK — so partners see the same discipline, every market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
