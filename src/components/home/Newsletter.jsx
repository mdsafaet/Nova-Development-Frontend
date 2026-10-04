import { img } from "@/assets/images";

export default function Newsletter() {
  return (
    <section id="nova-newsletter" className="nova-newsletter-section">
      <div className="nova-newsletter-bg">
        <img src={img.newsletter} alt="Dubai luxury terrace — sea view at sunset" loading="lazy" />
      </div>
      <div className="nova-newsletter-overlay" />
      <div className="container position-relative">
        <div className="nova-newsletter-content">
          <h2 className="reveal" style={{ "--d": ".1s" }}>
            KEEP YOURSELF UPDATED ON THE LATEST LUXURY
            <br /> PROPERTY AVAILABLE
          </h2>
          <form
            className="nova-newsletter-form reveal"
            style={{ "--d": ".2s" }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for signing up!");
            }}
          >
            <div className="newsletter-row">
              <input type="text" placeholder="Name*" required aria-label="Name" />{" "}
              <input type="email" placeholder="Email*" required aria-label="Email" />{" "}
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
