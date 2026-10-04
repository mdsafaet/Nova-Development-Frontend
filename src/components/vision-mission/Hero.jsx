import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Hero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.missionBg}') center 60%/cover no-repeat` }}
    >
      <div className="container">
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: "0s" }}
        >
          <Link to="/">Home</Link> /&nbsp; Company &nbsp;/{" "}
          <span style={{ color: "#fff" }}>Corporate Vision &amp; Mission</span>
        </div>
        <h1
          className="animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".15s" }}
        >
          Corporate Vision <span>&amp; Mission</span>
        </h1>
        <p
          className="animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".3s" }}
        >
          To become a trusted global development platform known for places of lasting value — commercially
          sound, thoughtfully designed and meaningful to the people who inherit them.
        </p>
        <div className="vm-hero-stats">
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: ".6s" }}
          >
            <strong>01</strong>
            <span>Vision</span>
            <em>What we believe</em>
          </div>
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: ".75s" }}
          >
            <strong>02</strong>
            <span>Mission</span>
            <em>How we deliver</em>
          </div>
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s", animationDelay: ".9s" }}
          >
            <strong>04</strong>
            <span>Values</span>
            <em>What guides us</em>
          </div>
        </div>
      </div>
    </section>
  );
}
