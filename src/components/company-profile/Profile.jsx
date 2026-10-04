export default function Profile() {
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
              Building land into <span>legacy —</span> across four markets
            </h2>
            <div className="nova-gold-line reveal" style={{ "--d": ".2s" }} />
          </div>
          <div className="col-lg-5">
            <p className="nova-lead reveal" style={{ "--d": ".2s" }}>
              From land acquisition and master planning to construction, investment and long-term stewardship.
            </p>
            <p className="nova-muted-text mb-4 reveal" style={{ "--d": ".3s" }}>
              Our approach combines local market knowledge with one consistent global standard. We acquire
              intelligently, design responsibly and deliver with discipline — creating places of lasting
              commercial, social and environmental value.
            </p>
            <a href="#capabilities" className="btn btn-gold text-uppercase reveal" style={{ "--d": ".4s" }}>
              Explore capabilities <span>↗</span>
            </a>
          </div>
        </div>
        <div className="nova-profile-bottom reveal" style={{ "--d": ".3s" }}>
          <div className="nova-profile-number">
            <span className="profile-icon">
              <i className="fa-solid fa-clock-rotate-left" />
            </span>{" "}
            <strong>17</strong>
            <span>
              Years of
              <br />
              experience
            </span>
          </div>
          <div className="nova-profile-number">
            <span className="profile-icon">
              <i className="fa-solid fa-layer-group" />
            </span>{" "}
            <strong>45+</strong>
            <span>
              Projects
              <br />
              delivered
            </span>
          </div>
          <div className="nova-profile-number">
            <span className="profile-icon">
              <i className="fa-solid fa-map" />
            </span>{" "}
            <strong>3,200</strong>
            <span>
              Acres
              <br />
              developed
            </span>
          </div>
          <div className="nova-profile-number">
            <span className="profile-icon">
              <i className="fa-solid fa-earth-asia" />
            </span>{" "}
            <strong>04</strong>
            <span>
              Global
              <br />
              markets
            </span>
          </div>
          <div className="nova-profile-statement">
            <span className="eyebrow text-gold">Our standard</span>
            <p>Design. Engineering. Governance. Stewardship.</p>
            <small>One standard across Dubai · Dhaka · New York · London</small>
          </div>
        </div>
      </div>
    </section>
  );
}
