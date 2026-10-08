import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { img } from "@/assets/images";

import {
  flags,
  companyLinks,
  plainLinks,
} from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const navRef = useRef(null);
  const { pathname } = useLocation();

  /* =========================================================
     CLOSE MENU AFTER NAVIGATION
  ========================================================= */

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (open) {
      document.body.classList.add("nova-menu-open");
    } else {
      document.body.classList.remove("nova-menu-open");
    }

    return () => {
      document.body.classList.remove("nova-menu-open");
    };
  }, [open]);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     OUTSIDE CLICK
  ========================================================= */

  useEffect(() => {
    const onDoc = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setDropdown(null);
      }
    };

    document.addEventListener("click", onDoc);

    return () => {
      document.removeEventListener("click", onDoc);
    };
  }, []);

  /* =========================================================
     DESKTOP HOVER
  ========================================================= */

  const hover = (name) => ({
    onMouseEnter: () => {
      if (window.innerWidth > 1199) {
        setDropdown(name);
      }
    },

    onMouseLeave: () => {
      if (window.innerWidth > 1199) {
        setDropdown(null);
      }
    },
  });

  const toggle = (event, name) => {
    event.preventDefault();

    setDropdown(
      dropdown === name
        ? null
        : name
    );
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setDropdown(null);
  };

  return (
    <header className="site-header sticky-top">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div className="topbar">
        <div className="container nova-topbar-inner">
          <div className="contact-info">
            <a
              href="mailto:info@novadevelopmentglobal.com"
              className="nova-top-contact"
            >
              <i className="fa-solid fa-envelope text-gold" />

              <span>
                info@novadevelopmentglobal.com
              </span>
            </a>

            <a
              href="tel:+09606707707"
              className="nova-top-contact"
            >
              <i className="fa-solid fa-phone text-gold" />

              <span>
                +09606 707 707
              </span>
            </a>
          </div>

          <Link
            to="/contact"
            className="btn btn-outline-gold btn-sm text-uppercase enquire-btn"
          >
            Enquire
          </Link>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <nav
        className="navbar navbar-expand-xl main-nav"
        ref={navRef}
      >
        <div className="container nova-navbar-inner">
          {/* LOGO */}

          <Link
            className="navbar-brand"
            to="/"
            onClick={closeMobileMenu}
          >
            <img
              src={img.logo}
              alt="Nova Development"
              className="site-logo"
            />
          </Link>

          {/* MOBILE TOGGLE */}

          <button
            className={`navbar-toggler ${
              open ? "is-open" : ""
            }`}
            type="button"
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            onClick={() => {
              setOpen((current) => !current);
              setDropdown(null);
            }}
          >
            <i
              className={
                open
                  ? "fa-solid fa-xmark"
                  : "fa-solid fa-bars"
              }
            />
          </button>

          {/* NAVIGATION */}

          <div
            className={`navbar-collapse nova-mobile-nav ${
              open ? "show" : ""
            }`}
            id="mainNav"
          >
            <div className="nova-mobile-nav-inner">
              <ul className="navbar-nav">
                {/* COMPANY */}

                <li
                  className={`nav-item dropdown ${
                    dropdown === "company"
                      ? "show"
                      : ""
                  }`}
                  {...hover("company")}
                >
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle ${
                      dropdown === "company"
                        ? "show"
                        : ""
                    }`}
                    aria-expanded={
                      dropdown === "company"
                    }
                    onClick={(event) =>
                      toggle(
                        event,
                        "company"
                      )
                    }
                  >
                    <span>
                      Company
                    </span>

                    <i className="fa-solid fa-chevron-down" />
                  </button>

                  <ul
                    className={`dropdown-menu ${
                      dropdown === "company"
                        ? "show"
                        : ""
                    }`}
                  >
                    {companyLinks.map(
                      ([to, label]) => (
                        <li key={to}>
                          <Link
                            className="dropdown-item"
                            to={to}
                            onClick={
                              closeMobileMenu
                            }
                          >
                            {label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>

                {/* PRESENCE */}

                <li
                  className={`nav-item dropdown ${
                    dropdown === "presence"
                      ? "show"
                      : ""
                  }`}
                  {...hover("presence")}
                >
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle ${
                      dropdown === "presence"
                        ? "show"
                        : ""
                    }`}
                    aria-expanded={
                      dropdown === "presence"
                    }
                    onClick={(event) =>
                      toggle(
                        event,
                        "presence"
                      )
                    }
                  >
                    <span>
                      Presence
                    </span>

                    <i className="fa-solid fa-chevron-down" />
                  </button>

                  <ul
                    className={`dropdown-menu market-menu ${
                      dropdown === "presence"
                        ? "show"
                        : ""
                    }`}
                  >
                    {flags.map(
                      ([
                        code,
                        alt,
                        label,
                      ]) => (
                        <li key={code}>
                          <a
                            className="dropdown-item nova-market-item"
                            href="#"
                            onClick={(event) => {
                              event.preventDefault();
                            }}
                          >
                            <img
                              src={`https://flagcdn.com/w40/${code}.png`}
                              alt={alt}
                              className="flag-icon"
                            />

                            <span>
                              {label}
                            </span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </li>

                {/* NORMAL LINKS */}

                {plainLinks.map(
                  ([to, label]) => (
                    <li
                      className="nav-item"
                      key={to}
                    >
                      <Link
                        className="nav-link"
                        to={to}
                        onClick={
                          closeMobileMenu
                        }
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {/* MOBILE CONTACT */}

              <div className="nova-mobile-footer">
                <span>
                  Nova Development
                </span>

                <a href="tel:+09606707707">
                  +09606 707 707
                </a>

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Enquire
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}