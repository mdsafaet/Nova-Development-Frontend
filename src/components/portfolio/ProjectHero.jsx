import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function ProjectHero() {
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
          <Link to="/">Home</Link> / <Link to="/portfolio">Portfolio</Link> /{" "}
          <span style={{ color: "#fff" }}>Gulshan Reserve</span>
        </div>
        <h1 className="animate__animated animate__fadeInUp" style={{ animationDelay: ".15s" }}>
          Gulshan Reserve <em>— Dhaka.</em>
        </h1>
        <p className="animate__animated animate__fadeInUp" style={{ animationDelay: ".3s" }}>
          560-acre next-generation estate near Gulshan — schools, parks and stewardship at scale. One standard
          of design, engineering, governance and stewardship.
        </p>
        <div className="inner-hero-badges" style={{ marginTop: "18px" }}>
          <span>
            <i className="fa-solid fa-location-dot" /> Dhaka · Bangladesh
          </span>{" "}
          <span>
            <i className="fa-solid fa-layer-group" /> Land Development
          </span>{" "}
          <span>
            <i className="fa-solid fa-shield-halved" /> Audited &amp; board-governed
          </span>
        </div>
      </div>
    </section>
  );
}
