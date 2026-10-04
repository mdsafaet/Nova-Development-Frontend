import { Link } from "react-router-dom";
export default function Button({ to, href, children, className = "btn btn-gold", ...props }) {
  if (to) return <Link to={to} className={className} {...props}>{children}</Link>;
  if (href) return <a href={href} className={className} {...props}>{children}</a>;
  return <button type="button" className={className} {...props}>{children}</button>;
}
