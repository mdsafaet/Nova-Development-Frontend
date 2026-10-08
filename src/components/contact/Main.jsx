import { Link } from "react-router-dom";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuClock3,
  LuDownload,
  LuLockKeyhole,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
  LuSend,
  LuShieldCheck,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";


const trustItems = [
  {
    icon: LuLockKeyhole,
    label: "Encrypted & confidential",
  },
  {
    icon: LuClock3,
    label: "Response in 24h",
  },
  {
    icon: LuShieldCheck,
    label: "Governance-first",
  },
];


const contactItems = [
  {
    icon: LuMail,
    title: "Group enquiries",
    href: "mailto:info@novadevelopmentglobal.com",
    value: "info@novadevelopmentglobal.com",
    note: "For investment & partnership",
  },

  {
    icon: LuPhone,
    title: "Head office — Dubai",
    href: "tel:+97165388233",
    value: "+971 6 538 8233",
    note: "Sun–Thu, 9am–6pm GST",
  },

  {
    icon: LuMessageCircle,
    title: "WhatsApp",
    href: "https://wa.me/97145558800",
    value: "Chat on WhatsApp",
    note: "Fastest for site visits",
    external: true,
  },
];


export default function Main() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="contact-enquiry"
      className="nvc-contact"
    >
      <div className="container">
        <Reveal>
          <div className="nvc-section-head">
            <span>01</span>

            <i />

            <strong>
              Enquiry
            </strong>
          </div>
        </Reveal>


        <div className="nvc-contact-grid">
          {/* =========================================
              CONTACT FORM
          ========================================== */}

          <Reveal>
            <div className="nvc-form-card">
              <p className="nvc-kicker">
                Start a conversation
              </p>

              <h2 className="nvc-title">
                Send a
                <span>
                  message.
                </span>
              </h2>

              <p className="nvc-form-intro">
                Tell us a little about your
                interest — routed to the
                right market within hours.
              </p>


              {/* TRUST ITEMS */}

              <div className="nvc-trust-row">
                {trustItems.map(
                  ({
                    icon: Icon,
                    label,
                  }) => (
                    <div
                      key={label}
                      className="nvc-trust-item"
                    >
                      <Icon />

                      <span>
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>


              {/* FORM */}

              <form
                id="contactForm"
                className="nvc-form"
                noValidate
              >
                {/* NAME */}

                <div className="nvc-form-row">
                  <div className="nvc-field">
                    <label htmlFor="firstName">
                      First name *
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      placeholder="Ali"
                      required
                    />
                  </div>

                  <div className="nvc-field">
                    <label htmlFor="lastName">
                      Last name *
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      placeholder="Ahmed"
                      required
                    />
                  </div>
                </div>


                {/* EMAIL / PHONE */}

                <div className="nvc-form-row">
                  <div className="nvc-field">
                    <label htmlFor="email">
                      Work email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="nvc-field">
                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                </div>


                {/* COMPANY / TYPE */}

                <div className="nvc-form-row">
                  <div className="nvc-field">
                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="nvc-field">
                    <label htmlFor="type">
                      Enquiry type *
                    </label>

                    <select
                      id="type"
                      required
                    >
                      <option value="">
                        Select a topic
                      </option>

                      <option>
                        Investment
                      </option>

                      <option>
                        Partnership
                      </option>

                      <option>
                        Portfolio / Projects
                      </option>

                      <option>
                        Media &amp; Press
                      </option>

                      <option>
                        Careers
                      </option>

                      <option>
                        General
                      </option>
                    </select>
                  </div>
                </div>


                {/* MARKET */}

                <div className="nvc-field">
                  <label htmlFor="market">
                    Market
                  </label>

                  <select id="market">
                    <option value="">
                      Select market
                    </option>

                    <option>
                      UAE — Dubai
                    </option>

                    <option>
                      Bangladesh — Dhaka
                    </option>

                    <option>
                      USA — New York
                    </option>

                    <option>
                      UK — London
                    </option>

                    <option>
                      Multiple markets
                    </option>
                  </select>
                </div>


                {/* MESSAGE */}

                <div className="nvc-field">
                  <label htmlFor="message">
                    Message *
                  </label>

                  <textarea
                    id="message"
                    placeholder="How can we help?"
                    required
                  />
                </div>


                {/* FORM FOOTER */}

                <div className="nvc-form-footer">
                  <label className="nvc-consent">
                    <input
                      type="checkbox"
                      required
                    />

                    <span>
                      I agree to Privacy
                      Policy and consent to
                      being contacted.
                    </span>
                  </label>

                  <motion.button
                    type="submit"
                    className="nvc-button nvc-button--primary"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -8,
                          }
                    }
                    transition={bounce}
                  >
                    Send message

                    <LuSend />
                  </motion.button>
                </div>

                <p
                  id="formNote"
                  className="nvc-form-note"
                />
              </form>
            </div>
          </Reveal>


          {/* =========================================
              RIGHT SIDE
          ========================================== */}

          <aside className="nvc-contact-side">
            <Float delay={0.2}>
              <motion.div
                className="nvc-direct-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -10,
                      }
                }
                transition={bounce}
              >
                <div className="nvc-direct-head">
                  <span>
                    Contact directly
                  </span>

                  <LuArrowUpRight />
                </div>


                <div className="nvc-direct-list">
                  {contactItems.map(
                    ({
                      icon: Icon,
                      title,
                      href,
                      value,
                      note,
                      external,
                    }) => (
                      <div
                        key={title}
                        className="nvc-direct-item"
                      >
                        <span className="nvc-direct-icon">
                          <Icon />
                        </span>

                        <div>
                          <strong>
                            {title}
                          </strong>

                          <a
                            href={href}
                            target={
                              external
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              external
                                ? "noreferrer"
                                : undefined
                            }
                          >
                            {value}
                          </a>

                          <small>
                            {note}
                          </small>
                        </div>
                      </div>
                    )
                  )}


                  {/* VISIT US */}

                  <div className="nvc-direct-item">
                    <span className="nvc-direct-icon">
                      <LuMapPin />
                    </span>

                    <div>
                      <strong>
                        Visit us
                      </strong>

                      <p>
                        Al Tallah 2 -
                        Ajman - United Arab
                        Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Float>


            {/* =========================================
                QUICK ACTIONS
            ========================================== */}

            <Float
              delay={0.55}
              duration={6.6}
            >
              <motion.div
                className="nvc-quick-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                transition={bounce}
              >
                <span className="nvc-quick-label">
                  Quick actions
                </span>

                <div className="nvc-quick-links">
                  <Link to="/company-profile">
                    Company profile

                    <LuArrowUpRight />
                  </Link>

                  <Link to="/portfolio">
                    Explore portfolio

                    <LuArrowUpRight />
                  </Link>

                  <Link to="/investors">
                    Investor information

                    <LuArrowUpRight />
                  </Link>

                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();

                      alert(
                        "Brochure download coming soon"
                      );
                    }}
                  >
                    Download brochure

                    <LuDownload />
                  </a>
                </div>
              </motion.div>
            </Float>
          </aside>
        </div>
      </div>
    </section>
  );
}