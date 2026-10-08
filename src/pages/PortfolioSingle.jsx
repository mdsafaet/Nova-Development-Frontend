import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectDetails from "@/components/portfolio/ProjectDetails";

import "@/styles/portfolio.css";

export default function PortfolioSingle() {
  return (
    <main className="nvp-page">
      <ProjectHero />
      <ProjectDetails />
    </main>
  );
}