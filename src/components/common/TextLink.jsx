import Button from "./Button";
export default function TextLink({ children, ...props }) {
  return <Button className="nova-text-link" {...props}>{children} <span aria-hidden="true">↗</span></Button>;
}
