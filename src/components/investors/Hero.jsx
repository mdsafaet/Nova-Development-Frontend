import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Hero() {
  return (
    <section
      className="inner-hero"
      style={{ background: `#0D1833 url('${img.investor}') center 55%/cover no-repeat` }}
    >
      <div className="container">
        <div
          className="inner-breadcrumb animate__animated animate__fadeInUp"
          style={{ animationDelay: "0s" }}
        >
          <Link to="/">Home</Link> / <span style={{ color: "#fff" }}>Investors</span>
        </div>
        <h1 className="animate__animated animate__fadeInUp" style={{ animationDelay: ".15s" }}>
          Capital with a <span>long-term view.</span>
        </h1>
        <p className="animate__animated animate__fadeInUp" style={{ animationDelay: ".3s" }}>
          Disciplined allocation, audited governance and long-term stewardship — built for investors who
          measure returns in decades, not quarters.
        </p>
        <div className="vm-hero-stats">
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".45s" }}>
            <strong>
              <sup style={{ fontSize: "16px" }}>$</sup>
              1.2B
            </strong>
            <span>GDV</span>
            <em>Gross development value</em>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".55s" }}>
            <strong>18%</strong>
            <span>IRR Target</span>
            <em>Risk-adjusted, net</em>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".65s" }}>
            <strong>120+</strong>
            <span>Partners</span>
            <em>Institutional &amp; private</em>
          </div>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: ".75s" }}>
            <strong>100%</strong>
            <span>Audited</span>
            <em>Board-governed</em>
          </div>
        </div>
      </div>
    </section>
  );
}
