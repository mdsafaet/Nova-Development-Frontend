import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function PortfolioHero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.projectFeatured}') center 55%/cover no-repeat` }}
    >
      <div className="container">
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ animationDelay: "0s" }}
        >
          <Link to="/">Home</Link> / <span style={{ color: "#fff" }}>Portfolio</span>
        </div>
        <h1 className="animate__animated animate__fadeInUp" style={{ animationDelay: ".15s" }}>
          Portfolio built <em>for legacy.</em>
        </h1>
        <p className="animate__animated animate__fadeInUp" style={{ animationDelay: ".3s" }}>
          45+ projects · 3,200 acres · 4 markets — one standard of design, engineering, governance and
          stewardship. Filter by typology to explore more developments.
        </p>
        <div className="portfolio-hero-stats">
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".45s" }}>
            <strong>45+</strong>
            <span>Projects</span>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".55s" }}>
            <strong>3,200</strong>
            <span>Acres</span>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".65s" }}>
            <strong>04</strong>
            <span>Markets</span>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".75s" }}>
            <strong>17</strong>
            <span>Years</span>
          </div>
        </div>
        <div className="inner-hero-badges" style={{ marginTop: "18px" }}>
          <span className="animate__animated animate__fadeInUp" style={{ animationDelay: ".85s" }}>
            <i className="fa-solid fa-shield-halved" /> Audited &amp; board-governed
          </span>{" "}
          <span className="animate__animated animate__fadeInUp" style={{ animationDelay: ".95s" }}>
            <i className="fa-solid fa-earth-asia" /> Dubai · Dhaka · New York · London
          </span>
        </div>
      </div>
    </section>
  );
}
