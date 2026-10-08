import Hero from "@/components/vision-mission/Hero";
import SubNav from "@/components/vision-mission/SubNav";
import Intro from "@/components/vision-mission/Intro";
import Vision from "@/components/vision-mission/Vision";
import Mission from "@/components/vision-mission/Mission";
import Values from "@/components/vision-mission/Values";
import Principles from "@/components/vision-mission/Principles";
import "@/styles/vision-mission.css";

export default function VisionMission() {
  return (
    <>
      <title>Corporate Vision &amp; Mission — Nova Development</title>
      <Hero />
      <SubNav />
      <Intro />
      <Vision />
      <Mission />
      <Values />
      <Principles />
    </>
  );
}
