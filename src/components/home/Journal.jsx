import { Link, useNavigate } from "react-router-dom";
import { img } from "@/assets/images";

export default function Journal() {
  const navigate = useNavigate();
  return (
    <section id="news-media" className="nova-news-section">
      <div className="container">
        <div className="nova-news-heading">
          <div>
            <div className="nova-section-label reveal">
              <span>News &amp; Media</span>
            </div>
            <h2 className="nova-display-title reveal" style={{ "--d": ".1s" }}>
              The Latest <span>From Nova.</span>
            </h2>
          </div>
          <Link to="/news-single" className="nova-text-link reveal" style={{ "--d": ".2s" }}>
            View newsroom <span>↗</span>
          </Link>
        </div>
        <div className="nova-news-layout">
          <article
            className="nova-news-featured reveal"
            onClick={() => navigate("/news-single")}
            style={{ "--d": ".3s", cursor: "pointer" }}
            role="link"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
          >
            <div className="nova-news-featured-image mb-4">
              <img src={img.news1} alt="Nova Development waterfront residences" /> <span>FEATURED</span>
            </div>
            <div className="nova-news-featured-content">
              <span className="eyebrow text-gold">DUBAI · 12 AUG 2026</span>
              <h3>Nova announces new waterfront residences in Dubai Harbour</h3>
              <p className="mb-4">
                The group announces its latest luxury residential development as part of its expanding Gulf
                platform.
              </p>
              <Link to="/news-single" className="nova-text-link">
                Read story <span>↗</span>
              </Link>
            </div>
          </article>
          <div className="nova-news-list reveal" style={{ "--d": ".4s" }}>
            <article
              className="nova-news-item"
              onClick={() => navigate("/news-single")}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            >
              <div className="nova-news-item-image">
                <img src={img.news2} alt="Nova Development UK" />
              </div>
              <div className="nova-news-item-content">
                <span>28 JUN 2026</span> <small>UK</small>
                <h3>Nova completes 180-acre land assembly in London.</h3>
                <Link to="/news-single" className="nova-news-item-link">
                  Read story <span>↗</span>
                </Link>
              </div>
            </article>
            <article
              className="nova-news-item"
              onClick={() => navigate("/news-single")}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            >
              <div className="nova-news-item-image">
                <img src={img.news3} alt="Nova Development USA" />
              </div>
              <div className="nova-news-item-content">
                <span>05 MAY 2026</span> <small>USA</small>
                <h3>Nova Capital signs North American co-investment mandate.</h3>
                <Link to="/news-single" className="nova-news-item-link">
                  Read story <span>↗</span>
                </Link>
              </div>
            </article>
            <article
              className="nova-news-item"
              onClick={() => navigate("/news-single")}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            >
              <div className="nova-news-item-image">
                <img src={img.news4} alt="Nova Development Bangladesh" />
              </div>
              <div className="nova-news-item-content">
                <span>18 MAR 2026</span> <small>BANGLADESH</small>
                <h3>Nova announces new master-planned community in Dhaka.</h3>
                <Link to="/news-single" className="nova-news-item-link">
                  Read story <span>↗</span>
                </Link>
              </div>
            </article>
            <article
              className="nova-news-item"
              onClick={() => navigate("/news-single")}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/news-single")}
            >
              <div className="nova-news-item-image">
                <img src={img.news5} alt="Nova Development sustainability report" />
              </div>
              <div className="nova-news-item-content">
                <span>09 JAN 2026</span> <small>GROUP</small>
                <h3>Nova Development publishes 2025 sustainability report.</h3>
                <Link to="/news-single" className="nova-news-item-link">
                  Read story <span>↗</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
