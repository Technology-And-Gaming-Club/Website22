import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
import {motion} from "framer-motion";
import Carousel from './Components/Carousel';
import Parallax from './Components/Parallax';
import AnimatedRoutes from './AnimatedRoutes';
import JoinTag from './Components/JoinTag';
import Footer from './Components/Footer';
import AboutText from './Components/AboutText';
import FrontPage from './Components/FrontPage';
import {useRef, useEffect, useState} from "react";


import imagesEvents from './imagesEvent';
import imagesProjects from './imagesProjects';
import imagesRegistration from './imagesRegistrations';
import "./AppEventsVGL.css"

import Navbar from './Components/Navbar';
import Menu from './Components/Menu';

import imagesRegistrations from './imagesRegistrations';
import RegistrationCarousel from './Components/RegistrationCarousel'


export default function AppEventsVGL() {
  let events = [
    {
      heading : "Valorant",
      images : imagesRegistrations,
      

      registration_link : "/valoRegistration",

      bracket_link : "/hello",

    }, 
    {
      heading : "CSGO",
      images : imagesRegistrations,
      registration_link : "/csgoRegistration",
      bracket_link : "",


    },
    {
      heading : "Rocket League",
      images : imagesRegistrations,
      registration_link : "/rocketLeagueRegistration",
      bracket_link : "",

    },
    {
      heading : "fifa",
      images : imagesRegistrations,
      registration_link : "/fifaRegistration",
      bracket_link : "",

    }
  ]
  const location = useLocation();
  const [menu,setMenu] = useState(0);
  <menu></menu>
  return (
    <motion.div animate={{y:[-1000,0]}} className="eventVGL">
    <Navbar setMenu ={setMenu}/>
  
      <FrontPage text1="VELLORE INSTITUTE OF TECHNOLOGY" heading="VGL" text2="We are the premium gaming and technology club of Vellore Institute of Technology.
      To us, technology is a goal and gaming a religion."/>
      <AboutText heading="ABOUT THE EVENT" text="We are the premium gaming and technology club of Vellore Institute of Technology. To us, technology is a goal and gaming a religion. Following our tagline, the club hosts two major gaming events namely Game-a-thon and VIT Gamers league along with a numerous workshops on game development, web-development, UI-UX, design and Artificial intelligence.While our gaming events witness thousands of game enthusiasts every year, putting in a lot of hardwork to win our humongous prize pools.Our technical workshops are attended by exuberant participants with a zeal to learn and often with the aim to be a part of our core club. Through Our latest venture TAG PROJECTS we aim to undertake projects on the latest techWe and also host annual Game development workshop Studio-2-Stage where participants can learn to design their games from real world professionals.- THE TEAM"/>
      {/* <RegistrationCarousel heading="VALORANT" images={imagesRegistrations}/> */}
      {
        events.map((element,idx)=>{
          return  <RegistrationCarousel heading={element.heading} images={imagesRegistrations } registration_link={element.registration_link} bracket_link={element.bracket_link}/>
          
        })      }
      {/* <Parallax/> */}
      {/* <RegistrationCarousel heading="CSGO" images={imagesRegistrations}/>
      <RegistrationCarousel heading="rocket" images={imagesRegistrations}/>
      <RegistrationCarousel heading="fifa" images={imagesRegistrations}/> */}
      <Footer/>  
    </motion.div>
  )
}
