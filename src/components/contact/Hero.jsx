import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Hero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.contactHero}') center 65%/cover no-repeat` }}
    >
      <div className="container">
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: "0s" }}
        >
          <Link to="/">Home</Link> /&nbsp; Company &nbsp;/{" "}
          <span style={{ color: "#fff" }}>Company Profile</span>
        </div>
        <h1
          className="animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".15s" }}
        >
          We develop places <span>that outlive us.</span>
        </h1>
        <p
          className="animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".3s" }}
        >
          Nova Development is a global land &amp; real estate group creating master-planned communities,
          residences and commercial destinations — with one standard of design, engineering, governance and
          stewardship across four markets.
        </p>
      </div>
    </section>
  );
}
