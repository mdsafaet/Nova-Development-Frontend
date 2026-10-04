import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="vm-cta">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-4">
        <div>
          <h3 className="reveal" style={{ "--d": ".1s" }}>
            Responsibility is <span>a design choice.</span>
          </h3>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Speak with us about community partnerships, sponsorships or stewardship.
          </p>
        </div>
        <div className="d-flex gap-3 flex-wrap reveal" style={{ "--d": ".3s" }}>
          <Link to="/contact" className="btn btn-gold text-uppercase reveal" style={{ "--d": ".3s" }}>
            Contact CSR team <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
