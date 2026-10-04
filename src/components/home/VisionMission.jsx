import { useState } from "react";
import { img } from "@/assets/images";

export default function VisionMission() {
  const [tab, setTab] = useState("vision");
  return (
    <section id="vision-mission" className="nova-vision-section">
      <div className="container">
        <div className="nova-section-label justify-content-center reveal">
          <span>Corporate Vision &amp; Mission</span>
        </div>
        <div className="nova-vision-intro">
          <span className="nova-big-quote reveal" style={{ "--d": ".05s" }}>
            “
          </span>
          <h2 className="reveal" style={{ "--d": ".1s" }}>
            To become a trusted global development platform known for <span>places of lasting value.</span>
          </h2>
        </div>
        <div className="nova-vm-tabs reveal" style={{ "--d": ".2s" }}>
          <div className="nova-vm-tab-nav" role="tablist" aria-label="Vision and Mission">
            <button
              role="tab"
              aria-controls="panel-vision"
              id="tab-vision"
              data-tab="vision"
              className={`nova-vm-tab${tab === "vision" ? " active" : ""}`}
              aria-selected={tab === "vision"}
              onClick={() => setTab("vision")}
            >
              <span className="tab-num">01</span> Our Vision
            </button>{" "}
            <button
              role="tab"
              aria-controls="panel-mission"
              id="tab-mission"
              data-tab="mission"
              className={`nova-vm-tab${tab === "mission" ? " active" : ""}`}
              aria-selected={tab === "mission"}
              onClick={() => setTab("mission")}
            >
              <span className="tab-num">02</span> Our Mission
            </button>
          </div>
          <div className="nova-vm-panels">
            <div
              id="panel-vision"
              role="tabpanel"
              aria-labelledby="tab-vision"
              className={`nova-vm-panel${tab === "vision" ? " active" : ""}`}
            >
              <div className="nova-vm-image">
                <img src={img.community} alt="Vision — places people believe in, community-first" />{" "}
                <span className="img-caption">Vision · Legacy over short-term</span>
              </div>
              <div className="nova-vm-text">
                <span className="nova-panel-number">01</span>{" "}
                <span className="eyebrow text-gold">Our Vision</span>
                <h3>Build the places people believe in.</h3>
                <p>
                  We envision a future where development is measured not only by financial performance, but by
                  the lasting value it creates for people
                </p>
                <p>
                  Our vision extends to creating resilient neighborhoods, sustainable infrastructure and
                  places that foster belonging — investments that compound in social, environmental and
                  economic value over decades. Add more text here as needed; the layout expands gracefully
                  with scroll.
                </p>
                <p>
                  Every master plan, every acre and every partnership is guided by long-term thinking,
                  ensuring what we build today remains relevant and cherished tomorrow.
                </p>
              </div>
            </div>
            <div
              id="panel-mission"
              role="tabpanel"
              aria-labelledby="tab-mission"
              className={`nova-vm-panel${tab === "mission" ? " active" : ""}`}
            >
              <div className="nova-vm-image">
                <img src={img.investor} alt="Mission — enduring value, disciplined delivery" />{" "}
                <span className="img-caption">Mission · Discipline to delivery</span>
              </div>
              <div className="nova-vm-text">
                <span className="nova-panel-number">02</span>{" "}
                <span className="eyebrow text-gold">Our Mission</span>
                <h3>Turn opportunity into enduring value.</h3>
                <p>
                  We acquire intelligently, design responsibly and deliver with discipline — bringing together
                  land, capital, people and expertise to create meaningful destinations.
                </p>
                <p>
                  Our mission is operationalized through rigorous diligence, transparent governance and design
                  excellence — from land assembly and entitlements to engineering, construction and long-term
                  stewardship. More text can be added here without breaking the layout.
                </p>
                <p>
                  By aligning capital with community needs, we de-risk growth for investors while delivering
                  places that perform for owners and delight for residents.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="nova-principles">
          <div className="principle-card reveal" style={{ "--d": ".3s" }}>
            <div className="principle-head">
              <span className="num">01</span>{" "}
              <span className="icon">
                <i className="fa-solid fa-shield-halved" />
              </span>
            </div>
            <strong>Integrity</strong>
            <p>Do the right thing at every stage.</p>
          </div>
          <div className="principle-card reveal" style={{ "--d": ".4s" }}>
            <div className="principle-head">
              <span className="num">02</span>{" "}
              <span className="icon">
                <i className="fa-solid fa-award" />
              </span>
            </div>
            <strong>Excellence</strong>
            <p>Set a higher standard for delivery.</p>
          </div>
          <div className="principle-card reveal" style={{ "--d": ".5s" }}>
            <div className="principle-head">
              <span className="num">03</span>{" "}
              <span className="icon">
                <i className="fa-solid fa-leaf" />
              </span>
            </div>
            <strong>Stewardship</strong>
            <p>Think beyond today's development.</p>
          </div>
          <div className="principle-card reveal" style={{ "--d": ".6s" }}>
            <div className="principle-head">
              <span className="num">04</span>{" "}
              <span className="icon">
                <i className="fa-solid fa-handshake" />
              </span>
            </div>
            <strong>Partnership</strong>
            <p>Build lasting relationships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
