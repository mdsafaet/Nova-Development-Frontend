import { motion } from "framer-motion";
import { LuShieldCheck, LuBadgeCheck, LuLeaf, LuHandshake } from "react-icons/lu";
import Float, { bounce, Reveal } from "./Float";

const values = [
  { icon: LuShieldCheck, title: "Integrity", text: "Do the right thing at every stage — transparent governance and accountable delivery." },
  { icon: LuBadgeCheck, title: "Excellence", text: "Set a higher standard for design, engineering and delivery in every market." },
  { icon: LuLeaf, title: "Stewardship", text: "Think beyond today's development — resilient, sustainable and community-first." },
  { icon: LuHandshake, title: "Partnership", text: "Build lasting relationships with investors, partners and communities." },
];

export default function Values() {
  return (
    <section className="cpx cpx-values">
      <div className="cpx-orb cpx-orb--tr" />

      <div className="cpx-wrap">
        <div className="cpx-head">
          <b>04</b>
          <i />
          <span>Values</span>
        </div>

        <Reveal>
          <div className="cpx-split">
            <h2 className="cpx-title">
              Guided by
              <span>what endures.</span>
            </h2>
            <p>
              Every master plan, every acre and every partnership is guided by long-term thinking — ensuring what
              we create today remains valuable tomorrow.
            </p>
          </div>
        </Reveal>

        <div className="cpx-values-grid">
          {values.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Float
                className="cpx-float"
                distance={index % 2 === 0 ? 7 : -7}
                duration={4.8 + index * 0.4}
                delay={index * 0.4}
              >
                <motion.article
                  className="cpx-glass-light cpx-value"
                  whileHover={{ y: -12, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={bounce}
                >
                  <div className="cpx-value-top">
                    <div className="cpx-ico"><Icon /></div>
                    <span className="cpx-value-num">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              </Float>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
