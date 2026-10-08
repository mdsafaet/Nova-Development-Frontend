import { motion } from "framer-motion";
import { LuUsers, LuLeaf, LuGraduationCap, LuSprout, LuArrowUpRight } from "react-icons/lu";
import Float, { bounce, Reveal } from "@/components/company-profile/Float";

const pillars = [
  { icon: LuUsers, title: "Community Development", text: "Neighbourhood infrastructure, livelihoods and inclusive spaces where we develop." },
  { icon: LuLeaf, title: "Environmental Stewardship", text: "Native landscapes, low-impact infrastructure and restoration beyond our boundaries." },
  { icon: LuGraduationCap, title: "Education & Youth", text: "Schools, scholarships and youth mentorship — investing in the next generation." },
  { icon: LuSprout, title: "Sustainable Development", text: "Resilient, resource-efficient places that age well and tread lightly." },
];

export default function Pillars() {
  return (
    <section id="pillars" className="csx csx-pillars">
      <div className="csx-orb csx-orb--bl" />

      <div className="csx-wrap">
        <div className="csx-head">
          <b>02</b>
          <i />
          <span>CSR Pillars</span>
        </div>

        <Reveal>
          <div className="csx-split">
            <h2 className="csx-title">
              Four ways we
              <span>give back.</span>
            </h2>
            <p className="csx-text">
              Each pillar is a long-term programme — not a one-off donation — with dedicated stewardship.
            </p>
          </div>
        </Reveal>

        <ul className="csx-pillars-grid">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08}>
                <Float className="csx-float" distance={i % 2 === 0 ? 7 : -7} duration={4.8 + i * 0.4} delay={i * 0.4}>
                  <motion.article className="csx-glass-light csx-pillar" whileHover={{ y: -12 }} transition={bounce}>
                    <div className="csx-pillar-top">
                      <span className="csx-ico"><Icon /></span>
                      <span className="csx-num">0{i + 1}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a href="#" className="csx-more">
                      Explore <LuArrowUpRight aria-hidden="true" />
                    </a>
                  </motion.article>
                </Float>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
