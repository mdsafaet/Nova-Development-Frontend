import { useState } from "react";
import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function ProjectDetails() {
  const [featured, setFeatured] = useState(img.projectFeatured);
  return (
    <section className="ps-page">
      <div className="container">
        <div className="ps-head">
          <div>
            <div className="nova-section-label reveal" style={{ marginBottom: "10px" }}>
              <span>Portfolio Single</span>
            </div>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Gulshan Reserve — <span>560 acres.</span>
            </h2>
            <p className="reveal" style={{ "--d": ".2s" }}>
              Master-planned estate with resilient neighbourhoods, sustainable infrastructure and long-term
              community stewardship — from entitlements to handover.
            </p>
            <div className="ps-meta reveal" style={{ "--d": ".3s" }}>
              <span className="dark">
                <i className="fa-solid fa-location-dot" /> Dhaka
              </span>{" "}
              <span>
                <i className="fa-solid fa-layer-group" /> Land
              </span>{" "}
              <span>
                <i className="fa-solid fa-ruler-combined" /> 560 acres
              </span>{" "}
              <span>
                <i className="fa-solid fa-calendar" /> 2025
              </span>
            </div>
          </div>
          <div className="ps-actions reveal" style={{ "--d": ".4s" }}>
            <Link
              to="/portfolio"
              className="nova-outline-button"
              style={{ padding: "10px 18px", fontSize: "11px" }}
            >
              ← Back to archive
            </Link>{" "}
            <Link
              to="/contact"
              className="btn btn-gold text-uppercase"
              style={{ padding: "10px 18px", fontSize: "11px" }}
            >
              Enquire ↗
            </Link>
          </div>
        </div>
        <div className="ps-layout">
          <div className="ps-main">
            <div className="ps-gallery">
              <div className="ps-featured fade-reveal" style={{ "--d": ".3s" }}>
                <img alt="Gulshan Reserve — featured view" id="psFeatured" src={featured} />
                <div className="ps-featured-top">
                  <span className="portfolio-badge">
                    <i className="fa-solid fa-circle" /> Featured
                  </span>{" "}
                  <span className="portfolio-market">
                    <img src="https://flagcdn.com/w40/bd.png" alt="" /> Bangladesh
                  </span>
                </div>
              </div>
              <div className="ps-thumbs reveal" style={{ "--d": ".4s" }} id="psThumbs">
                <button
                  className={featured === img.projectFeatured ? "active" : ""}
                  onClick={() => setFeatured(img.projectFeatured)}
                >
                  <img src={img.projectFeatured} alt="Thumb 1" loading="lazy" />
                </button>{" "}
                <button
                  className={featured === img.project1 ? "active" : ""}
                  onClick={() => setFeatured(img.project1)}
                >
                  <img src={img.project1} alt="Thumb 2" loading="lazy" />
                </button>{" "}
                <button
                  className={featured === img.project5 ? "active" : ""}
                  onClick={() => setFeatured(img.project5)}
                >
                  <img src={img.project5} alt="Thumb 3" loading="lazy" />
                </button>{" "}
                <button
                  className={featured === img.projectMixed ? "active" : ""}
                  onClick={() => setFeatured(img.projectMixed)}
                >
                  <img src={img.projectMixed} alt="Thumb 4" loading="lazy" />
                </button>
              </div>
            </div>
            <div className="ps-block">
              <span className="eyebrow text-gold reveal">Overview</span>
              <h3 className="reveal" style={{ "--d": ".1s" }}>
                An estate planned <span>for generations.</span>
              </h3>
              <p className="reveal" style={{ "--d": ".2s" }}>
                <strong>Gulshan Reserve</strong> is a 560-acre master plan near Gulshan, Dhaka — structured
                around schools, parks, walkable blocks and low-impact infrastructure. Entitlements, trunk
                services and landscape come first; plots and neighbourhoods follow.
              </p>
              <p className="reveal" style={{ "--d": ".25s" }}>
                Delivery is phased and board-governed: audited accounts, transparent allocation and a
                stewardship reserve for parks, drainage and community assets — the same standard across all
                four Nova markets.
              </p>
              <ul className="ps-features">
                <li className="reveal" style={{ "--d": ".3s" }}>
                  <i className="fa-solid fa-check" /> Schools, mosques &amp; neighbourhood retail within
                  walkable catchments
                </li>
                <li className="reveal" style={{ "--d": ".4s" }}>
                  <i className="fa-solid fa-check" /> Central park spine with native planting &amp; stormwater
                  landscape
                </li>
                <li className="reveal" style={{ "--d": ".5s" }}>
                  <i className="fa-solid fa-check" /> Trunk roads, utilities &amp; drainage delivered before
                  plot handover
                </li>
                <li className="reveal" style={{ "--d": ".6s" }}>
                  <i className="fa-solid fa-check" /> Stewardship reserve &amp; community governance from day
                  one
                </li>
              </ul>
              <div className="ps-stats reveal" style={{ "--d": ".5s" }}>
                <div>
                  <strong>560</strong>
                  <span>Acres</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>Phases</span>
                </div>
                <div>
                  <strong>32%</strong>
                  <span>Open space</span>
                </div>
                <div>
                  <strong>2025</strong>
                  <span>Launch</span>
                </div>
              </div>
            </div>
          </div>
          <aside className="ps-side">
            <div className="ps-facts reveal" style={{ "--d": ".3s" }}>
              <h4>Project facts</h4>
              <dl>
                <div className="row">
                  <dt>Status</dt>
                  <dd>Ongoing — Phase 02</dd>
                </div>
                <div className="row">
                  <dt>Location</dt>
                  <dd>Dhaka, Bangladesh</dd>
                </div>
                <div className="row">
                  <dt>Typology</dt>
                  <dd>Land Development</dd>
                </div>
                <div className="row">
                  <dt>Scale</dt>
                  <dd>560 acres</dd>
                </div>
                <div className="row">
                  <dt>Year</dt>
                  <dd>2025</dd>
                </div>
                <div className="row">
                  <dt>Governance</dt>
                  <dd>Audited · Board-led</dd>
                </div>
              </dl>
            </div>
            <div className="ps-enquire reveal" style={{ "--d": ".4s" }}>
              <h4>
                Interested in <span>this project?</span>
              </h4>
              <p>Speak to an advisor about allocation, phasing and partnership — response within 24 hours.</p>
              <Link to="/contact" className="btn btn-gold text-uppercase" style={{ fontSize: "11px" }}>
                Enquire now ↗
              </Link>{" "}
              <a href="tel:+880255661200" className="tel">
                <i className="fa-solid fa-phone" /> +880 2 5566 1200
              </a>
            </div>
            <Link to="/portfolio" className="ps-next fade-reveal" style={{ "--d": ".5s" }}>
              <img src={img.project1} alt="Next project" />
              <div>
                <small>Next project</small>
                <em>Nova Meadows — 420 acres ↗</em>
              </div>
            </Link>
          </aside>
        </div>
        <div className="ps-related">
          <div className="ps-related-head">
            <div>
              <div className="nova-section-label reveal" style={{ marginBottom: "10px" }}>
                <span>Related</span>
              </div>
              <h3 className="reveal" style={{ "--d": ".1s" }}>
                More from <span>the archive.</span>
              </h3>
              <p className="reveal" style={{ "--d": ".2s" }}>
                Same standard — land, residential and commercial across four markets.
              </p>
            </div>
            <Link to="/portfolio" className="nova-text-link reveal" style={{ "--d": ".3s" }}>
              View all 14 projects ↗
            </Link>
          </div>
          <div className="ps-related-grid">
            <article className="portfolio-card land reveal" style={{ "--d": ".3s" }}>
              <div className="portfolio-card-img">
                <img src={img.project1} alt="Nova Meadows" loading="lazy" />
                <div className="portfolio-card-top">
                  <span className="portfolio-badge">
                    <i className="fa-solid fa-circle" /> Land
                  </span>
                  <span className="portfolio-market">
                    <img src="https://flagcdn.com/w40/bd.png" alt="" /> Bangladesh
                  </span>
                </div>
              </div>
              <div className="portfolio-card-body">
                <span className="eyebrow text-gold">Land Development · 420 acres</span>
                <h3>Nova Meadows</h3>
                <p>Planned 420-acre estate in Dhaka's eastern corridor — resilient neighborhoods.</p>
                <div className="portfolio-card-foot">
                  <div className="meta">
                    <span>
                      <i className="fa-solid fa-location-dot" /> Dhaka
                    </span>
                    <span>
                      <i className="fa-solid fa-calendar" /> 2024
                    </span>
                  </div>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <Link
                  to="/portfolio-single"
                  className="portfolio-card-link"
                  aria-label="View Nova Meadows details"
                />
              </div>
            </article>
            <article className="portfolio-card land reveal" style={{ "--d": ".4s" }}>
              <div className="portfolio-card-img">
                <img src={img.project5} alt="Purbachal Hills" loading="lazy" />
                <div className="portfolio-card-top">
                  <span className="portfolio-badge">
                    <i className="fa-solid fa-circle" /> Land
                  </span>
                  <span className="portfolio-market">
                    <img src="https://flagcdn.com/w40/bd.png" alt="" /> Bangladesh
                  </span>
                </div>
              </div>
              <div className="portfolio-card-body">
                <span className="eyebrow text-gold">Land Development · 310 acres</span>
                <h3>Purbachal Hills</h3>
                <p>Master-planned hillside community — entitlements and stewardship.</p>
                <div className="portfolio-card-foot">
                  <div className="meta">
                    <span>
                      <i className="fa-solid fa-location-dot" /> Purbachal
                    </span>
                    <span>
                      <i className="fa-solid fa-calendar" /> 2022
                    </span>
                  </div>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <Link
                  to="/portfolio-single"
                  className="portfolio-card-link"
                  aria-label="View Purbachal Hills details"
                />
              </div>
            </article>
            <article className="portfolio-card land reveal" style={{ "--d": ".5s" }}>
              <div className="portfolio-card-img">
                <img src={img.project7} alt="Palm Hills Estate" loading="lazy" />
                <div className="portfolio-card-top">
                  <span className="portfolio-badge">
                    <i className="fa-solid fa-circle" /> Land
                  </span>
                  <span className="portfolio-market">
                    <img src="https://flagcdn.com/w40/ae.png" alt="" /> UAE
                  </span>
                </div>
              </div>
              <div className="portfolio-card-body">
                <span className="eyebrow text-gold">Land Development · 180 acres</span>
                <h3>Palm Hills Estate</h3>
                <p>Desert-modern estate with native landscape and low-impact infra.</p>
                <div className="portfolio-card-foot">
                  <div className="meta">
                    <span>
                      <i className="fa-solid fa-location-dot" /> Dubai South
                    </span>
                    <span>
                      <i className="fa-solid fa-calendar" /> 2024
                    </span>
                  </div>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <Link
                  to="/portfolio-single"
                  className="portfolio-card-link"
                  aria-label="View Palm Hills Estate details"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
