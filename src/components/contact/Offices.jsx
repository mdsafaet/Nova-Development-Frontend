export default function Offices() {
  return (
    <section className="contact-offices">
      <div className="container">
        <div className="offices-head">
          <div>
            <div className="nova-section-label reveal" style={{ marginBottom: "14px" }}>
              <span>Corporate Offices</span>
            </div>
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              Four markets. <span>One standard.</span>
            </h2>
          </div>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Visit, call or get directions — same governance and response standards.
          </p>
        </div>
        <div className="office-grid">
          <div className="office-card active reveal" style={{ "--d": ".3s" }}>
            <div className="office-body">
              <div className="office-top">
                <span className="num">01 — Dubai</span>
                <img src="https://flagcdn.com/w40/ae.png" alt="AE" />
              </div>
              <div className="office-hours">
                <i className="fa-solid fa-clock" /> Sun–Thu 9am–6pm · GST
              </div>
              <p className="eyebrow" style={{ marginTop: "10px" }}>
                Head Office
              </p>
              <h3>
                Dubai{" "}
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontWeight: "400",
                    color: "var(--gold)",
                    fontSize: "13px",
                  }}
                >
                  — HQ
                </span>
              </h3>
              <address>
                Level 24, Boulevard Plaza, Downtown Dubai, UAE
                <br />
                <a href="tel:+97145558800" className="tel">
                  <i className="fa-solid fa-phone" style={{ color: "var(--gold)" }} /> +971 4 555 8800
                </a>
              </address>
              <div className="actions">
                <a
                  href="https://maps.google.com/?q=Boulevard+Plaza+Downtown+Dubai"
                  className="primary"
                  target="_blank"
                >
                  Directions ↗
                </a>
                <a href="mailto:dubai@novaland.group">Email</a>
              </div>
            </div>
          </div>
          <div className="office-card reveal" style={{ "--d": ".4s" }}>
            <div className="office-body">
              <div className="office-top">
                <span className="num">02 — Dhaka</span>
                <img src="https://flagcdn.com/w40/bd.png" alt="BD" />
              </div>
              <div className="office-hours">
                <i className="fa-solid fa-clock" /> Sun–Thu 9am–6pm · BST
              </div>
              <p className="eyebrow" style={{ marginTop: "10px" }}>
                Bangladesh Office
              </p>
              <h3>Dhaka</h3>
              <address>
                Nova Land Tower, Gulshan Avenue, Gulshan 2, Dhaka 1212
                <br />
                <a href="tel:+880255661200" className="tel">
                  <i className="fa-solid fa-phone" style={{ color: "var(--gold)" }} /> +880 2 5566 1200
                </a>
              </address>
              <div className="actions">
                <a href="https://maps.google.com/?q=Gulshan+Avenue+Dhaka" className="primary" target="_blank">
                  Directions ↗
                </a>
                <a href="mailto:dhaka@novaland.group">Email</a>
              </div>
            </div>
          </div>
          <div className="office-card reveal" style={{ "--d": ".5s" }}>
            <div className="office-body">
              <div className="office-top">
                <span className="num">03 — New York</span>
                <img src="https://flagcdn.com/w40/us.png" alt="US" />
              </div>
              <div className="office-hours">
                <i className="fa-solid fa-clock" /> Mon–Fri 9am–5pm · ET
              </div>
              <p className="eyebrow" style={{ marginTop: "10px" }}>
                Americas Office
              </p>
              <h3>New York</h3>
              <address>
                One World Trade Center, Floor 62, New York, NY 10007, USA
                <br />
                <a href="tel:+12125550198" className="tel">
                  <i className="fa-solid fa-phone" style={{ color: "var(--gold)" }} /> +1 212 555 0198
                </a>
              </address>
              <div className="actions">
                <a
                  href="https://maps.google.com/?q=One+World+Trade+Center+New+York"
                  className="primary"
                  target="_blank"
                >
                  Directions ↗
                </a>
                <a href="mailto:newyork@novaland.group">Email</a>
              </div>
            </div>
          </div>
          <div className="office-card reveal" style={{ "--d": ".6s" }}>
            <div className="office-body">
              <div className="office-top">
                <span className="num">04 — London</span>
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" />
              </div>
              <div className="office-hours">
                <i className="fa-solid fa-clock" /> Mon–Fri 9am–5pm · GMT
              </div>
              <p className="eyebrow" style={{ marginTop: "10px" }}>
                UK Office
              </p>
              <h3>London</h3>
              <address>
                One Canada Square, Canary Wharf, London E14 5AB, UK
                <br />
                <a href="tel:+442079460958" className="tel">
                  <i className="fa-solid fa-phone" style={{ color: "var(--gold)" }} /> +44 20 7946 0958
                </a>
              </address>
              <div className="actions">
                <a
                  href="https://maps.google.com/?q=One+Canada+Square+London"
                  className="primary"
                  target="_blank"
                >
                  Directions ↗
                </a>
                <a href="mailto:london@novaland.group">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
