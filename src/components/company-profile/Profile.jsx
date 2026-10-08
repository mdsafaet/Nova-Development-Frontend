import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { LuClock3, LuLayers3, LuMap, LuEarth, LuArrowUpRight } from "react-icons/lu";
import Float, { bounce, Reveal } from "./Float";

const stats = [
  { value: 17, label: "Years of experience", icon: LuClock3 },
  { value: 45, suffix: "+", label: "Projects delivered", icon: LuLayers3 },
  { value: 3200, label: "Acres developed", icon: LuMap },
  { value: 4, pad: true, label: "Global markets", icon: LuEarth },
];

const standards = ["Design", "Engineering", "Governance", "Stewardship"];

const formatNumber = (number, pad) =>
  pad ? String(Math.round(number)).padStart(2, "0") : Math.round(number).toLocaleString("en-US");

export default function Profile() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="company-profile" className="cpx cpx-profile">
      <div className="cpx-orb cpx-orb--tr" />
      <div className="cpx-orb cpx-orb--bl" />

      <div className="cpx-wrap">
        <div className="cpx-head">
          <b>01</b>
          <i />
          <span>Company Profile</span>
        </div>

        <Reveal>
          <div className="cpx-intro">
            <div>
              <p className="cpx-kicker">Who we are</p>
              <h2 className="cpx-title">
                Building land into
                <span>legacy — across four markets.</span>
              </h2>
            </div>

            <div className="cpx-copy">
              <p className="cpx-lead">
                From land acquisition and master planning to construction, investment and long-term stewardship.
              </p>
              <p className="cpx-text">
                Our approach combines local market knowledge with one consistent global standard. We acquire
                intelligently, design responsibly and deliver with discipline — creating places of lasting
                commercial, social and environmental value.
              </p>
              <a href="#capabilities" className="cpx-link">
                Explore capabilities <LuArrowUpRight />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="cpx-stats">
          {stats.map(({ value, suffix, label, icon: Icon, pad }, index) => {
            const isActive = activeCard === index;
            return (
              <Reveal key={label} delay={index * 0.08}>
                <Float className="cpx-float" distance={8} duration={5 + index * 0.5} delay={index * 0.5}>
                  <motion.button
                    type="button"
                    aria-pressed={isActive}
                    className={`cpx-stat cpx-glass-light${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveCard(isActive ? null : index)}
                    animate={{ y: isActive ? -22 : 0, scale: isActive ? 1.035 : 1 }}
                    whileHover={isActive ? {} : { y: -10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={bounce}
                  >
                    <span className="cpx-stat-top">
                      <span className="cpx-ico"><Icon /></span>
                      <span className="cpx-tag">{isActive ? "Selected" : "Explore"}</span>
                    </span>

                    <span className="cpx-stat-value">
                      <CountUp
                        start={0}
                        end={value}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                        formattingFn={(n) => formatNumber(n, pad)}
                      />
                      {suffix && <sup>{suffix}</sup>}
                    </span>

                    <span className="cpx-stat-label">{label}</span>
                    <span className="cpx-stat-line" />
                    <span className="cpx-stat-glow" />
                  </motion.button>
                </Float>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="cpx-standard cpx-glass-light">
            <div className="cpx-standard-label">
              <span>Our standard</span>
              <p>One philosophy across every market.</p>
            </div>
            <div className="cpx-pills">
              {standards.map((item) => (
                <div key={item} className="cpx-pill">
                  <i />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
