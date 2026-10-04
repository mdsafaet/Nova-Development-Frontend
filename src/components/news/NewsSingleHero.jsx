import { img } from "@/assets/images";

export default function NewsSingleHero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.news1}') center 40%/cover no-repeat` }}
    >
      <div className="inner-hero-overlay" />
      <div className="container position-relative">
        <nav className="vm-hero-crumb animate__animated animate__fadeInUp" style={{ animationDelay: "0s" }}>
          Home / <span>Newsroom</span> / <span>Dubai</span>
        </nav>
        <span
          className="eyebrow text-gold animate__animated animate__fadeInUp"
          style={{ animationDelay: ".1s" }}
        >
          Dubai · 12 Aug 2026
        </span>
        <h1 className="animate__animated animate__fadeInUp" style={{ animationDelay: ".15s" }}>
          Nova announces waterfront residences at Dubai Harbour
        </h1>
        <p className="animate__animated animate__fadeInUp" style={{ animationDelay: ".3s" }}>
          Branded, waterfront and investor-ready — expanding our Gulf platform with audited, board-governed
          delivery.
        </p>
      </div>
    </section>
  );
}
