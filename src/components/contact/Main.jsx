import { Link } from "react-router-dom";

export default function Main() {
  return (
    <section className="contact-main">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-card fade-reveal" style={{ "--d": ".3s" }}>
            <div className="nova-section-label" style={{ marginBottom: "14px" }}>
              <span>Enquiry</span>
            </div>
            <h2>Send a message</h2>
            <p className="sub">
              Tell us a little about your interest — routed to the right market within hours.
            </p>
            <div className="form-trust">
              <span>
                <i className="fa-solid fa-lock" /> Encrypted &amp; confidential
              </span>
              <span>
                <i className="fa-solid fa-clock" /> Response in 24h
              </span>
              <span>
                <i className="fa-solid fa-shield-halved" /> Governance-first
              </span>
            </div>
            <form id="contactForm" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>First name *</label>
                  <input type="text" placeholder="Ali" required />
                </div>
                <div className="form-group">
                  <label>Last name *</label>
                  <input type="text" placeholder="Ahmed" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Work email *</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+971 50 000 0000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label>Enquiry type *</label>
                  <select required>
                    <option value="">Select a topic</option>
                    <option>Investment</option>
                    <option>Partnership</option>
                    <option>Portfolio / Projects</option>
                    <option>Media &amp; Press</option>
                    <option>Careers</option>
                    <option>General</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Market</label>
                <select>
                  <option value="">Select market</option>
                  <option>UAE — Dubai</option>
                  <option>Bangladesh — Dhaka</option>
                  <option>USA — New York</option>
                  <option>UK — London</option>
                  <option>Multiple markets</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea placeholder="How can we help?" required />
              </div>
              <div className="form-foot">
                <label>
                  <input type="checkbox" required /> I agree to Privacy Policy and consent to being contacted.
                </label>{" "}
                <button type="submit" className="btn btn-gold text-uppercase">
                  Send message <span>↗</span>
                </button>
              </div>
              <p
                id="formNote"
                style={{ marginTop: "10px", fontSize: "12px", color: "var(--muted-body)", minHeight: "18px" }}
              />
            </form>
          </div>
          <div className="contact-side">
            <div className="contact-info-card reveal" style={{ "--d": ".3s" }}>
              <h3 className="reveal" style={{ "--d": ".1s" }}>
                Contact directly
              </h3>
              <div className="contact-info-list">
                <div className="contact-info-item reveal" style={{ "--d": ".3s" }}>
                  <i className="fa-solid fa-envelope" />
                  <div>
                    <strong>Group enquiries</strong>
                    <a href="mailto:enquiries@novaland.group">enquiries@novaland.group</a>
                    <br />
                    <span>For investment &amp; partnership</span>
                  </div>
                </div>
                <div className="contact-info-item reveal" style={{ "--d": ".4s" }}>
                  <i className="fa-solid fa-phone" />
                  <div>
                    <strong>Head office — Dubai</strong>
                    <a href="tel:+97145558800">+971 4 555 8800</a>
                    <br />
                    <span>Sun–Thu, 9am–6pm GST</span>
                  </div>
                </div>
                <div className="contact-info-item reveal" style={{ "--d": ".5s" }}>
                  <i className="fa-brands fa-whatsapp" />
                  <div>
                    <strong>WhatsApp</strong>
                    <a href="https://wa.me/97145558800" target="_blank">
                      Chat on WhatsApp
                    </a>
                    <br />
                    <span>Fastest for site visits</span>
                  </div>
                </div>
                <div className="contact-info-item reveal" style={{ "--d": ".6s" }}>
                  <i className="fa-solid fa-location-dot" />
                  <div>
                    <strong>Visit us</strong>
                    <span>Level 24, Boulevard Plaza, Downtown Dubai — by appointment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-quick reveal" style={{ "--d": ".4s" }}>
              <h4 className="reveal" style={{ "--d": ".1s" }}>
                Quick actions
              </h4>
              <div className="q-links">
                <Link to="/company-profile">
                  Company profile <i className="fa-solid fa-arrow-up-right-from-square" />
                </Link>{" "}
                <Link to="/portfolio">
                  Explore portfolio <i className="fa-solid fa-arrow-up-right-from-square" />
                </Link>{" "}
                <Link to="/investors">
                  Investor information <i className="fa-solid fa-arrow-up-right-from-square" />
                </Link>{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Brochure download coming soon");
                  }}
                >
                  Download brochure <i className="fa-solid fa-download" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
