import { img } from "@/assets/images";

export default function NovaOne() {
  return (
    <section id="nova-app" className="nova-app-section nova-app-emaar">
      <div className="container">
        <div className="nova-app-emaar-inner">
          <div className="nova-app-emaar-center">
            <h2 className="reveal" style={{ "--d": ".1s" }}>
              One app for all property needs
            </h2>
            <p className="nova-app-sub reveal" style={{ "--d": ".2s" }}>
              Manage your property, payments, service requests and community life — all in Nova One. Available
              on iOS, Android and AppGallery.
            </p>
            <div className="emaar-download-row reveal" style={{ "--d": ".3s" }}>
              <div className="emaar-brand">
                <span className="emaar-logo">
                  NOVA
                  <br />
                  ONE
                </span>{" "}
                <span>Download Nova One app</span>
              </div>
              <div className="store-badges">
                <a href="#" className="store-badge" aria-label="Download on App Store">
                  <i className="fa-brands fa-apple" />{" "}
                  <span>
                    <small className="mb-1">Download on the</small> <strong>App Store</strong>
                  </span>
                </a>{" "}
                <a href="#" className="store-badge" aria-label="Get it on Google Play">
                  <i className="fa-brands fa-google-play" />{" "}
                  <span>
                    <small className="mb-1">GET IT ON</small> <strong>Google Play</strong>
                  </span>
                </a>{" "}
                <a href="#" className="store-badge" aria-label="Explore on AppGallery">
                  <i className="fa-solid fa-bag-shopping" />{" "}
                  <span>
                    <small className="mb-1">EXPLORE IT ON</small> <strong>AppGallery</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="nova-phone-wrap fade-reveal" style={{ "--d": ".3s" }}>
            <div className="nova-phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="ph-user">
                    <strong>Ali Mohamed</strong> <span>Your Property • Dubai Harbour</span>
                  </div>
                  <div className="ph-avatar">
                    <img src="https://i.pravatar.cc/100?img=15" alt="User avatar" />{" "}
                    <span className="ph-dot" />
                  </div>
                </div>
                <div className="ph-property-card">
                  <img src={img.projectResidential} alt="Property" />
                  <div>
                    <small>Standing portfolio</small> <strong>Nova Harbour Residences</strong>{" "}
                    <span>
                      <i className="fa-solid fa-location-dot" /> Dubai Harbour • Ready
                    </span>
                  </div>
                </div>
                <div className="ph-banner">
                  <div>
                    <small>What's New</small> <strong>Grab offers &amp; win rewarding vouchers</strong>{" "}
                    <a href="#">Explore now ↗</a>
                  </div>
                  <img src={img.projectMixed} alt="" />
                </div>
                <div className="ph-requests">
                  <span className="ph-label">Requests</span>
                  <div className="ph-grid">
                    <span>
                      <i className="fa-solid fa-toolbox" /> Service Request
                    </span>{" "}
                    <span>
                      <i className="fa-solid fa-file-invoice" /> Statement
                    </span>{" "}
                    <span>
                      <i className="fa-solid fa-id-card" /> Access Card
                    </span>{" "}
                    <span>
                      <i className="fa-solid fa-house" /> Home Services
                    </span>
                  </div>
                </div>
                <div className="ph-community">
                  <span className="ph-label">Community Life</span>
                  <div className="ph-community-row">
                    <span className="ph-icon">
                      <i className="fa-solid fa-calendar-check" />
                    </span>
                    <div>
                      <strong>Upcoming community event</strong> <span>Harbour Run • 12 Aug • Join now</span>
                    </div>
                  </div>
                </div>
                <div className="ph-nav">
                  <span className="active">
                    <i className="fa-solid fa-house" /> Home
                  </span>{" "}
                  <span>
                    <i className="fa-solid fa-wallet" /> Payments
                  </span>{" "}
                  <span className="ph-mid">
                    <i className="fa-solid fa-plus" />
                  </span>{" "}
                  <span>
                    <i className="fa-solid fa-message" /> Requests
                  </span>{" "}
                  <span>
                    <i className="fa-solid fa-user" /> Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
