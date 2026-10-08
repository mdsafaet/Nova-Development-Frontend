import Hero from "@/components/investors/Hero";
import SubNav from "@/components/investors/SubNav";
import Thesis from "@/components/investors/Thesis";
import Metrics from "@/components/investors/Metrics";
import Governance from "@/components/investors/Governance";
import Markets from "@/components/investors/Markets";
import Cta from "@/components/investors/Cta";

import "@/styles/investors.css";
import "@/styles/contact.css";
import Map from "@/components/contact/Map";
import Offices from "@/components/contact/Offices";

export default function Investors() {
  return (
    <>
      <title>Investors — Nova Development</title>
      <Hero />
      <SubNav />
      <Thesis />
      <Metrics />
      <Governance />
      {/* <Markets /> */}
      {/* <Map/> */}
      <Offices />
      <Cta />
    </>
  );
}
