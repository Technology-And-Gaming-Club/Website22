import "./AppHome.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

import ReactDOM from "react-dom/client";
import Home from "./Home.js";
import Menu from "./Components/Menu";
import CsgoRegistration from "./CSGOReg";
import ValoRegistration from "./ValReg";
import FifaRegistration from "./FIFAReg";
import CodmRegistration from "./CODMReg";
import OurTeam from "./OurTeam";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Carousel from "./Components/Carousel";
import Parallax from "./Components/Parallax";
import AnimatedRoutes from "./AnimatedRoutes";
import BackgroundImage from "./Components/BackgroundImage";
import JoinTag from "./Components/JoinTag";
import Footer from "./Components/Footer";
import AboutText from "./Components/AboutText";
import FrontPage from "./Components/FrontPage";
import imagesEvents from "./imagesEvent.js";
import imagesProjects from "./imagesProjects.js";
import AppEventsVGL from "./AppEventsVGL";
import Rulebook from "./Rulebook";
import Registration from "./Registration";
import STSReg from "./STSReg"
import Workshop from "./Workshop";
import Events from "./Events";

function App() {
  const location = useLocation();
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/Menu" element={<Menu />} />
      <Route path="/EventVGL" element={<AppEventsVGL />} />
      <Route path="/ValoRegistration" element={<ValoRegistration />} />
      <Route path="/CsgoRegistration" element={<CsgoRegistration />} />
      <Route path="/FifaRegistration" element={<FifaRegistration />} />
      <Route path="/OurTeam" element={<OurTeam/>} />
      <Route path="/Registration" element={<Registration/>} />
      <Route
        path="/CodmRegistration"
        element={<CodmRegistration />}
      />
      <Route path="/STSRegistration" element = {<STSReg />} />
      <Route path="/Workshop" element = {<Workshop />} />
      <Route path = "/Events" element = {<Events />} />
      <Route path="/Rulebook" element={<Rulebook/>} />
      <Route path="/" element={<Home />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;