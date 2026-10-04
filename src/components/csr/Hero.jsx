import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Hero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.community}') center 55%/cover no-repeat` }}
    >
      <div className="container">
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ animationDelay: "0s" }}
        >
          <Link to="/">Home</Link> / <span style={{ color: "#fff" }}>CSR</span>
        </div>
        <h1 className="animate__animated animate__fadeInUp" style={{ animationDelay: ".15s" }}>
          Development with <span>responsibility.</span>
        </h1>
        <p className="animate__animated animate__fadeInUp" style={{ animationDelay: ".3s" }}>
          Beyond boundaries — we invest in people, communities and the environments around us. 17 years of
          commitment.
        </p>
        <div className="vm-hero-stats">
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: ".6s" }}
          >
            <strong>12K+</strong>
            <span>People</span>
            <em>Reached</em>
          </div>
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: ".75s" }}
          >
            <strong>38</strong>
            <span>Initiatives</span>
            <em>Community-led</em>
          </div>
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: ".9s" }}
          >
            <strong>17</strong>
            <span>Years</span>
            <em>Of commitment</em>
          </div>
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: "1.05s" }}
          >
            <strong>04</strong>
            <span>Markets</span>
            <em>One standard</em>
          </div>
        </div>
      </div>
    </section>
  );
}
