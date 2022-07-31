import React from "react";
import Home from "./Home.js";
import Menu from "./Components/Menu";
// import CsgoRegistration from "./csgoRegistration";
// import ValoRegistration from "./valoRegistration";
// import FifaRegistration from "./fifaRegistration";
// import RocketLeagueRegistration from "./rocketLeagueRegistration";

import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import App from "./AppHome.js";

import { AnimatePresence } from "framer-motion";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AppEventsVGL from "./AppEventsVGL";
import AppHome from "./AppHome";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      {/* // <Routes>
    //   <Route path="/Menu" element={<Menu />} />
    //   <Route path="/EventVGL" element={<AppEventsVGL />} />
    //   <Route path="/valoRegistration" element={<ValoRegistration />} />
    //   <Route path="/csgoRegistration" element={<CsgoRegistration />} />
    //   <Route path="/fifaRegistration" element={<FifaRegistration />} />
    //   <Route
    //     path="/rocketLeagueRegistration"
    //     element={<RocketLeagueRegistration />}
    //   />
    //   <Route path="/" element={<Home />} />
    // </Routes> */}
    </AnimatePresence>
  );
}