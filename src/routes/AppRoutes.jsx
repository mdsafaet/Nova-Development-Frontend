import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

import Home from "../pages/Home";
import CompanyProfile from "../pages/CompanyProfile";
import Chairman from "../pages/Chairman";
import Contact from "../pages/Contact";
import Csr from "../pages/Csr";
import Investors from "../pages/Investors";
import Newsroom from "../pages/Newsroom";
import NewsSingle from "../pages/NewsSingle";
import Portfolio from "../pages/Portfolio";
import PortfolioSingle from "../pages/PortfolioSingle";
import VisionMission from "../pages/VisionMission";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "chairman",
        element: <Chairman />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "csr",
        element: <Csr />,
      },
      {
        path: "investors",
        element: <Investors />,
      },
      {
        path: "newsroom",
        element: <Newsroom />,
      },
      {
        path: "news-single",
        element: <NewsSingle />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio-single",
        element: <PortfolioSingle />,
      },
      {
        path: "vision-mission",
        element: <VisionMission />,
      },
      {
        path: "vission-mission",
        element: <Navigate to="/vision-mission" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default AppRoutes;