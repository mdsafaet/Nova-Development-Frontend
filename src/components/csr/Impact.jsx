import { img } from "@/assets/images";

export default function Impact() {
  return (
    <section id="impact" className="vm-split">
      <div className="container">
        <div className="vm-split-grid">
          <div className="vm-split-text">
            <span className="vm-num reveal">01 — Impact</span>{" "}
            <span className="eyebrow text-gold reveal">What we’ve done</span>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Better futures, <span>block by block.</span>
            </h2>
            <div
              className="nova-gold-line reveal"
              style={{ "--d": ".2s", margin: "18px 0 22px", width: "56px" }}
            />
            <p className="vm-lead reveal" style={{ "--d": ".2s" }}>
              CSR at Nova is not an add-on — it’s how we steward places that outlive us.
            </p>
            <p className="reveal" style={{ "--d": ".25s" }}>
              From schools and youth programmes to environmental restoration, every initiative is tied to the
              communities where we build — measured, governed and sustained for the long term.
            </p>
            <div className="csr-impact-grid">
              <div className="reveal" style={{ "--d": ".3s" }}>
                <strong>12K+</strong>
                <span>People reached</span>
              </div>
              <div className="reveal" style={{ "--d": ".4s" }}>
                <strong>38</strong>
                <span>Community initiatives</span>
              </div>
              <div className="reveal" style={{ "--d": ".5s" }}>
                <strong>17</strong>
                <span>Years of commitment</span>
              </div>
            </div>
          </div>
          <div className="vm-split-media fade-reveal" style={{ "--d": ".3s" }}>
            <img src={img.community} alt="Community — building better futures" loading="lazy" />
            <div className="vm-media-cap">
              <span>Community · Impact</span>
              <strong>Building better futures</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
