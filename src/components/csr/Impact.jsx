import { motion } from "framer-motion";
import { img } from "@/assets/images";
import Float, { bounce, Reveal } from "@/components/company-profile/Float";

const stats = [
  { value: "12K+", label: "People reached" },
  { value: "38", label: "Community initiatives" },
  { value: "17", label: "Years of commitment" },
];

export default function Impact() {
  return (
    <section id="impact" className="csx csx-impact">
      <div className="csx-orb csx-orb--tr" />

      <div className="csx-wrap">
        <div className="csx-head">
          <b>01</b>
          <i />
          <span>Impact</span>
        </div>

        <div className="csx-split-grid">
          <Reveal>
            <div className="csx-copy">
              <p className="csx-kicker">What we&apos;ve done</p>
              <h2 className="csx-title">
                Better futures,
                <span>block by block.</span>
              </h2>
              <p className="csx-lead">
                CSR at Nova is not an add-on — it&apos;s how we steward places that outlive us.
              </p>
              <p className="csx-text">
                From schools and youth programmes to environmental restoration, every initiative is tied to the
                communities where we build — measured, governed and sustained for the long term.
              </p>

              <ul className="csx-impact-stats">
                {stats.map((s, i) => (
                  <li key={s.label}>
                    <Float className="csx-float" distance={5} duration={4.8 + i * 0.4} delay={i * 0.4}>
                      <motion.div className="csx-glass-light csx-mini" whileHover={{ y: -8 }} transition={bounce}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </motion.div>
                    </Float>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="csx-media">
              <div className="csx-media-img">
                <img src={img.community} alt="Community — building better futures" loading="lazy" decoding="async" />
              </div>
              <Float className="csx-media-cap" distance={7} duration={5}>
                <motion.div className="csx-glass csx-cap" whileHover={{ y: -8 }} transition={bounce}>
                  <span>Community · Impact</span>
                  <strong>Building better futures</strong>
                </motion.div>
              </Float>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
