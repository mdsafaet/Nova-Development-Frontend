export default function Map() {
  return (
    <section className="contact-map">
      <div className="map-wrap fade-reveal" style={{ "--d": ".3s" }}>
        <iframe
          src="https://maps.google.com/maps?q=Boulevard%20Plaza%20Downtown%20Dubai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          loading="lazy"
          title="Map"
        />
        <div className="map-overlay reveal" style={{ "--d": ".4s" }}>
          <i
            className="fa-solid fa-location-dot"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              background: "var(--gold)",
              color: "#fff",
              flex: "0 0 36px",
            }}
          />
          <div>
            <strong>Boulevard Plaza · Downtown Dubai</strong>
            <span>
              Head Office · Level 24 ·{" "}
              <a
                href="https://maps.google.com/?q=Boulevard+Plaza+Downtown+Dubai"
                target="_blank"
                style={{ color: "var(--gold)", fontWeight: "600", textDecoration: "none" }}
              >
                Open in Maps ↗
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
