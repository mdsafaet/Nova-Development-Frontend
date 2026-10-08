import Hero from "@/components/contact/Hero";
import Main from "@/components/contact/Main";
import Offices from "@/components/contact/Offices";
import Map from "@/components/contact/Map";
import "@/styles/contact.css";

export default function Contact() {
  return (
    <>
      <title>Contact — Nova Development</title>
      <Hero />
      <Main />
      <Offices />
      <Map />
    </>
  );
}
