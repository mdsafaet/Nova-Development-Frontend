import { motion } from "framer-motion";
import { LuMapPinned, LuHardHat, LuLandmark, LuCheck, LuArrowUpRight } from "react-icons/lu";
import Float, { bounce, Reveal } from "./Float";

const capabilities = [
  {
    icon: LuMapPinned,
    title: "Land & Master Planning",
    text: "Intelligent acquisition, diligence, entitlements and master planning — building resilient neighborhoods and infrastructure.",
    items: ["Land assembly & diligence", "Master planning & entitlements", "Sustainable infrastructure"],
  },
  {
    icon: LuHardHat,
    title: "Design & Delivery",
    text: "Design excellence, engineering discipline and construction stewardship — delivered to one consistent standard.",
    items: ["Architecture & engineering", "Construction & delivery", "Quality & governance"],
  },
  {
    icon: LuLandmark,
    title: "Capital & Stewardship",
    text: "Disciplined capital, transparent governance and long-term stewardship — returns measured in decades.",
    items: ["Investment & advisory", "Asset & community management", "Long-term stewardship"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="cpx cpx-cap">
      <div className="cpx-orb cpx-orb--bl" />
      <div className="cpx-gridlines" />

      <div className="cpx-wrap">
        <div className="cpx-head cpx-head--light">
          <b>03</b>
          <i />
          <span>Capabilities</span>
        </div>

        <Reveal>
          <div className="cpx-split">
            <h2 className="cpx-title cpx-title--light">
              What we do —
              <span>end to end.</span>
            </h2>
            <p>
              An integrated development platform spanning the full lifecycle, creating long-term value for
              investors, owners and communities.
            </p>
          </div>
        </Reveal>

        <div className="cpx-cap-grid">
          {capabilities.map(({ icon: Icon, title, text, items }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <Float className="cpx-float" distance={9} duration={5.5 + index * 0.6} delay={index * 0.7}>
                <motion.article
                  className="cpx-glass cpx-card"
                  whileHover={{ y: -14 }}
                  whileTap={{ scale: 0.985 }}
                  transition={bounce}
                >
                  <div className="cpx-card-top">
                    <div className="cpx-card-ico"><Icon /></div>
                    <span className="cpx-card-num">0{index + 1}</span>
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>

                  <ul className="cpx-checks">
                    {items.map((item) => (
                      <li key={item}><LuCheck aria-hidden="true" />{item}</li>
                    ))}
                  </ul>

                  <div className="cpx-card-arrow" aria-hidden="true"><LuArrowUpRight /></div>
                </motion.article>
              </Float>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
