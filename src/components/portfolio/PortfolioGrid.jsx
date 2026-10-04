import { useMemo, useState } from "react";
import ProjectCard from "@/components/common/ProjectCard";
import { projects, projectFilters } from "@/data/projects";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) => (filter === "all" || p.category === filter) && (!q || p.title.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  const count = (key) =>
    key === "all" ? projects.length : projects.filter((p) => p.category === key).length;
  const reset = () => {
    setFilter("all");
    setQuery("");
  };

  return (
    <section className="portfolio-page">
      <div className="container">
        <div className="portfolio-controls reveal" id="portfolioControls">
          <div className="portfolio-filter" role="tablist" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button
                key={f.key}
                className={`portfolio-filter-btn${filter === f.key ? " active" : ""}`}
                data-filter={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                <i className={`fa-solid ${f.icon}`}></i> {f.label}{" "}
                <span className="count">{count(f.key)}</span>
              </button>
            ))}
          </div>
          <div className="portfolio-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              id="portfolioSearch"
              type="search"
              placeholder="Search projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="portfolio-grid" id="portfolioGrid">
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className={`portfolio-empty${visible.length === 0 ? " show" : ""}`} id="portfolioEmpty">
          <i className="fa-solid fa-inbox"></i>
          <h4>No projects found</h4>
          <p>Try a different filter or search term.</p>
          <button type="button" id="portfolioReset" onClick={reset}>
            Show all projects
          </button>
        </div>
      </div>
    </section>
  );
}
