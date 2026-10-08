import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  LuArrowLeft,
  LuArrowUpRight,
  LuLink2,
  LuMail,
  LuSend,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";


export default function NewsSingleContent() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="nvn-article-section">
      <div className="nvn-shell">
        <div className="nvn-article-layout">
          {/* =========================================
              ARTICLE
          ========================================== */}

          <article className="nvn-article">
            <Reveal>
              <p className="nvn-dropcap">
                Nova Development today announced
                Harbour Residences — a 38-storey
                waterfront collection at Dubai
                Harbour that distils fifteen years
                of Gulf delivery into one address:
                Gulf views, deep balconies and a
                board-governed, escrow-protected
                ownership structure.
              </p>

              <p>
                Priced from AED 2.4M for 2-bed
                waterfront apartments, the release
                brings 214 branded residences to a
                harbour that already connects
                Bluewaters, Palm Jumeirah and Dubai
                Marina by footbridge and tram.
                Handover is phased from Q4 2028,
                with construction linked to RERA
                escrow and quarterly engineer
                certification.
              </p>
            </Reveal>


            <Reveal delay={0.08}>
              <figure className="nvn-inline-image">
                <img
                  src={img.news1}
                  alt="Dubai Harbour"
                  loading="lazy"
                />

                <figcaption>
                  Harbour Residences — Dubai
                  Harbour. Render: indicative ·
                  Subject to authority approval.
                </figcaption>
              </figure>
            </Reveal>


            <Reveal>
              <h2>
                Why Harbour, why now
              </h2>

              <p>
                Dubai Harbour has matured from
                marina vision to lived waterfront
                — 20M+ visitors in 2025, 1.5km
                beachfront and direct access to
                Sheikh Zayed Road. Nova acquired
                the 1.2-acre plot in 2024 and spent
                ten months on wind, light and
                marine studies with Buro Happold
                before fixing the massing. The
                result is a narrow floorplate: 82%
                of units are corner or dual-aspect,
                every living room carries a 2.4m
                sliding system, and service cores
                are pushed north to preserve south
                light.
              </p>

              <p>
                “We do not chase height for its own
                sake,” said the Group Development
                Director. “Harbour Residences is
                38 storeys because that is where
                view, wind comfort and construction
                certainty align. Taller would have
                meant compromises we are not
                willing to make.”
              </p>
            </Reveal>


            <Reveal>
              <blockquote>
                Every residence faces water. Every
                decision faces audit. That is the
                Nova standard from Dubai to London.
              </blockquote>
            </Reveal>


            <Reveal>
              <h2>
                Residences &amp; floorplans
              </h2>

              <p>
                The collection spans 2-bed
                (1,180–1,320 sq ft), 3-bed
                (1,780–2,050 sq ft) and duplex
                penthouses (3,600–4,200 sq ft) —
                all with 3.15m clear height, German
                kitchens and stone from the same
                Portuguese quarry used in our
                London townhouses. Balconies
                average 180 sq ft, designed for
                outdoor dining rather than display.
              </p>

              <ul>
                <li>
                  <strong>
                    2-Bed Waterfront:
                  </strong>{" "}
                  AED 2.4M–3.1M · 2.5 bath · maids
                  · 1 parking · 60/40 payment plan,
                  2% DLD waiver on booking
                </li>

                <li>
                  <strong>
                    3-Bed Harbour Corner:
                  </strong>{" "}
                  AED 3.8M–4.6M · 3.5 bath · study
                  + maids · 2 parking · handover Q4
                  2028–Q1 2029
                </li>

                <li>
                  <strong>
                    Duplex Penthouse:
                  </strong>{" "}
                  AED 9.2M–11.5M · private lift ·
                  terrace pool · 3 parking ·
                  limited to 6 units
                </li>
              </ul>

              <p>
                Floor-to-ceiling glazing is low-E,
                laminated for acoustics, with
                automated blinds and VRF cooling
                metered per unit — a detail that
                matters when summer service charges
                are reconciled. On-site district
                cooling is prepaid for two years,
                then capped at AED 8.5/sq ft.
              </p>
            </Reveal>


            <Reveal>
              <h2>
                Amenities that are actually used
              </h2>

              <p>
                Instead of a long amenities list,
                Harbour Residences invests in four
                spaces residents will use daily: a
                25m harbour-edge pool, a co-work
                library with harbour light, a
                private residents’ marina lounge
                and a ground-floor neighbourhood
                market operated by Nova Community.
                Gym, kids’ club and meeting rooms
                sit on podium level 4 — away from
                lift lobbies, with acoustic
                separation from residences.
              </p>

              <p>
                Ground-floor retail is curated, not
                leased to the highest bidder:
                bakery, pharmacy, nursery and a
                waterfront brasserie. No shisha,
                no late-night bar — a decision
                taken after resident surveys at our
                Bangladesh waterfront community
                showed quiet evenings ranked above
                nightlife.
              </p>
            </Reveal>


            <Reveal>
              <h2>
                Investment &amp; governance — why
                institutions buy Nova
              </h2>

              <p>
                All deposits remain in
                RERA-registered escrow at First Abu
                Dhabi Bank, released only against
                certified construction milestones.
                Nova reports quarterly — audited by
                KPMG — to a five-member board that
                includes two independent directors.
                The same structure delivered our
                120+ US units on escrow without a
                single late penalty since 2019.
              </p>

              <ul>
                <li>
                  Escrow: FAB · Engineer: WSP ·
                  Contractor: Alec (pre-tender) ·
                  Architect: Dewan + Nova Design
                  Studio
                </li>

                <li>
                  Service charge forecast: AED
                  14.5/sq ft pa · Sinking fund: 8%
                  · Two-year DLMC managed, then
                  owners’ association
                </li>

                <li>
                  Rental insight: Marina/Harbour
                  2-beds let at AED 135k–155k pa
                  (Bayut Q2 2026); Nova’s exit
                  rental guarantee: 5% net for 2
                  years, optional
                </li>
              </ul>

              <p>
                Foreign freehold title, golden-visa
                eligibility at AED 2M+ and
                assignable Oqood make Harbour
                Residences liquid for GCC and South
                Asian investors who already hold
                Nova assets in Dhaka and Texas. One
                standard, four markets — Dubai ·
                Dhaka · New York · London.
              </p>
            </Reveal>


            <Reveal>
              <h2>
                Sustainability without slogans
              </h2>

              <p>
                The tower targets LEED Gold: 38%
                energy reduction vs ASHRAE
                baseline via high-performance
                façade, heat-recovery VRF and solar
                for common areas. Potable water is
                cut 30% through greywater for
                irrigation; native ghaf and sidr
                planting reduces irrigation demand
                by 45%. WELL principles inform air
                and light — MERV-13 filtration,
                circadian lighting in corridors —
                not just a plaque in the lobby.
              </p>
            </Reveal>


            <Reveal>
              <div className="nvn-glance">
                <p className="nvn-kicker">
                  At a glance
                </p>

                <h3>
                  At a glance
                </h3>

                <ul>
                  <li>
                    214 residences · 38 storeys ·
                    1.2-acre harbour plot · 82%
                    dual-aspect
                  </li>

                  <li>
                    Handover Q4 2028 (Tower A) / Q1
                    2029 (Tower B) · 60/40 plan ·
                    2% DLD waiver at booking
                  </li>

                  <li>
                    Escrow: RERA/FAB · Board: 5
                    members, 2 independent · Audit:
                    KPMG quarterly
                  </li>
                </ul>
              </div>
            </Reveal>


            <Reveal>
              <p className="nvn-article-note">
                <em>
                  Sales gallery at Dubai Harbour
                  Yacht Club is open 10am–8pm.
                  Private viewings by appointment —{" "}
                  <Link to="/contact">
                    enquire with our advisors
                  </Link>
                  . Prices, plans and payment terms
                  correct at 12 Aug 2026; E&amp;OE,
                  subject to authority approval.
                </em>
              </p>
            </Reveal>


            <Reveal>
              <div className="nvn-tags">
                <span>
                  Tags:
                </span>

                <Link to="/newsroom">
                  Dubai
                </Link>

                <Link to="/newsroom">
                  Residential
                </Link>

                <a href="#">
                  Investors
                </a>

                <a href="#">
                  Harbour
                </a>
              </div>
            </Reveal>


            <Reveal>
              <div className="nvn-article-nav">
                <Link
                  to="/newsroom"
                  className="nvn-back"
                >
                  <LuArrowLeft />
                  Back to newsroom
                </Link>

                <Link
                  to="/contact"
                  className="nvn-button"
                >
                  Press enquiries
                  <LuArrowUpRight />
                </Link>
              </div>
            </Reveal>
          </article>


          {/* =========================================
              SIDEBAR
          ========================================== */}

          <aside className="nvn-sidebar">
            <Float
              distance={6}
              duration={6}
              delay={0.2}
            >
              <motion.div
                className="nvn-side-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -8 }
                }
                transition={bounce}
              >
                <span className="nvn-side-label">
                  Share
                </span>

                <div className="nvn-share">
                  <a
                    href="#"
                    aria-label="Share on X"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    <LuSend />
                    <span>
                      X
                    </span>
                  </a>

                  <a
                    href="#"
                    aria-label="Share on LinkedIn"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    <LuSend />
                    <span>
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="#"
                    aria-label="Copy article link"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    <LuLink2 />
                    <span>
                      Link
                    </span>
                  </a>
                </div>
              </motion.div>
            </Float>


            <Float
              distance={7}
              duration={6.4}
              delay={0.45}
            >
              <motion.div
                className="nvn-side-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -8 }
                }
                transition={bounce}
              >
                <span className="nvn-side-icon">
                  <LuMail />
                </span>

                <span className="nvn-side-label">
                  Press contact
                </span>

                <p>
                  communications@novaland.group
                  <br />
                  +971 4 555 8800
                </p>

                <Link
                  to="/contact"
                  className="nvn-side-action"
                >
                  Contact press office
                  <LuArrowUpRight />
                </Link>
              </motion.div>
            </Float>


            <Float
              distance={6}
              duration={6.8}
              delay={0.7}
            >
              <motion.div
                className="nvn-side-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -8 }
                }
                transition={bounce}
              >
                <span className="nvn-side-label">
                  Related stories
                </span>

                <div className="nvn-related-list">
                  <Link
                    to="/newsroom"
                    className="nvn-related"
                  >
                    <img
                      src={img.news2}
                      alt=""
                      loading="lazy"
                    />

                    <span>
                      <small>
                        UK · 28 Jun 2026
                      </small>

                      <strong>
                        Nova completes 180-acre land
                        assembly in London
                      </strong>
                    </span>
                  </Link>


                  <Link
                    to="/newsroom"
                    className="nvn-related"
                  >
                    <img
                      src={img.news3}
                      alt=""
                      loading="lazy"
                    />

                    <span>
                      <small>
                        USA · 05 May 2026
                      </small>

                      <strong>
                        Nova Capital signs
                        co-investment mandate
                      </strong>
                    </span>
                  </Link>


                  <Link
                    to="/newsroom"
                    className="nvn-related"
                  >
                    <img
                      src={img.news4}
                      alt=""
                      loading="lazy"
                    />

                    <span>
                      <small>
                        Bangladesh · 22 Apr 2026
                      </small>

                      <strong>
                        Dhaka urban regeneration
                        partnership
                      </strong>
                    </span>
                  </Link>
                </div>
              </motion.div>
            </Float>
          </aside>
        </div>
      </div>
    </section>
  );
}