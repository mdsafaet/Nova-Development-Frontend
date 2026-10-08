const links = [
  {
    href: "#vision",
    label: "Vision",
  },
  {
    href: "#mission",
    label: "Mission",
  },
  {
    href: "#values",
    label: "Core Values",
  },
  {
    href: "#principles",
    label: "How We Execute",
  },
];

export default function SubNav() {
  return (
    <nav
      className="nvv-subnav"
      aria-label="Vision and Mission"
    >
      <div className="container">
        <div className="nvv-subnav-inner">
          <span className="nvv-subnav-label">
            Corporate Direction
          </span>

          <div className="nvv-subnav-links">
            {links.map(({ href, label }) => (
              <a
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}