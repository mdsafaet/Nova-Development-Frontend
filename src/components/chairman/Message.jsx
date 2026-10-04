export default function Message() {
  return (
    <section className="stg-message">
      <div className="container">
        <div className="stg-message-inner">
          <p className="lead reveal" style={{ "--d": ".2s" }}>
            We understand that real estate is not merely about properties; it’s about aspirations, dreams, and
            creating spaces where life unfolds.
          </p>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Our unwavering commitment is to bring those dreams to life and provide you with the highest level
            of service and satisfaction. Every master plan, every acre and every partnership is guided by
            long-term thinking — ensuring what we build today remains relevant and cherished tomorrow.
          </p>
          <p className="reveal" style={{ "--d": ".2s" }}>
            Throughout our journey, we have upheld three fundamental pillars:{" "}
            <strong>Excellence, Integrity, and Community</strong>. These pillars are the cornerstones of our
            company’s values. We believe that by consistently delivering excellence in our services, operating
            with unwavering integrity, and nurturing the communities in which we work, we can make a
            meaningful and lasting impact.
          </p>
          <p className="reveal" style={{ "--d": ".2s" }}>
            The real estate industry is one of constant change and evolution. As Chairman, I assure you that
            we are prepared and committed to staying at the forefront of this ever-changing landscape. We
            embrace innovation and technology to provide you with the most cutting-edge solutions and ensure
            that your real estate journey is as seamless and rewarding as possible.
          </p>
          <div className="stg-pillars">
            <div className="stg-pillar reveal" style={{ "--d": ".3s" }}>
              <i className="fa-solid fa-award" />
              <strong>Excellence</strong>
              <span>Consistently delivering the highest standard in design, engineering and service.</span>
            </div>
            <div className="stg-pillar reveal" style={{ "--d": ".4s" }}>
              <i className="fa-solid fa-shield-halved" />
              <strong>Integrity</strong>
              <span>Operating with transparency, accountability and unwavering ethics.</span>
            </div>
            <div className="stg-pillar reveal" style={{ "--d": ".5s" }}>
              <i className="fa-solid fa-people-group" />
              <strong>Community</strong>
              <span>Nurturing the places and people that give our developments meaning.</span>
            </div>
          </div>
          <div className="stg-closing reveal" style={{ "--d": ".6s" }}>
            <strong>45+ projects · 3,200 acres · 4 markets — One standard</strong>
            <p>Design. Engineering. Governance. Stewardship. Places that outlive us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
