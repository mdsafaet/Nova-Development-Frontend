import { img } from "@/assets/images";
import {
  ArrowUpRight,
  Building2,
  CreditCard,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

import "@/styles/nova-one.css";

const features = [
  {
    icon: Building2,
    label: "Properties",
  },
  {
    icon: CreditCard,
    label: "Payments",
  },
  {
    icon: Wrench,
    label: "Services",
  },
  {
    icon: ShieldCheck,
    label: "Community",
  },
];

export default function NovaOne() {
  return (
    <section
      id="nova-app"
      className="nova-one-section"
    >
      {/* Background */}
      <div
        className="nova-one-bg"
        aria-hidden="true"
      >
        <span className="nova-one-orb nova-one-orb--1" />
        <span className="nova-one-orb nova-one-orb--2" />
        <span className="nova-one-orb nova-one-orb--3" />

        <span className="nova-one-grid" />
      </div>

      <div className="nova-one-container">
        <div className="nova-one-layout">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="nova-one-content">

            <div className="nova-one-eyebrow">
              <span className="nova-one-eyebrow-icon">
                <Smartphone
                  size={14}
                  strokeWidth={1.7}
                />
              </span>

              Nova One
            </div>

            <h2>
              Your property.
              <span>
                One intelligent app.
              </span>
            </h2>

            <p className="nova-one-description">
              Manage your property,
              payments, service requests
              and community life from one
              connected digital experience.
              Nova One puts everything you
              need in one place.
            </p>

            {/* features */}
            <div className="nova-one-features">
              {features.map(
                ({
                  icon: Icon,
                  label,
                }) => (
                  <div
                    className="nova-one-feature"
                    key={label}
                  >
                    <span>
                      <Icon
                        size={16}
                        strokeWidth={1.6}
                      />
                    </span>

                    {label}
                  </div>
                )
              )}
            </div>

            {/* download */}
            <div className="nova-one-download">
              <div className="nova-one-brand">
                <div className="nova-one-brand-mark">
                  <strong>
                    NOVA
                  </strong>

                  <span>
                    ONE
                  </span>
                </div>

                <div>
                  <small>
                    Download
                  </small>

                  <strong>
                    Nova One App
                  </strong>
                </div>
              </div>

              <div className="nova-store-row">

                <a
                  href="#"
                  className="nova-store-btn"
                  aria-label="Download Nova One on the App Store"
                >
                  <i className="fa-brands fa-apple" />

                  <span>
                    <small>
                      Download on the
                    </small>

                    <strong>
                      App Store
                    </strong>
                  </span>
                </a>

                <a
                  href="#"
                  className="nova-store-btn"
                  aria-label="Get Nova One on Google Play"
                >
                  <i className="fa-brands fa-google-play" />

                  <span>
                    <small>
                      Get it on
                    </small>

                    <strong>
                      Google Play
                    </strong>
                  </span>
                </a>

                <a
                  href="#"
                  className="nova-store-btn"
                  aria-label="Get Nova One on AppGallery"
                >
                  <i className="fa-solid fa-bag-shopping" />

                  <span>
                    <small>
                      Explore it on
                    </small>

                    <strong>
                      AppGallery
                    </strong>
                  </span>
                </a>

              </div>
            </div>

            <div className="nova-one-note">
              <span className="nova-one-note-dot" />

              Available for Nova property
              owners across supported markets.
            </div>
          </div>

          {/* =========================
              PHONE AREA
          ========================== */}

          <div className="nova-one-visual">

            {/* floating cards */}

            <div className="nova-floating-card nova-floating-card--payments">
              <div className="nova-floating-icon">
                <CreditCard
                  size={18}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <small>
                  Payments
                </small>

                <strong>
                  All up to date
                </strong>
              </div>

              <span className="nova-floating-status">
                ✓
              </span>
            </div>

            <div className="nova-floating-card nova-floating-card--service">
              <div className="nova-floating-icon">
                <Wrench
                  size={18}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <small>
                  Service request
                </small>

                <strong>
                  Technician assigned
                </strong>
              </div>
            </div>

            {/* phone */}

            <div className="nova-phone-modern">
              <div className="nova-phone-frame">

                <div className="nova-phone-island" />

                <div className="nova-phone-screen">

                  {/* phone top */}
                  <div className="nova-phone-top">
                    <div>
                      <small>
                        Good morning
                      </small>

                      <strong>
                        Ali Mohamed
                      </strong>
                    </div>

                    <div className="nova-phone-avatar">
                      <img
                        src="https://i.pravatar.cc/100?img=15"
                        alt="User avatar"
                      />

                      <span />
                    </div>
                  </div>

                  {/* property */}
                  <div className="nova-phone-property">
                    <img
                      src={img.projectResidential}
                      alt="Nova Harbour Residences"
                    />

                    <div className="nova-phone-property-overlay" />

                    <div className="nova-phone-property-top">
                      <span>
                        My property
                      </span>

                      <span>
                        Ready
                      </span>
                    </div>

                    <div className="nova-phone-property-bottom">
                      <small>
                        Dubai Harbour
                      </small>

                      <strong>
                        Nova Harbour
                        Residences
                      </strong>

                      <p>
                        Apartment 1804 · Tower A
                      </p>
                    </div>
                  </div>

                  {/* balance */}
                  <div className="nova-phone-balance">
                    <div>
                      <small>
                        Next payment
                      </small>

                      <strong>
                        AED 18,450
                      </strong>

                      <span>
                        Due 18 September
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label="View payment"
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                      />
                    </button>
                  </div>

                  {/* quick actions */}
                  <div className="nova-phone-section-title">
                    <strong>
                      Quick actions
                    </strong>

                    <span>
                      View all
                    </span>
                  </div>

                  <div className="nova-phone-actions">

                    <button type="button">
                      <span>
                        <Wrench
                          size={15}
                        />
                      </span>

                      Service
                    </button>

                    <button type="button">
                      <span>
                        <CreditCard
                          size={15}
                        />
                      </span>

                      Payments
                    </button>

                    <button type="button">
                      <span>
                        <ShieldCheck
                          size={15}
                        />
                      </span>

                      Access
                    </button>

                    <button type="button">
                      <span>
                        <Building2
                          size={15}
                        />
                      </span>

                      Property
                    </button>

                  </div>

                  {/* banner */}
                  <div className="nova-phone-banner">
                    <div>
                      <small>
                        Community
                      </small>

                      <strong>
                        Harbour Run
                      </strong>

                      <span>
                        12 Aug · 7:00 AM
                      </span>

                      <button type="button">
                        Join event
                      </button>
                    </div>

                    <img
                      src={img.projectMixed}
                      alt=""
                    />
                  </div>

                  {/* nav */}
                  <div className="nova-phone-nav">

                    <span className="active">
                      <i className="fa-solid fa-house" />
                      Home
                    </span>

                    <span>
                      <i className="fa-solid fa-wallet" />
                      Payments
                    </span>

                    <span className="nova-phone-nav-main">
                      <i className="fa-solid fa-plus" />
                    </span>

                    <span>
                      <i className="fa-regular fa-message" />
                      Requests
                    </span>

                    <span>
                      <i className="fa-regular fa-user" />
                      Profile
                    </span>

                  </div>

                </div>
              </div>
            </div>

            {/* bottom floating metric */}

            <div className="nova-floating-card nova-floating-card--property">
              <span className="nova-property-pulse" />

              <div>
                <small>
                  Property status
                </small>

                <strong>
                  Everything connected
                </strong>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}