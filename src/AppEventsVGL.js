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
      heading : "CODM",
      images : imagesRegistrations,
      registration_link : "/CodmRegistration",
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
  
      <FrontPage text1="Gravita's Event" heading="RECON" text2="INITIATE | ELEVATE"/>
      <AboutText heading="ABOUT THE EVENT" text="The name of the event is RECON: INITIATE/ELEVATE. THE MAIN IDEA OF INITIATE and ELEVATE IS TO START OFF THE EVENT AND ELEVATE IT TO TAKE IT TO THE NEXT LEVEL. THE EVENT WILL BE FOR ALL-INDIA COLLEGE STUDENTS. IT WILL BE CONDUCTED OFFLINE IN VIT ON 30TH SEP-2ND OCT
2022 IN VIT VELLORE CAMPUS.
WE PLAN TO CONDUCT THE EVENT IN TWO PHASES, PHASE 1 BEING A GAME.
DEVELOPMENT HACKATHON AND PHASE 2 BEING AN ALL INDIA ESPORTS.
TOURNAMENT. THE DETAILS ARE AS FOLLOWS:-

1. STUDIO-TO-STAGE (GAME DEV HACKATHON OR GAMEUAM) - IT IS A
48HRS CONTINUOUS GAME DEVELOPMENT . HACKATHON WHERE
PARTICIPANTS WILL BE GIVEN A BASIC THEME (ON THE SPOT) WITH CERTAIN
CONDITIONS AND THEY HAVE TO DEVELOP PC 2D/3D GAMES BASED ON THE
THEME ON ANY GAME DEVELOPMENT ENGINE THEY MAY WISH TO. THE GAMES:
WILL BE PUBLISHED ON TAG CLUB'S, STUDIO TO STAGE, ITCH.IO PAGE. THE
SUBMITTED GAMES WILL THEN BE JUDGED BASED ON MULTIPLE CRITERIA
NAMELY RELEVANCE TO THE THEME, PLAYABILITY, IDEA, ETC. THE FIRST 3
PODIUM HOLDERS WILL BE REWARDED.

2. GAME-A-THON (GAT) - THIS IS TAG'S ALL INDIA ESPORTS TOURNAMENT.
CONDUCTED EVERY YEAR. THIS YEAR WE WILL BE CONDUCTING GAMES LIKE:
CSGO, VALORANT, FIFA 22 AND ROCKET LEAGUE. THE REGISTRATIONS.
WILL BE TAKEN IN USING TAG'S OFFICIAL WEBSITE. (CURRENTLY NO ENTRY
FEES). PLAYERS CAN PARTICIPATE EITHER WITH THEIR TEAMS OR SOLO.
FOR SOLO PARTICIPANTS, WE WILL BE ALLOTTING. TEAMS BASED ON THEIR RANKS. THE MATCHMAKING WILL BE DONE ACCORDINGLY. THE WINNERS ANI
RUNNER UPS OF EACH GAME WILL BE REWARDED.
"/>
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
