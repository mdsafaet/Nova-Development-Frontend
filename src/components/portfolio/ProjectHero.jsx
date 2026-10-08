import {
  Link,
} from "react-router-dom";

import {
  LuLayers3,
  LuMapPin,
  LuShieldCheck,
} from "react-icons/lu";

import {
  img,
} from "@/assets/images";

import {
  Reveal,
} from "@/components/company-profile/Float";

export default function ProjectHero() {
  return (
    <section
      className="nvp-single-hero"
      style={{
        backgroundImage: `url('${img.projectFeatured}')`,
      }}
    >
      <div className="nvp-single-hero-overlay" />

      <div className="container nvp-single-hero-container">
        <Reveal>
          <nav
            className="nvp-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span>/</span>

            <Link to="/portfolio">
              Portfolio
            </Link>

            <span>/</span>

            <strong>
              Gulshan Reserve
            </strong>
          </nav>
        </Reveal>

        <Reveal>
          <div className="nvp-section-head nvp-section-head--dark">
            <span>01</span>

            <i />

            <strong>
              Portfolio Single
            </strong>
          </div>
        </Reveal>

        <Reveal>
          <h1>
            Gulshan Reserve
            <span>
              — Dhaka.
            </span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="nvp-single-hero-lead">
            560-acre next-generation estate near
            Gulshan — schools, parks and
            stewardship at scale. One standard
            of design, engineering, governance
            and stewardship.
          </p>
        </Reveal>

        <Reveal>
          <div className="nvp-single-badges">
            <span>
              <LuMapPin />

              Dhaka · Bangladesh
            </span>

            <span>
              <LuLayers3 />

              Land Development
            </span>

            <span>
              <LuShieldCheck />

              Audited &amp;
              board-governed
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}