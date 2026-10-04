import { img } from "@/assets/images";

export default function Vision() {
  return (
    <section id="vision" className="vm-split">
      <div className="container">
        <div className="vm-split-grid">
          <div className="vm-split-text">
            <span className="vm-num reveal">01 — Vision</span>{" "}
            <span className="eyebrow text-gold reveal">What we believe</span>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Build the places <span>people believe in.</span>
            </h2>
            <div
              className="nova-gold-line reveal"
              style={{ "--d": ".2s", margin: "18px 0 22px", width: "56px" }}
            />
            <p className="vm-lead reveal" style={{ "--d": ".2s" }}>
              We envision a future where development is measured not only by financial performance, but by the
              lasting value it creates.
            </p>
            <p className="reveal" style={{ "--d": ".2s" }}>
              Resilient neighborhoods. Sustainable infrastructure. Places that foster belonging. Investments
              that compound in social, environmental and economic value over decades — not short-term gains.
            </p>
            <ul className="vm-checks">
              <li className="reveal" style={{ "--d": ".3s" }}>
                <i className="fa-solid fa-check" /> Legacy over short-term — places that appreciate in every
                sense
              </li>
              <li className="reveal" style={{ "--d": ".4s" }}>
                <i className="fa-solid fa-check" /> Design-led, community-first — people at the centre of
                every plan
              </li>
              <li className="reveal" style={{ "--d": ".5s" }}>
                <i className="fa-solid fa-check" /> One standard across Dubai · Dhaka · New York · London
              </li>
            </ul>
          </div>
          <div className="vm-split-media fade-reveal" style={{ "--d": ".3s" }}>
            <img
              src={img.community}
              alt="Vision — places of lasting value, community-first neighborhoods"
              loading="lazy"
            />
            <div className="vm-media-cap reveal" style={{ "--d": ".4s" }}>
              <span>Vision · Legacy</span>
              <strong>45+ projects · 3,200 acres · 4 markets</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
