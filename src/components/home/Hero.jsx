import MarketStrip from "./MarketStrip";
import { Link } from "react-router-dom";
import { video } from "@/assets/images";

export default function Hero() {
  return (
    <section className="hero position-relative">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="container position-relative hero-content">
        <p
          className="eyebrow text-gold animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: "0s" }}
        >
          Global land &amp; real estate development
        </p>
        <h1
          className="hero-title mt-3 animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".15s" }}
        >
          Building land into legacy — across four markets
        </h1>
        <p
          className="hero-sub mt-4 animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".3s" }}
        >
          Nova Development plans, develops and delivers land estates, residences and commercial assets in
          Dubai, Bangladesh, USA and UK — with one standard of engineering, governance and stewardship.
        </p>
        <div
          className="mt-4 d-flex flex-wrap gap-3 animate__animated animate__fadeInUp"
          style={{ "--animate-duration": "1s", animationDelay: ".45s" }}
        >
          <Link to="/portfolio" className="btn btn-gold text-uppercase">
            Explore projects
          </Link>{" "}
          <a href="#global-presence" className="btn btn-outline-light-gold text-uppercase">
            Our global presence
          </a>
        </div>
      </div>
      <MarketStrip />
    </section>
  );
}
