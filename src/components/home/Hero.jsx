import { useState } from "react";
import CountUp from "react-countup";
import MarketStrip from "./MarketStrip";
import { Link } from "react-router-dom";
import { video } from "@/assets/images";

const HEADING = "Building land into legacy — across four markets";
const LEN = HEADING.length;
const DURATION = 4.4; // seconds per count up / count down

const stack = { gridArea: "1 / 1" };
// must be outside the component so it stays stable between renders
const format = (n) => HEADING.slice(0, Math.round(n));

function LoopCountText() {
  const [cycle, setCycle] = useState(0);
  const up = cycle % 2 === 0; // even = "Building" → "markets", odd = "markets" → "Building"

  return (
    <span style={{ display: "grid" }} aria-hidden="true">
      {/* full text reserves the exact space */}
      <span style={{ ...stack, visibility: "hidden" }}>{HEADING}</span>
      {/* new key = fresh run, so every up/down starts exactly at its start value */}
      <CountUp
        key={cycle}
        style={stack}
        start={up ? 0 : LEN}
        end={up ? LEN : 0}
        duration={DURATION}
        useEasing={false}
        formattingFn={format}
        onEnd={() => setCycle((c) => c + 1)}
      />
    </span>
  );
}

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
          aria-label={HEADING}
        >
          <LoopCountText />
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