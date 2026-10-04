import { Link, useNavigate } from "react-router-dom";
import { img } from "@/assets/images";

export default function Portfolio() {
  const navigate = useNavigate();
  return (
    <section id="portfolio" className="nova-portfolio-section">
      <div className="container">
        <div className="nova-portfolio-header">
          <div>
            <div className="nova-section-label reveal">
              <span>Portfolio</span>
            </div>
            <h2 className="nova-display-title reveal" style={{ "--d": ".1s" }}>
              Selected <span>developments.</span>
            </h2>
          </div>
          <Link to="/portfolio" className="nova-outline-button reveal" style={{ "--d": ".2s" }}>
            View complete portfolio <span>↗</span>
          </Link>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <article
              className="nova-project-card w-100 h-100 reveal"
              onClick={() => navigate("/portfolio-single")}
              style={{ "--d": ".3s", cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio-single")}
            >
              <div className="nova-project-image">
                <img src={img.project1} alt="Nova Meadows" />{" "}
                <span className="nova-project-location">BANGLADESH</span>
              </div>
              <div className="nova-project-info">
                <div>
                  <span className="eyebrow text-gold">LAND DEVELOPMENT</span>
                  <h3>Nova Meadows</h3>
                </div>
                <p>A fully planned land estate positioned within Dhaka's eastern growth corridor.</p>
                <Link to="/portfolio-single" className="nova-circle-arrow">
                  ↗
                </Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <article
              className="nova-project-card w-100 h-100 reveal"
              onClick={() => navigate("/portfolio-single")}
              style={{ "--d": ".4s", cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio-single")}
            >
              <div className="nova-project-image">
                <img src={img.project2} alt="Nova Harbour Residences" />{" "}
                <span className="nova-project-location">DUBAI</span>
              </div>
              <div className="nova-project-info">
                <div>
                  <span className="eyebrow text-gold">RESIDENTIAL</span>
                  <h3>Nova Harbour Residences</h3>
                </div>
                <p>Branded waterfront residential development in Dubai Harbour.</p>
                <Link to="/portfolio-single" className="nova-circle-arrow">
                  ↗
                </Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <article
              className="nova-project-card w-100 h-100 reveal"
              onClick={() => navigate("/portfolio-single")}
              style={{ "--d": ".5s", cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio-single")}
            >
              <div className="nova-project-image">
                <img src={img.project3} alt="Nova Quay" /> <span className="nova-project-location">USA</span>
              </div>
              <div className="nova-project-info">
                <div>
                  <span className="eyebrow text-gold">COMMERCIAL</span>
                  <h3>Nova Quay</h3>
                </div>
                <p>Grade-A commercial destination in New York.</p>
                <Link to="/portfolio-single" className="nova-circle-arrow">
                  ↗
                </Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <article
              className="nova-project-card w-100 h-100 reveal"
              onClick={() => navigate("/portfolio-single")}
              style={{ "--d": ".6s", cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio-single")}
            >
              <div className="nova-project-image">
                <img src={img.project4} alt="Nova Quay" />{" "}
                <span className="nova-project-location">DUBAI</span>
              </div>
              <div className="nova-project-info">
                <div>
                  <span className="eyebrow text-gold">COMMERCIAL</span>
                  <h3>Nova Quay</h3>
                </div>
                <p>Grade-A commercial destination in New York.</p>
                <Link to="/portfolio-single" className="nova-circle-arrow">
                  ↗
                </Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <article
              className="nova-project-card w-100 h-100 reveal"
              onClick={() => navigate("/portfolio-single")}
              style={{ "--d": ".7s", cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio-single")}
            >
              <div className="nova-project-image">
                <img src={img.project5} alt="Nova Quay" /> <span className="nova-project-location">USA</span>
              </div>
              <div className="nova-project-info">
                <div>
                  <span className="eyebrow text-gold">COMMERCIAL</span>
                  <h3>Nova Quay</h3>
                </div>
                <p>Grade-A commercial destination in New York.</p>
                <Link to="/portfolio-single" className="nova-circle-arrow">
                  ↗
                </Link>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <article
              className="nova-project-card w-100 h-100 reveal"
              onClick={() => navigate("/portfolio-single")}
              style={{ "--d": ".8s", cursor: "pointer" }}
              role="link"
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio-single")}
            >
              <div className="nova-project-image">
                <img src={img.project6} alt="Nova Quay" /> <span className="nova-project-location">UK</span>
              </div>
              <div className="nova-project-info">
                <div>
                  <span className="eyebrow text-gold">COMMERCIAL</span>
                  <h3>Nova Quay</h3>
                </div>
                <p>Grade-A commercial destination in New York.</p>
                <Link to="/portfolio-single" className="nova-circle-arrow">
                  ↗
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
