import CountUp from "react-countup";

const stats = [
  { end: 17, label: ["Years of", "experience"], delay: ".3s" },
  { end: 45, plus: true, label: ["Projects", "delivered"], delay: ".4s" },
  { end: 3200, label: ["Acres", "developed"], delay: ".5s" },
  { end: 4, pad: true, label: ["Global", "markets"], delay: ".6s" },
];

const standard = ["Design", "Engineering", "Governance", "Stewardship"];

// stable formatter, keeps "04" two digits wide while counting
const pad2 = (n) => String(Math.round(n)).padStart(2, "0");

export default function Intro() {
  return (
    <section id="company-profile" className="np-section">
      <div className="container">
        {/* section label */}
        <div className="np-label reveal">
          <span className="np-label-index">01</span>
          <span className="np-label-line" />
          <span className="np-label-text">Company Profile</span>
        </div>

        {/* headline + copy */}
        <div className="row g-5 align-items-end">
          <div className="col-lg-7">
            <p className="np-eyebrow reveal">Who we are</p>
            <h2 className="np-title reveal" style={{ "--d": ".1s" }}>
              We develop places <em>that outlive us.</em>
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="np-lead reveal" style={{ "--d": ".2s" }}>
              Nova Development is a global land and real estate development group creating communities,
              residences and commercial destinations across four markets.
            </p>
            <p className="np-body reveal" style={{ "--d": ".3s" }}>
              From land acquisition and master planning to construction, investment and long-term stewardship,
              our approach combines local market knowledge with one consistent global standard.
            </p>
            <a href="#brand-story" className="np-link reveal" style={{ "--d": ".4s" }}>
              <span>Discover Nova</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </div>

        {/* key figures */}
        <div className="np-stats">
          {stats.map((s) => (
            <div key={s.label.join(" ")} className="np-stat reveal" style={{ "--d": s.delay }}>
              <div className="np-stat-num">
                <CountUp
                  start={0}
                  end={s.end}
                  duration={2.6}
                  separator=","
                  formattingFn={s.pad ? pad2 : undefined}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {s.plus && <sup>+</sup>}
              </div>
              <p className="np-stat-label">
                {s.label[0]}
                <br /> {s.label[1]}
              </p>
            </div>
          ))}
        </div>

{/* our standard */}
<div className="np-pillars reveal" style={{ "--d": ".7s" }}>
  <span className="np-pillars-tag">Our standard</span>
  <ul className="np-pillars-list">
    {standard.map((w, i) => (
      <li key={w} className="np-pillar">
        <span className="np-pillar-n">0{i + 1}</span>
        <span className="np-pillar-t">{w}.</span>
      </li>
    ))}
  </ul>
</div>
      </div>
    </section>
  );
}