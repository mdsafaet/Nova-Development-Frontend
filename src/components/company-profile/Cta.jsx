import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuMoveUpRight } from "react-icons/lu";
import { bounce, Reveal } from "./Float";

export default function Cta() {
  return (
    <section className="cpx cpx-cta">
      <div className="cpx-orb cpx-orb--tr" />

      <div className="cpx-wrap">
        <Reveal>
          <motion.div className="cpx-glass cpx-cta-card" whileHover={{ y: -6 }} transition={bounce}>
            <div className="cpx-cta-rings" aria-hidden="true" />

            <div className="cpx-cta-body">
              <p className="cpx-kicker cpx-kicker--light">Start a conversation</p>
              <h2>
                Let's build
                <span>what comes next.</span>
              </h2>
              <p>Speak with our team about projects, partnerships or investment opportunities.</p>
              <div className="cpx-cta-cities">
                <span>Dubai</span>
                <span>Dhaka</span>
                <span>New York</span>
                <span>London</span>
              </div>
            </div>

            <div className="cpx-cta-actions">
              <Link to="/contact" className="cpx-btn cpx-btn--primary">
                Speak to an advisor <LuArrowUpRight />
              </Link>
              <Link to="/portfolio" className="cpx-btn cpx-btn--ghost">
                Explore portfolio <LuMoveUpRight />
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
