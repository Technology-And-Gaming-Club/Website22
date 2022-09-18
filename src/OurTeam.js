import React from 'react';
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Carousel from './Components/Carousel';
import Parallax from './Components/Parallax';
import AnimatedRoutes from './AnimatedRoutes';
import BackgroundImage from './Components/BackgroundImage';
import JoinTag from './Components/JoinTag';
import Footer from './Components/Footer';
import AboutText from './Components/AboutText';
import FrontPage from './Components/FrontPage';
import imagesEvents from './imagesEvent.js'
import imagesProjects from './imagesProjects.js';
import AppEventsVGL from './AppEventsVGL';
import Aos from "aos";
import "aos/dist/aos.css";
import "./ourTeam.css"
import OurTeamLeft from './OurTeamLeft';

export default function OurTeam() {
  const [menu,setMenu] = useState(0);
  useEffect(()=>{
    Aos.init({});
  },[]);
  return (
    <>
      <Navbar setMenu={setMenu}/>
      <OurTeamLeft name="AYUSH SAHA" role="CHAIRPERSON" body="With his management skills and his sheer desire for the work, Bhargav's enthusiasm and commitment has always provided us success. The only Rainbow Six Siege player in the group, who is also highly skilled at the game." image="Assets/Ayush Saha.png"/>
    </>
  )
}
