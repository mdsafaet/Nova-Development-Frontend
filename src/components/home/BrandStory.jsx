import { img } from "@/assets/images";

export default function BrandStory() {
  return (
    <section id="brand-story" className="nova-story-section nova-story-modern">
      <div className="container">
        <div className="nova-story-modern-heading">
          <div className="nova-section-label justify-content-center reveal">
            <span>Brand Story</span>
          </div>
          <h2 className="reveal" style={{ "--d": ".1s" }}>
            History Begins in <span>2009</span>
          </h2>
          <p className="reveal" style={{ "--d": ".2s" }}>
            From a single land estate to a global platform — four markets, one standard of design, engineering
            and stewardship.
          </p>
        </div>
        <div className="nova-timeline-modern">
          <div className="nova-timeline-row reveal" style={{ "--d": ".3s" }}>
            <div className="nova-timeline-meta">
              <span className="tm-year">2009</span>{" "}
              <span className="tm-date">
                August 10
                <sup>th</sup>
              </span>
            </div>
            <div className="nova-timeline-line">
              <span className="tm-dot" />
            </div>
            <div className="nova-timeline-card">
              <div className="tm-card-body">
                <div className="tm-card-text">
                  <span className="tm-eyebrow">The Beginning</span>
                  <h3>Founded</h3>
                  <p>
                    Nova begins in Dhaka with a simple ambition: make land development more disciplined,
                    transparent and future-focused. A small yet dedicated core team laid the foundation for a
                    platform that would grow across four markets.
                  </p>
                  <p>
                    One idea. One estate. The commitment to high-quality planning and long-term stewardship
                    has driven our growth from day one.
                  </p>
                </div>
                <div className="tm-card-img">
                  <img
                    src={img.projectFeatured}
                    alt="Nova Meadows — master-planned land estate, Dhaka"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nova-timeline-row reveal" style={{ "--d": ".4s" }}>
            <div className="nova-timeline-meta">
              <span className="tm-year">2016</span>{" "}
              <span className="tm-date">
                March 15
                <sup>th</sup>
              </span>
            </div>
            <div className="nova-timeline-line">
              <span className="tm-dot" />
            </div>
            <div className="nova-timeline-card">
              <div className="tm-card-body">
                <div className="tm-card-text">
                  <span className="tm-eyebrow">Expansion</span>
                  <h3>Entering the Gulf</h3>
                  <p>
                    Nova establishes its Dubai platform and expands into luxury residential and investment-led
                    development — bringing the same discipline in land, design and governance to the Gulf
                    region.
                  </p>
                  <p>
                    Strategic partnerships and a Dubai HQ enabled us to deliver branded waterfront residences
                    and mixed-use destinations.
                  </p>
                </div>
                <div className="tm-card-img">
                  <img
                    src={img.projectResidential}
                    alt="Nova Harbour Residences — waterfront residences, Dubai Harbour"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nova-timeline-row reveal" style={{ "--d": ".5s" }}>
            <div className="nova-timeline-meta">
              <span className="tm-year">2019</span>{" "}
              <span className="tm-date">
                June 22
                <sup>nd</sup>
              </span>
            </div>
            <div className="nova-timeline-line">
              <span className="tm-dot" />
            </div>
            <div className="nova-timeline-card">
              <div className="tm-card-body">
                <div className="tm-card-text">
                  <span className="tm-eyebrow">Global Platform</span>
                  <h3>New York. New possibilities</h3>
                  <p>
                    The group enters North America through capital advisory, commercial development and
                    strategic partnerships — extending our integrated development model to the USA.
                  </p>
                  <p>
                    Our headquarters approach combines local expertise with global standards in engineering,
                    delivery and long-term stewardship.
                  </p>
                </div>
                <div className="tm-card-img">
                  <img
                    src={img.projectCommercial}
                    alt="Nova Quay — Grade-A commercial destination, New York"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nova-timeline-row reveal" style={{ "--d": ".6s" }}>
            <div className="nova-timeline-meta">
              <span className="tm-year">2026</span>{" "}
              <span className="tm-date">
                January 01
                <sup>st</sup>
              </span>
            </div>
            <div className="nova-timeline-line">
              <span className="tm-dot" />
            </div>
            <div className="nova-timeline-card">
              <div className="tm-card-body">
                <div className="tm-card-text">
                  <span className="tm-eyebrow">Today</span>
                  <h3>Four markets. One Nova</h3>
                  <p>
                    Today Nova operates across Dubai, Bangladesh, USA and UK with an integrated platform
                    spanning land estates, residences and commercial assets — 45+ projects, 3,200 acres, one
                    global standard.
                  </p>
                  <p>Design. Engineering. Governance. Stewardship. Places that outlive us.</p>
                </div>
                <div className="tm-card-img">
                  <img
                    src={img.projectMixed}
                    alt="Integrated global portfolio — land, residential and commercial, four markets"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
