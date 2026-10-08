const navItems = [
  {
    href: "#thesis",
    label: "Thesis",
  },
  {
    href: "#metrics",
    label: "Performance",
  },
  {
    href: "#governance",
    label: "Governance",
  },
  {
    href: "#markets",
    label: "Markets",
  },
];

export default function SubNav() {
  return (
    <nav
      className="nvi-subnav"
      aria-label="Investor sections"
    >
      <div className="container">
        <div className="nvi-subnav-inner">
          <span className="nvi-subnav-label">
            Investors
          </span>

          <div className="nvi-subnav-links">
            {navItems.map(
              ({ href, label }) => (
                <a
                  key={href}
                  href={href}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}