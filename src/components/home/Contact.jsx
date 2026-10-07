export default function Contact() {
  return (
    <section id="contact" className="nova-contact-section">
      <div className="container">
        <div className="nova-contact-heading">
          <div className="nova-section-label nova-section-label-light reveal">
            <span>Contact &amp; Corporate Offices</span>
          </div>
          <h2 className="reveal" style={{ "--d": ".1s" }}>
            Let's build <span>what comes next.</span>
          </h2>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Speak with our team about projects, partnerships, investment opportunities or corporate enquiries.
          </p>
        </div>
        <div className="nova-office-grid reveal" style={{ "--d": ".3s" }}>
          <div className="nova-office active-office">
            <div className="nova-office-top">
              <span>01</span> <img src="https://flagcdn.com/w40/ae.png" alt="United Arab Emirates" />
            </div>
            <span className="eyebrow text-gold">HEAD OFFICE</span>
            <h3>Dubai</h3>
            <address>
              Level 24, Boulevard Plaza
              <br /> Downtown Dubai
              <br /> United Arab Emirates
            </address>
            <a href="tel:+97145558800">+971 4 555 8800</a>
          </div>
          <div className="nova-office">
            <div className="nova-office-top">
              <span>02</span> <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh" />
            </div>
            <span className="eyebrow text-gold">Bangladesh OFFICE</span>
            <h3>Dhaka</h3>
<address>
  Rupayan Shopping Square, 10th Floor, Unit-A & B
  <br /> Plot No. C-2, Block-G, Sayem Sobhan Anvir Road
  <br /> Bashundhara Residential Area, Dhaka-1229[cite: 1]
  <br /> Bangladesh
</address>
            <a href="tel:+880255661200">+880 2 5566 1200</a>
          </div>
          <div className="nova-office">
            <div className="nova-office-top">
              <span>03</span> <img src="https://flagcdn.com/w40/us.png" alt="United States" />
            </div>
            <span className="eyebrow text-gold">AMERICAS OFFICE</span>
            <h3>New York</h3>
            <address>
              One World Trade Center
              <br /> Floor 62
              <br /> New York, NY 10007
              <br /> USA
            </address>
            <a href="tel:+12125550198">+1 212 555 0198</a>
          </div>
          <div className="nova-office">
            <div className="nova-office-top">
              <span>04</span> <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom" />
            </div>
            <span className="eyebrow text-gold">UK OFFICE</span>
            <h3>London</h3>
            <address>
              One Canada Square
              <br /> Canary Wharf
              <br /> London E14 5AB
              <br /> United Kingdom
            </address>
            <a href="tel:+442079460958">+44 20 7946 0958</a>
          </div>
        </div>
      </div>
    </section>
  );
}
