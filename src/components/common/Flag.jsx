export default function Flag({ code, alt, ...props }) {
  return <img className="flag-icon" src={`https://flagcdn.com/w40/${code}.png`} alt={alt ?? code} {...props} />;
}
