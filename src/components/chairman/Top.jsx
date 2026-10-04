import { img } from "@/assets/images";

export default function Top() {
  return (
    <section className="stg-top">
      <div className="container">
        <div className="stg-image fade-reveal" style={{ "--d": ".3s" }}>
          <img src={img.chairmen} alt="Group Chairman — Nova Development" />
        </div>
        <div className="stg-name">
          <h2 className="reveal" style={{ "--d": ".1s" }}>
            Chairman’s Office
          </h2>
          <span className="reveal" style={{ "--d": ".2s" }}>
            Group Chairman — Nova Development
          </span>
        </div>
      </div>
    </section>
  );
}
