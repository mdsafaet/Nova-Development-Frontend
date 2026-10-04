export default function SubNav() {
  return (
    <nav className="vm-subnav" aria-label="Investor sections">
      <div className="container d-flex gap-2 flex-wrap">
        <a href="#thesis">Thesis</a> <a href="#metrics">Performance</a> <a href="#governance">Governance</a>{" "}
        <a href="#markets">Markets</a>
      </div>
    </nav>
  );
}
