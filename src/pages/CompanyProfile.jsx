import Hero from "@/components/company-profile/Hero";
import Profile from "@/components/company-profile/Profile";
import Intro from "@/components/company-profile/Intro";
import Capabilities from "@/components/company-profile/Capabilities";
import Values from "@/components/company-profile/Values";
import Cta from "@/components/company-profile/Cta";

export default function CompanyProfile() {
  return (
    <>
      <title>Company Profile — Nova Development</title>
      <Hero />
      <Profile />
      <Intro />
      <Capabilities />
      <Values />
      <Cta />
    </>
  );
}
