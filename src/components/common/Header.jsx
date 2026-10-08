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

  /* Close menu after route change */
  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  /* Lock page scroll only when mobile menu is open */
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

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const onDoc = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setDropdown(null);
      }
    };

    document.addEventListener("click", onDoc);

    return () => {
      document.removeEventListener("click", onDoc);
    };
  }, []);

  /* Desktop hover only */
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

  const toggle = (e, name) => {
    e.preventDefault();

    setDropdown(
      dropdown === name
        ? null
        : name
    );
  };

  return (
    <header className="site-header sticky-top">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div className="topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-info">
            <a
              href="mailto:info@novadevelopmentglobal.com"
              className="d-inline-flex align-items-center gap-2 text-decoration-none small-tracking"
            >
              <i className="fa-solid fa-envelope text-gold" />

              info@novadevelopmentglobal.com
            </a>

            <a
              href="tel:+09606707707"
              className="d-inline-flex align-items-center gap-2 text-decoration-none small-tracking"
            >
              <i className="fa-solid fa-phone text-gold" />

              +09606 707 707
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
          MAIN NAV
      ====================================================== */}

      <nav
        className="navbar navbar-expand-xl main-nav"
        ref={navRef}
      >
        <div className="container d-flex justify-content-between">
          {/* LOGO */}

          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
          >
            <img
              src={img.logo}
              alt="Nova Development"
              className="site-logo"
            />
          </Link>

          {/* MOBILE TOGGLER */}

          <button
            className={`navbar-toggler${
              open ? "" : " collapsed"
            }`}
            type="button"
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => {
              setOpen((prev) => !prev);

              if (open) {
                setDropdown(null);
              }
            }}
          >
            <i
              className={`fa-solid ${
                open
                  ? "fa-xmark"
                  : "fa-bars"
              } text-white`}
            />
          </button>

          {/* =================================================
              MENU
          ================================================== */}

          <div
            className={`collapse navbar-collapse${
              open ? " show" : ""
            }`}
            id="mainNav"
          >
            <ul className="navbar-nav ms-auto gap-xl-3">
              {/* COMPANY */}

              <li
                className={`nav-item dropdown${
                  dropdown === "company"
                    ? " show"
                    : ""
                }`}
                {...hover("company")}
              >
                <a
                  className={`nav-link dropdown-toggle${
                    dropdown === "company"
                      ? " show"
                      : ""
                  }`}
                  href="#"
                  id="companyDropdown"
                  role="button"
                  aria-expanded={
                    dropdown === "company"
                  }
                  onClick={(e) =>
                    toggle(e, "company")
                  }
                >
                  Company
                </a>

                <ul
                  className={`dropdown-menu${
                    dropdown === "company"
                      ? " show"
                      : ""
                  }`}
                  aria-labelledby="companyDropdown"
                >
                  {companyLinks.map(
                    ([to, label]) => (
                      <li key={to}>
                        <Link
                          className="dropdown-item"
                          to={to}
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
                className={`nav-item dropdown${
                  dropdown === "presence"
                    ? " show"
                    : ""
                }`}
                {...hover("presence")}
              >
                <a
                  className={`nav-link dropdown-toggle${
                    dropdown === "presence"
                      ? " show"
                      : ""
                  }`}
                  href="#"
                  id="presenceDropdown"
                  role="button"
                  aria-expanded={
                    dropdown === "presence"
                  }
                  onClick={(e) =>
                    toggle(e, "presence")
                  }
                >
                  Presence
                </a>

                <ul
                  className={`dropdown-menu market-menu${
                    dropdown === "presence"
                      ? " show"
                      : ""
                  }`}
                  aria-labelledby="presenceDropdown"
                >
                  {flags.map(
                    ([
                      code,
                      alt,
                      label,
                    ]) => (
                      <li key={code}>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2"
                          href="#"
                          onClick={(e) =>
                            e.preventDefault()
                          }
                        >
                          <img
                            src={`https://flagcdn.com/w40/${code}.png`}
                            alt={alt}
                            className="flag-icon"
                          />

                          {label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>

              {/* NORMAL NAVIGATION LINKS */}

              {plainLinks.map(
                ([to, label]) => (
                  <li
                    className="nav-item"
                    key={to}
                  >
                    <Link
                      className="nav-link"
                      to={to}
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}