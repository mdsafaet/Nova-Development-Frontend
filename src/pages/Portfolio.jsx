import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

import "@/styles/portfolio.css";

export default function Portfolio() {
  return (
    <main className="nvp-page">
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}