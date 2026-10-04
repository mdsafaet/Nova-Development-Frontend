import { useId, useState } from "react";
export default function Tabs({ items, label = "Sections" }) {
  const id = useId();
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const selected = Math.min(active, items.length - 1);
  return <div><div role="tablist" aria-label={label}>
    {items.map((item, index) => <button type="button" key={item.id ?? index} role="tab" id={id + "-tab-" + index} aria-controls={id + "-panel-" + index} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % items.length;
      else if (event.key === "ArrowLeft") next = (index + items.length - 1) % items.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = items.length - 1;
      else return;
      event.preventDefault(); setActive(next); document.getElementById(id + "-tab-" + next)?.focus();
    }}>{item.label}</button>)}
  </div>{items.map((item, index) => <div key={item.id ?? index} role="tabpanel" id={id + "-panel-" + index} aria-labelledby={id + "-tab-" + index} hidden={selected !== index} tabIndex={0}>{item.content}</div>)}</div>;
}
