import SmoothScroll from "@/components/common/SmoothScroll";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ChatWidget from "@/components/common/ChatWidget";
import useScrollReveal from "@/hooks/useScrollReveal";
import RegionBanner from "@/components/common/RegionBanner";

export default function MainLayouts() {
  const { pathname } = useLocation();

  useScrollReveal(pathname);

  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <RegionBanner />
    </>
  );
}
