import { markets } from "@/data/markets";
import Flag from "@/components/common/Flag";
import SectionHeading from "@/components/common/SectionHeading";
// Optional section: the original homepage did not include a presence section.
export default function Presence() {
  return <section id="global-presence" className="nova-profile-section"><div className="container">
    <SectionHeading label="Global presence">Four markets. One standard.</SectionHeading>
    <div className="row g-4">{markets.map(market => <div key={market.id} id={market.id} className="col-sm-6 col-lg-3"><Flag code={market.flag} alt={market.country + " flag"} /><h3>{market.city}</h3><p>{market.country} · {market.status}</p></div>)}</div>
  </div></section>;
}
