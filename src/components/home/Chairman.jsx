import { img } from "@/assets/images";

export default function Chairman() {
  return (
    <section id="chairman-message" className="nova-chairman-section">
      <div className="container">
        <div className="nova-chairman-card">
          <div className="nova-chairman-layout">
            <div className="nova-chairman-media fade-reveal" style={{ "--d": ".3s" }}>
              <div className="nova-chairman-photo">
                <img src={img.chairmen} alt="Chairman of Nova Development" />
                <div className="nova-chairman-photo-pill">
                  <div>
                    <strong>Chairman's Office</strong> <span>Nova Development Group</span>
                  </div>
                  <span className="est">Est. 2009</span>
                </div>
              </div>
            </div>
            <div className="nova-chairman-copy">
              <div className="nova-chairman-label reveal">
                <span className="dot" /> CHAIRMAN MESSAGE
              </div>
              <p className="nova-chairman-eyebrow reveal">A MESSAGE FROM OUR CHAIRMAN</p>
              <h2 className="nova-chairman-title reveal" style={{ "--d": ".1s" }}>
                Development is not <em>what we build.</em> <span>It is what we leave behind.</span>
              </h2>
              <div className="nova-chairman-underline" />
              <div className="nova-chairman-text reveal" style={{ "--d": ".2s" }}>
                <p className="lead">
                  Every Nova project begins with a responsibility to the people, communities and cities that
                  will inherit it.
                </p>
                <p>
                  Our ambition has never been simply to create buildings or acquire land. We aim to create
                  places with enduring value – commercially sound, thoughtfully designed and meaningful to the
                  people who experience them.
                </p>
              </div>
              <div className="nova-chairman-tags reveal" style={{ "--d": ".3s" }}>
                <span>Integrity</span>
                <i>•</i>
                <span>Design-led</span>
                <i>•</i>
                <span>Stewardship</span>
              </div>
              <div className="nova-chairman-footer reveal" style={{ "--d": ".4s" }}>
                <div className="nova-signature">
                  <span className="sig-icon">—</span>
                  <div>
                    <strong>Chairman's Office</strong>{" "}
                    <span>Nova Development Group · Dubai · Dhaka · New York · London</span>
                  </div>
                </div>
                <a href="#brand-story" className="nova-chairman-cta">
                  DISCOVER OUR STORY <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
