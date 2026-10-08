import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { bounce, Reveal } from "@/components/company-profile/Float";

export default function Cta() {
  return (
    <section className="csx csx-cta">
      <div className="csx-orb csx-orb--tr" />

      <div className="csx-wrap">
        <Reveal>
          <motion.div className="csx-glass csx-cta-card" whileHover={{ y: -6 }} transition={bounce}>
            <div className="csx-cta-rings" aria-hidden="true" />

            <div className="csx-cta-body">
              <h3>
                Responsibility is
                <span>a design choice.</span>
              </h3>
              <p>Speak with us about community partnerships, sponsorships or stewardship.</p>
            </div>

            <div className="csx-cta-actions">
              <Link to="/contact" className="csx-btn csx-btn--primary">
                Contact CSR team <LuArrowUpRight />
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
