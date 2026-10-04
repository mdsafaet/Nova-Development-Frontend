import { Link, useNavigate } from "react-router-dom";
import { img } from "@/assets/images";

export default function NewsroomList() {
  const navigate = useNavigate();
  return (
    <section className="nr-modern">
      <div className="container">
        <article
          className="nr-featured reveal"
          onClick={() => navigate("/news-single")}
          style={{ cursor: "pointer" }}
          role="link"
          tabIndex="0"
          onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
          data-news="dubai"
        >
          <img src={img.news1} alt="Dubai Harbour — featured" loading="lazy" />
          <div className="nr-featured-overlay" />
          <div className="nr-featured-content">
            <div className="nr-meta">
              <span className="nr-dot" style={{ background: "#8BB4B8" }} /> Dubai · 12 Aug 2026 · 3 min
            </div>
            <h2>Nova announces new waterfront residences in Dubai Harbour</h2>
            <p>
              Branded, waterfront and investor-ready — expanding our Gulf platform with audited,
              board-governed delivery and long-term stewardship.
            </p>
            <Link to="/news-single">
              Read story <span>↗</span>
            </Link>
          </div>
          <span className="nr-badge">Featured</span>
        </article>
        <div className="nr-grid" id="newsGrid">
          <article
            className="nr-card reveal"
            onClick={() => navigate("/news-single")}
            style={{ cursor: "pointer", "--d": ".3s" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            data-news="uk"
          >
            <div className="nr-card-img">
              <img src={img.news2} alt="London" loading="lazy" />
            </div>
            <div className="nr-card-body">
              <div className="nr-meta">
                <span className="nr-kicker">UK</span> · 28 Jun 2026 · 2 min
              </div>
              <h3>Nova completes 180-acre land assembly in London</h3>
              <p>
                Strategic assembly for next-generation garden suburb — entitlements and resilient
                infrastructure.
              </p>
              <Link to="/news-single">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
          <article
            className="nr-card reveal"
            onClick={() => navigate("/news-single")}
            style={{ cursor: "pointer", "--d": ".4s" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            data-news="usa"
          >
            <div className="nr-card-img">
              <img src={img.news3} alt="USA" loading="lazy" />
            </div>
            <div className="nr-card-body">
              <div className="nr-meta">
                <span className="nr-kicker">USA</span> · 05 May 2026 · 4 min
              </div>
              <h3>Nova Capital signs North American co-investment mandate</h3>
              <p>
                Integrated capital + development model extends to New York with phased, risk-adjusted
                structure.
              </p>
              <Link to="/news-single">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
          <article
            className="nr-card reveal"
            onClick={() => navigate("/news-single")}
            style={{ cursor: "pointer", "--d": ".5s" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            data-news="bangladesh"
          >
            <div className="nr-card-img">
              <img src={img.news4} alt="Dhaka" loading="lazy" />
            </div>
            <div className="nr-card-body">
              <div className="nr-meta">
                <span className="nr-kicker">Bangladesh</span> · 18 Mar 2026 · 3 min
              </div>
              <h3>Nova announces new master-planned community in Dhaka</h3>
              <p>560-acre estate near Gulshan — schools, parks and community stewardship at scale.</p>
              <Link to="/news-single">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
          <article
            className="nr-card reveal"
            onClick={() => navigate("/news-single")}
            style={{ cursor: "pointer", "--d": ".6s" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            data-news="group"
          >
            <div className="nr-card-img">
              <img src={img.news5} alt="Report" loading="lazy" />
            </div>
            <div className="nr-card-body">
              <div className="nr-meta">
                <span className="nr-kicker">Group</span> · 09 Jan 2026 · 5 min
              </div>
              <h3>Nova Development publishes 2025 sustainability report</h3>
              <p>
                Audited delivery, native landscapes and places that outlive us — measured across 4 markets.
              </p>
              <Link to="/news-single">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
          <article
            className="nr-card reveal"
            onClick={() => navigate("/news-single")}
            style={{ cursor: "pointer", "--d": ".7s" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            data-news="dubai"
          >
            <div className="nr-card-img">
              <img src={img.project6} alt="Boulevard" loading="lazy" />
            </div>
            <div className="nr-card-body">
              <div className="nr-meta">
                <span className="nr-kicker">Dubai</span> · 14 Feb 2026 · 2 min
              </div>
              <h3>Boulevard Plaza activation — Downtown Dubai</h3>
              <p>Retail and office destination sees phased opening with activated ground floors.</p>
              <Link to="/news-single">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
          <article
            className="nr-card reveal"
            onClick={() => navigate("/news-single")}
            style={{ cursor: "pointer", "--d": ".8s" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            data-news="usa"
          >
            <div className="nr-card-img">
              <img src={img.projectCommercial} alt="WTC" loading="lazy" />
            </div>
            <div className="nr-card-body">
              <div className="nr-meta">
                <span className="nr-kicker">USA</span> · 22 Jan 2026 · 3 min
              </div>
              <h3>World Trade Offices — floor 62 advisory suites</h3>
              <p>Capital with a long view at One World Trade Center — institutional-grade stewardship.</p>
              <Link to="/news-single">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
        <div className="newsroom-empty" id="newsEmpty">
          <i className="fa-solid fa-inbox" />
          <h4 className="reveal" style={{ "--d": ".1s" }}>
            No stories for this market
          </h4>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Try another filter.
          </p>
        </div>
      </div>
    </section>
  );
}
