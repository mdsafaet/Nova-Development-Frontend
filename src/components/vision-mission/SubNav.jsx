export default function SubNav() {
  return (
    <nav className="vm-subnav" aria-label="Vision and Mission">
      <div className="container d-flex gap-2 flex-wrap">
        <a href="#vision">Vision</a> <a href="#mission">Mission</a> <a href="#values">Core Values</a>{" "}
        <a href="#principles">How We Execute</a>
      </div>
    </nav>
  );
}
