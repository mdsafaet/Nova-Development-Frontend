import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function NewsSingleContent() {
  return (
    <section className="ns-content">
      <div className="container">
        <div className="ns-grid">
          <article className="ns-article">
            <p className="ns-dropcap reveal" style={{ "--d": ".2s" }}>
              Nova Development today announced Harbour Residences — a 38-storey waterfront collection at Dubai
              Harbour that distils fifteen years of Gulf delivery into one address: Gulf views, deep balconies
              and a board-governed, escrow-protected ownership structure.
            </p>
            <p className="reveal">
              Priced from AED 2.4M for 2-bed waterfront apartments, the release brings 214 branded residences
              to a harbour that already connects Bluewaters, Palm Jumeirah and Dubai Marina by footbridge and
              tram. Handover is phased from Q4 2028, with construction linked to RERA escrow and quarterly
              engineer certification.
            </p>
            <div className="ns-inline-img fade-reveal" style={{ "--d": ".3s" }}>
              <img src={img.news1} alt="Dubai Harbour" loading="lazy" />
              <span>
                Harbour Residences — Dubai Harbour. Render: indicative · Subject to authority approval.
              </span>
            </div>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Why Harbour, why now
            </h2>
            <p className="reveal">
              Dubai Harbour has matured from marina vision to lived waterfront — 20M+ visitors in 2025, 1.5km
              beachfront and direct access to Sheikh Zayed Road. Nova acquired the 1.2-acre plot in 2024 and
              spent ten months on wind, light and marine studies with Buro Happold before fixing the massing.
              The result is a narrow floorplate: 82% of units are corner or dual-aspect, every living room
              carries a 2.4m sliding system, and service cores are pushed north to preserve south light.
            </p>
            <p className="reveal">
              “We do not chase height for its own sake,” said the Group Development Director. “Harbour
              Residences is 38 storeys because that is where view, wind comfort and construction certainty
              align. Taller would have meant compromises we are not willing to make.”
            </p>
            <blockquote className="reveal" style={{ "--d": ".2s" }}>
              Every residence faces water. Every decision faces audit. That is the Nova standard from Dubai to
              London.
            </blockquote>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Residences &amp; floorplans
            </h2>
            <p className="reveal">
              The collection spans 2-bed (1,180–1,320 sq ft), 3-bed (1,780–2,050 sq ft) and duplex penthouses
              (3,600–4,200 sq ft) — all with 3.15m clear height, German kitchens and stone from the same
              Portuguese quarry used in our London townhouses. Balconies average 180 sq ft, designed for
              outdoor dining rather than display.
            </p>
            <ul className="reveal" style={{ "--d": ".3s" }}>
              <li>
                <strong>2-Bed Waterfront:</strong> AED 2.4M–3.1M · 2.5 bath · maids · 1 parking · 60/40
                payment plan, 2% DLD waiver on booking
              </li>
              <li>
                <strong>3-Bed Harbour Corner:</strong> AED 3.8M–4.6M · 3.5 bath · study + maids · 2 parking ·
                handover Q4 2028–Q1 2029
              </li>
              <li>
                <strong>Duplex Penthouse:</strong> AED 9.2M–11.5M · private lift · terrace pool · 3 parking ·
                limited to 6 units
              </li>
            </ul>
            <p className="reveal">
              Floor-to-ceiling glazing is low-E, laminated for acoustics, with automated blinds and VRF
              cooling metered per unit — a detail that matters when summer service charges are reconciled.
              On-site district cooling is prepaid for two years, then capped at AED 8.5/sq ft.
            </p>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Amenities that are actually used
            </h2>
            <p className="reveal">
              Instead of a long amenities list, Harbour Residences invests in four spaces residents will use
              daily: a 25m harbour-edge pool, a co-work library with harbour light, a private residents’
              marina lounge and a ground-floor neighbourhood market operated by Nova Community. Gym, kids’
              club and meeting rooms sit on podium level 4 — away from lift lobbies, with acoustic separation
              from residences.
            </p>
            <p className="reveal">
              Ground-floor retail is curated, not leased to the highest bidder: bakery, pharmacy, nursery and
              a waterfront brasserie. No shisha, no late-night bar — a decision taken after resident surveys
              at our Bangladesh waterfront community showed quiet evenings ranked above nightlife.
            </p>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Investment &amp; governance — why institutions buy Nova
            </h2>
            <p className="reveal">
              All deposits remain in RERA-registered escrow at First Abu Dhabi Bank, released only against
              certified construction milestones. Nova reports quarterly — audited by KPMG — to a five-member
              board that includes two independent directors. The same structure delivered our 120+ US units on
              escrow without a single late penalty since 2019.
            </p>
            <ul className="reveal" style={{ "--d": ".3s" }}>
              <li>
                Escrow: FAB · Engineer: WSP · Contractor: Alec (pre-tender) · Architect: Dewan + Nova Design
                Studio
              </li>
              <li>
                Service charge forecast: AED 14.5/sq ft pa · Sinking fund: 8% · Two-year DLMC managed, then
                owners’ association
              </li>
              <li>
                Rental insight: Marina/Harbour 2-beds let at AED 135k–155k pa (Bayut Q2 2026); Nova’s exit
                rental guarantee: 5% net for 2 years, optional
              </li>
            </ul>
            <p className="reveal">
              Foreign freehold title, golden-visa eligibility at AED 2M+ and assignable Oqood make Harbour
              Residences liquid for GCC and South Asian investors who already hold Nova assets in Dhaka and
              Texas. One standard, four markets — Dubai · Dhaka · New York · London.
            </p>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Sustainability without slogans
            </h2>
            <p className="reveal">
              The tower targets LEED Gold: 38% energy reduction vs ASHRAE baseline via high-performance
              façade, heat-recovery VRF and solar for common areas. Potable water is cut 30% through greywater
              for irrigation; native ghaf and sidr planting reduces irrigation demand by 45%. WELL principles
              inform air and light — MERV-13 filtration, circadian lighting in corridors — not just a plaque
              in the lobby.
            </p>
            <h3 className="reveal" style={{ "--d": ".1s" }}>
              At a glance
            </h3>
            <ul className="reveal" style={{ "--d": ".3s" }}>
              <li>214 residences · 38 storeys · 1.2-acre harbour plot · 82% dual-aspect</li>
              <li>Handover Q4 2028 (Tower A) / Q1 2029 (Tower B) · 60/40 plan · 2% DLD waiver at booking</li>
              <li>Escrow: RERA/FAB · Board: 5 members, 2 independent · Audit: KPMG quarterly</li>
            </ul>
            <p className="reveal">
              <em>
                Sales gallery at Dubai Harbour Yacht Club is open 10am–8pm. Private viewings by appointment —{" "}
                <Link to="/contact">enquire with our advisors</Link>. Prices, plans and payment terms correct
                at 12 Aug 2026; E&amp;OE, subject to authority approval.
              </em>
            </p>
            <div className="ns-tags reveal" style={{ "--d": ".3s" }}>
              <span>Tags:</span>
              <Link to="/newsroom">Dubai</Link>
              <Link to="/newsroom">Residential</Link>
              <a href="#">Investors</a>
              <a href="#">Harbour</a>
            </div>
            <div className="ns-nav reveal" style={{ "--d": ".4s" }}>
              <Link to="/newsroom" className="ns-back">
                ← Back to newsroom
              </Link>
              <Link to="/contact" className="btn btn-gold text-uppercase">
                Press enquiries <span>↗</span>
              </Link>
            </div>
          </article>
          <aside className="ns-sidebar">
            <div className="ns-card reveal" style={{ "--d": ".3s" }}>
              <strong>Share</strong>
              <div className="ns-share" style={{ marginTop: "0" }}>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa-solid fa-link" />
                </a>
              </div>
            </div>
            <div className="ns-card reveal" style={{ "--d": ".4s" }}>
              <strong>Press contact</strong>
              <p>
                communications@novaland.group
                <br />
                +971 4 555 8800
              </p>
              <Link to="/contact">
                Contact press office <span>↗</span>
              </Link>
            </div>
            <div className="ns-card reveal" style={{ "--d": ".5s" }}>
              <strong>Related stories</strong>{" "}
              <a href="#" className="ns-rel">
                <img src={img.news2} alt="" />
                <span>
                  <small>UK · 28 Jun 2026</small>
                  <em>Nova completes 180-acre land assembly in London</em>
                </span>
              </a>{" "}
              <a href="#" className="ns-rel">
                <img src={img.news3} alt="" />
                <span>
                  <small>USA · 05 May 2026</small>
                  <em>Nova Capital signs co-investment mandate</em>
                </span>
              </a>{" "}
              <a href="#" className="ns-rel">
                <img src={img.news4} alt="" />
                <span>
                  <small>Bangladesh · 22 Apr 2026</small>
                  <em>Dhaka urban regeneration partnership</em>
                </span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
