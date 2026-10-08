import { useEffect, useState } from "react";

const links = [
  { id: "impact", label: "Impact" },
  { id: "pillars", label: "Pillars" },
  { id: "stewardship", label: "Stewardship" },
  { id: "community", label: "Community" },
];

export default function SubNav() {
  const [active, setActive] = useState("");

  // highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="csx csx-subnav" aria-label="CSR sections">
      <div className="csx-wrap">
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""} aria-current={active === l.id ? "true" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
