import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function NewsroomHero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.contactHero}') center 50%/cover no-repeat` }}
    >
      <div className="container">
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ animationDelay: "0s" }}
        >
          <Link to="/">Home</Link> / <span style={{ color: "#fff" }}>Newsroom</span>
        </div>
        <h1 className="animate__animated animate__fadeInUp" style={{ animationDelay: ".15s" }}>
          The latest <span>from Nova.</span>
        </h1>
        <p className="animate__animated animate__fadeInUp" style={{ animationDelay: ".3s" }}>
          Press releases, project milestones and market insights — one place, four markets.
        </p>
        <div className="vm-hero-stats">
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".45s" }}>
            <strong>06</strong>
            <span>Stories</span>
            <em>2026</em>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".55s" }}>
            <strong>04</strong>
            <span>Markets</span>
            <em>Covered</em>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".65s" }}>
            <strong>24h</strong>
            <span>Press</span>
            <em>Response</em>
          </div>
        </div>
      </div>
    </section>
  );
}
