import { img } from "@/assets/images";

export default function Mission() {
  return (
    <section id="mission" className="vm-split vm-split--alt">
      <div className="container">
        <div className="vm-split-grid">
          <div className="vm-split-media fade-reveal" style={{ "--d": ".3s" }}>
            <img
              src={img.investor}
              alt="Mission — discipline to delivery, governance and execution"
              loading="lazy"
            />
            <div className="vm-media-cap reveal" style={{ "--d": ".4s" }}>
              <span>Mission · Delivery</span>
              <strong>Discipline from land to stewardship</strong>
            </div>
          </div>
          <div className="vm-split-text">
            <span className="vm-num reveal">02 — Mission</span>{" "}
            <span className="eyebrow text-gold reveal">How we deliver</span>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Turn opportunity <span>into enduring value.</span>
            </h2>
            <div
              className="nova-gold-line reveal"
              style={{ "--d": ".2s", margin: "18px 0 22px", width: "56px" }}
            />
            <p className="vm-lead reveal" style={{ "--d": ".2s" }}>
              We acquire intelligently, design responsibly and deliver with discipline — bringing together
              land, capital, people and expertise.
            </p>
            <p className="reveal" style={{ "--d": ".2s" }}>
              Operationalized through rigorous diligence, transparent governance and engineering excellence:
              from land assembly and entitlements to construction and long-term stewardship. We de-risk growth
              for investors while delivering places that perform for owners and delight residents.
            </p>
            <div className="vm-mission-cards">
              <div className="reveal" style={{ "--d": ".3s" }}>
                <i className="fa-solid fa-magnifying-glass-chart" />
                <strong>Acquire</strong>
                <span>Diligence &amp; master planning</span>
              </div>
              <div className="reveal" style={{ "--d": ".4s" }}>
                <i className="fa-solid fa-pen-ruler" />
                <strong>Design</strong>
                <span>Architecture &amp; engineering</span>
              </div>
              <div className="reveal" style={{ "--d": ".5s" }}>
                <i className="fa-solid fa-helmet-safety" />
                <strong>Deliver</strong>
                <span>Build &amp; govern</span>
              </div>
              <div className="reveal" style={{ "--d": ".6s" }}>
                <i className="fa-solid fa-leaf" />
                <strong>Steward</strong>
                <span>Operate &amp; care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
