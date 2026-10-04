import { img } from "@/assets/images";

export default function Responsibility() {
  return (
    <section id="csr" className="nova-csr-section section-remove-space">
      <div className="container">
        <div className="nova-csr-heading">
          <div>
            <div className="nova-section-label reveal">
              <span>CSR Activities</span>
            </div>
            <h2 className="nova-display-title reveal" style={{ "--d": ".1s" }}>
              Development with <span>responsibility.</span>
            </h2>
          </div>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Our responsibility extends beyond the boundaries of our developments. We invest in people,
            communities and the environments around us.
          </p>
        </div>
        <div className="nova-csr-layout fade-reveal" style={{ "--d": ".3s" }}>
          <div className="nova-csr-image">
            <img src={img.community} alt="Nova community initiative" />
            <div className="nova-csr-image-label">
              <span>COMMUNITY</span> <strong>Building better futures</strong>
            </div>
          </div>
          <div className="nova-csr-content">
            <div className="nova-impact">
              <div>
                <strong>12K+</strong> <span>People reached</span>
              </div>
              <div>
                <strong>38</strong> <span>Community initiatives</span>
              </div>
              <div>
                <strong>17</strong> <span>Years of commitment</span>
              </div>
            </div>
            <div className="nova-csr-list">
              <a href="#">
                <span>
                  <small>01</small> Community Development
                </span>{" "}
                <strong>↗</strong>
              </a>{" "}
              <a href="#">
                <span>
                  <small>02</small> Environmental Stewardship
                </span>{" "}
                <strong>↗</strong>
              </a>{" "}
              <a href="#">
                <span>
                  <small>03</small> Education &amp; Youth
                </span>{" "}
                <strong>↗</strong>
              </a>{" "}
              <a href="#">
                <span>
                  <small>04</small> Sustainable Development
                </span>{" "}
                <strong>↗</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
