export default function Intro() {
  return (
    <section id="company-profile" className="nova-profile-section">
      <div className="container">
        <div className="nova-section-label reveal">
          <span>Company Profile</span>
        </div>
        <div className="row align-items-end g-5">
          <div className="col-lg-7">
            <p className="eyebrow text-gold reveal">Who we are</p>
            <h2 className="nova-display-title reveal" style={{ "--d": ".1s" }}>
              We develop places <span>that outlive us.</span>
            </h2>
            <div className="nova-gold-line reveal" style={{ "--d": ".2s" }} />
          </div>
          <div className="col-lg-5">
            <p className="nova-lead reveal" style={{ "--d": ".2s" }}>
              Nova Development is a global land and real estate development group creating communities,
              residences and commercial destinations across four markets.
            </p>
            <p className="nova-muted-text mb-4 reveal" style={{ "--d": ".3s" }}>
              From land acquisition and master planning to construction, investment and long-term stewardship,
              our approach combines local market knowledge with one consistent global standard.
            </p>
            <a href="#brand-story" className="nova-text-link reveal" style={{ "--d": ".4s" }}>
              Discover Nova <span>↗</span>
            </a>
          </div>
        </div>
        <div className="nova-profile-bottom">
          <div className="nova-profile-number reveal" style={{ "--d": ".3s" }}>
            <strong>17</strong>{" "}
            <span>
              Years of
              <br /> experience
            </span>
          </div>
          <div className="nova-profile-number reveal" style={{ "--d": ".4s" }}>
            <strong>45+</strong>{" "}
            <span>
              Projects
              <br /> delivered
            </span>
          </div>
          <div className="nova-profile-number reveal" style={{ "--d": ".5s" }}>
            <strong>3,200</strong>{" "}
            <span>
              Acres
              <br /> developed
            </span>
          </div>
          <div className="nova-profile-number reveal" style={{ "--d": ".6s" }}>
            <strong>04</strong>{" "}
            <span>
              Global
              <br /> markets
            </span>
          </div>
          <div className="nova-profile-statement reveal" style={{ "--d": ".7s" }}>
            <span className="eyebrow text-gold">Our standard</span>
            <p>Design. Engineering. Governance. Stewardship.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
