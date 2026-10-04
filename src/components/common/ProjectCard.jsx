import { Link } from "react-router-dom";

// One project card (used by the portfolio archive grid).
export default function ProjectCard({ project: p }) {
  return (
    <article
      className={`portfolio-card ${p.category}`}
      data-category={p.category}
      data-market={p.market}
      data-title={p.title}
    >
      <div className="portfolio-card-img">
        <img src={p.image} alt={p.alt} loading="lazy" />
        <div className="portfolio-card-top">
          <span className="portfolio-badge">
            <i className="fa-solid fa-circle"></i> {p.badge}
          </span>
          <span className="portfolio-market">
            <img src={`https://flagcdn.com/w40/${p.flag}.png`} alt="" /> {p.marketName}
          </span>
        </div>
      </div>
      <div className="portfolio-card-body">
        <span className="eyebrow text-gold">{p.eyebrow}</span>
        <h3>{p.name}</h3>
        <p>{p.text}</p>
        <div className="portfolio-card-foot">
          <div className="meta">
            <span>
              <i className="fa-solid fa-location-dot"></i> {p.location}
            </span>
            <span>
              <i className="fa-solid fa-calendar"></i> {p.year}
            </span>
          </div>
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <Link to="/portfolio-single" className="portfolio-card-link" aria-label={p.label}></Link>
      </div>
    </article>
  );
}
