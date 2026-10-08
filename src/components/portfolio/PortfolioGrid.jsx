import {
  useMemo,
  useState,
} from "react";

import {
  LuInbox,
  LuRotateCcw,
  LuSearch,
  LuSlidersHorizontal,
} from "react-icons/lu";

import ProjectCard from "@/components/common/ProjectCard";

import {
  projects,
  projectFilters,
} from "@/data/projects";

import {
  Reveal,
} from "@/components/company-profile/Float";

export default function PortfolioGrid() {
  const [filter, setFilter] =
    useState("all");

  const [query, setQuery] =
    useState("");

  const visible = useMemo(() => {
    const q = query
      .trim()
      .toLowerCase();

    return projects.filter(
      (project) =>
        (filter === "all" ||
          project.category === filter) &&
        (!q ||
          project.title
            .toLowerCase()
            .includes(q))
    );
  }, [filter, query]);

  const count = (key) =>
    key === "all"
      ? projects.length
      : projects.filter(
          (project) =>
            project.category === key
        ).length;

  const reset = () => {
    setFilter("all");
    setQuery("");
  };

  return (
    <section
      id="portfolio-projects"
      className="nvp-projects"
    >
      <div className="container">
        <Reveal>
          <div className="nvp-section-head">
            <span>01</span>

            <i />

            <strong>
              Project Archive
            </strong>
          </div>
        </Reveal>

        <div className="nvp-projects-heading">
          <div>
            <Reveal>
              <p className="nvp-kicker">
                Explore developments
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvp-title">
                Places designed
                <span>
                  to perform.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <p className="nvp-projects-intro">
              Filter the Nova portfolio by
              development typology or search
              for a specific project.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="nvp-controls">
            <div className="nvp-filter-area">
              <div className="nvp-filter-title">
                <LuSlidersHorizontal />

                <span>
                  Filter
                </span>
              </div>

              <div
                className="nvp-filter"
                role="tablist"
                aria-label="Filter projects"
              >
                {projectFilters.map(
                  (item) => (
                    <button
                      key={item.key}
                      type="button"
                      role="tab"
                      aria-selected={
                        filter ===
                        item.key
                      }
                      className={
                        filter ===
                        item.key
                          ? "nvp-filter-btn nvp-filter-btn--active"
                          : "nvp-filter-btn"
                      }
                      onClick={() =>
                        setFilter(
                          item.key
                        )
                      }
                    >
                      {item.label}

                      <span>
                        {count(
                          item.key
                        )}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            <label className="nvp-search">
              <LuSearch />

              <input
                type="search"
                placeholder="Search projects…"
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value
                  )
                }
                aria-label="Search projects"
              />
            </label>
          </div>
        </Reveal>

        {visible.length > 0 ? (
          <div className="nvp-project-grid">
            {visible.map(
              (
                project,
                index
              ) => (
                <Reveal
                  key={project.title}
                  delay={
                    Math.min(
                      index,
                      5
                    ) * 0.06
                  }
                >
                  <div className="nvp-project-card-wrap">
                    <ProjectCard
                      project={
                        project
                      }
                    />
                  </div>
                </Reveal>
              )
            )}
          </div>
        ) : (
          <div className="nvp-empty">
            <span className="nvp-empty-icon">
              <LuInbox />
            </span>

            <h3>
              No projects found
            </h3>

            <p>
              Try a different filter or
              search term.
            </p>

            <button
              type="button"
              onClick={reset}
            >
              <LuRotateCcw />

              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}