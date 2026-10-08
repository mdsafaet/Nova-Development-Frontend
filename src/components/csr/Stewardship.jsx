import { motion } from "framer-motion";
import { LuShieldCheck, LuHandshake, LuTrendingUp } from "react-icons/lu";
import Float, { bounce, Reveal } from "@/components/company-profile/Float";

const items = [
  { icon: LuShieldCheck, title: "Governance", text: "Audited, board-governed CSR funds — transparent reporting every year." },
  { icon: LuHandshake, title: "Partnership", text: "With NGOs, local councils and residents — co-designed, locally led." },
  { icon: LuTrendingUp, title: "Measurement", text: "Track outcomes, not just spend — people, hectares, learning hours." },
];

export default function Stewardship() {
  return (
    <section id="stewardship" className="csx csx-steward">
      <div className="csx-gridlines" />

      <div className="csx-wrap">
        <div className="csx-head csx-head--light">
          <b>03</b>
          <i />
          <span>Stewardship</span>
        </div>

        <Reveal>
          <div className="csx-split">
            <h2 className="csx-title csx-title--light">
              Think beyond
              <span>today&apos;s development.</span>
            </h2>
            <p className="csx-text csx-text--light">
              Long-term stewardship means we stay — managing, maintaining and improving places for decades.
            </p>
          </div>
        </Reveal>

        <ul className="csx-steward-grid">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.1}>
                <Float className="csx-float" distance={8} duration={5.4 + i * 0.6} delay={i * 0.6}>
                  <motion.article className="csx-glass csx-step" whileHover={{ y: -12 }} transition={bounce}>
                    <span className="csx-ico csx-ico--dark"><Icon /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
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
