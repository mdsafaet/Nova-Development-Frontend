import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Chairman from "@/components/home/Chairman";
import VisionMission from "@/components/home/VisionMission";
import Portfolio from "@/components/home/Portfolio";
import Investors from "@/components/home/Investors";
import BrandStory from "@/components/home/BrandStory";
import Journal from "@/components/home/Journal";
import Responsibility from "@/components/home/Responsibility";
import Contact from "@/components/home/Contact";
import Newsletter from "@/components/home/Newsletter";
import NovaOne from "@/components/home/NovaOne";

export default function Home() {
  return (
    <>
      <title>Nova Development — Land &amp; Real Estate Across Four Markets</title>
      <meta
        name="description"
        content="Nova Development develops land estates, residences and commercial assets in Dubai, Bangladesh, USA and UK. 45+ projects, 3,200 acres, 17 years."
      />
      <Hero />
      <Intro />
      <Chairman />
      <VisionMission />
      <Portfolio />
      <Investors />
      <BrandStory />
      <Journal />
      <Responsibility />
      <Contact />
      <Newsletter />
      <NovaOne />
    </>
  );
}
