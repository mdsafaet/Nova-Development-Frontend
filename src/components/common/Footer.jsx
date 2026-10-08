import { Link } from "react-router-dom";
import { img } from "@/assets/images";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4 footer-links-row">
          <div className="col-sm-6 col-lg-5">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={img.logo} alt="Nova Development" className="site-logo" />
            </a>
            <p className="small text-on-navy-muted mt-3" style={{ maxWidth: "24rem" }}>
              A global land and real estate development group building master-planned communities, residences
              and commercial assets across four markets.
            </p>
            <div className="footer-social d-flex gap-3 mt-3">
              <a href="#" className="social-icon icon-fb" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>{" "}
              <a href="#" className="social-icon icon-ig" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>{" "}
              <a href="#" className="social-icon icon-tw" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter" />
              </a>{" "}
              <a href="#" className="social-icon icon-yt" aria-label="YouTube">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <p className="eyebrow text-gold mb-0">Company</p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="#company-profile" className="footer-link">
                  Company Profile
                </a>
              </li>
              <li className="mb-2">
                <Link to="/chairman" className="footer-link">
                  Chairman Message
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/vision-mission" className="footer-link">
                  Vision &amp; Mission
                </Link>
              </li>
              <li className="mb-2">
                <a href="#brand-story" className="footer-link">
                  Brand Story
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2">
            <p className="eyebrow text-gold mb-0">Business</p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <a href="#global-presence" className="footer-link">
                  Global Presence
                </a>
              </li>
              <li className="mb-2">
                <Link to="/investors" className="footer-link">
                  Investors
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/csr" className="footer-link">
                  CSR Activities
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
            <p className="eyebrow text-gold mb-0">Contact</p>
            <p className="small text-on-navy-muted mt-3">
              Group enquiries
              <br />{" "}
              <a href="mailto:
info@novadevelopmentglobal.com" className="text-on-navy footer-link">
                
info@novadevelopmentglobal.com
              </a>
            </p>
            <Link to="/contact" className="btn btn-outline-gold btn-sm text-uppercase mt-3">
              Speak to an advisor
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-sm-between gap-2 pt-4 mt-4 footer-bottom small text-on-navy-muted">
          <p className="mb-0">© 2026 Nova Development. All rights reserved.</p>
          <p className="mb-0">Privacy Policy · Terms of Use · Disclaimer</p>
        </div>
      </div>
    </footer>
  );
}
