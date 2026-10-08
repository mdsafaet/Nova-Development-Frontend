import { Link } from "react-router-dom";

import { img } from "@/assets/images";

import {
  Reveal,
} from "@/components/company-profile/Float";


export default function NewsSingleHero() {
  return (
    <section
      className="nvn-single-hero"
      style={{
        "--nvn-single-image": `url('${img.news1}')`,
      }}
    >
      <div className="nvn-single-hero-overlay" />

      <div className="nvn-shell nvn-single-hero-inner">
        <Reveal>
          <nav
            className="nvn-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <Link to="/newsroom">
              Newsroom
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <span>
              Dubai
            </span>
          </nav>
        </Reveal>


        <Reveal delay={0.08}>
          <div className="nvn-section-label nvn-section-label--dark">
            <span>
              01
            </span>

            <i />

            <strong>
              Newsroom
            </strong>
          </div>
        </Reveal>


        <Reveal delay={0.14}>
          <p className="nvn-single-eyebrow">
            Dubai · 12 Aug 2026
          </p>
        </Reveal>


        <Reveal delay={0.2}>
          <h1>
            Nova announces waterfront
            residences at
            <span>
              Dubai Harbour
            </span>
          </h1>
        </Reveal>


        <Reveal delay={0.28}>
          <p className="nvn-single-intro">
            Branded, waterfront and
            investor-ready — expanding our Gulf
            platform with audited,
            board-governed delivery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}