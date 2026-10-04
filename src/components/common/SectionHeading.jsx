export default function SectionHeading({ label, children, ...props }) {
  return <div {...props}>{label && <div className="nova-section-label"><span>{label}</span></div>}<h2 className="nova-display-title">{children}</h2></div>;
}
