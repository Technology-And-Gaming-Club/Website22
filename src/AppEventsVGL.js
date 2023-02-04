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
import ReconButton from './Components/ReconButton';
import OurTeamLeft from './OurTeamLeft';
import OurTeamRight from './OurTeamRight';


export default function AppEventsVGL() {
  let events = [
    {
      heading : "VALORANT",
      // images : imagesRegistrations,
      

      registration_link : "/valoRegistration",

      bracket_link : "/hello",

    }, 

    {
      heading : "CODM",
      // images : imagesRegistrations,
      registration_link : "/CodmRegistration",
      bracket_link : "",

    },
    {
      heading : "FIFA",
      // images : imagesRegistrations,
      registration_link : "/fifaRegistration",
      bracket_link : "",

    },
    {
      heading : "ARCADE",
      // images : imagesRegistrations,
      registration_link : "/STSRegistration",
      bracket_link : "",

    }
  ]
  const location = useLocation();
  const [menu,setMenu] = useState(0);
  <menu></menu>
  return (
    <motion.div animate={{y:[-1000,0]}} className="eventVGL">
    <Navbar setMenu ={setMenu}/>
      <FrontPage text1="RIVIERA EVENT" heading="VGL" text2="VICTORY AWAITS | ARE YOU READY?"/>
      {/* <ReconButton/> */}
      <AboutText heading="ABOUT THE EVENT" text="THIS YEAR, TAG HOSTS THE 11TH ITERATION OF VIT GAMER'S LEAGUE, AN EVENT HOSTED EVERY YEAR AT THE CULTURAL FEST RIVIERA. VGL HAS OUTGROWN IT'S REPUTATION IN BEING ONE OF THE BIGGEST E-SPORTS TOURNAMENTS AT THE COLLEGE LEVEL AND ATTRACTS PARTICIPANTS FROM ALL OVER INDIA TO PARTICIPATE IN THE EVENT.

      THE EVENT BRINGS OUT THE BEST IN-HOUSE GAMERS FROM ALL OVER THE COLLEGE AND PROVIDES AN OPPORTUNITY TO COMPETE AND PROVIDES AN OPPORTUNITY TO COMPETE ON A LARGE SCALE PLATFORM."
      image="Assets/aboutImage.png"/>

      
      {/* <RegistrationCarousel heading="VALORANT" images={imagesRegistrations}/> */}
      {/* {
        events.map((element,idx)=>{
          return  <RegistrationCarousel heading={element.heading} images={imagesRegistrations} registration_link={element.registration_link} bracket_link={element.bracket_link}/>
          
        })      
      } */}
      {/* <Parallax/> */}
      {/* <RegistrationCarousel heading="CSGO" images={imagesRegistrations}/>
      <RegistrationCarousel heading="rocket" images={imagesRegistrations}/>
      <RegistrationCarousel heading="fifa" images={imagesRegistrations}/> */}


<OurTeamLeft name="VGL: VALORANT" role="" body="Valorant is a team-based first-person hero shooter. Players play as one of a set of agents, characters, designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.
" image="Assets/valoVGL.png"/>
<OurTeamRight name="VGL: FIFA 23" role="" body="The world's most popular sport-football, bringing people from all around the world as the game transcends LAN-guage, culture and even platform. Watch competitors go against each other in a tournament-style bracket to crown the ultimate fifa champion. " image="Assets/fifaVGL.png"/> 
<OurTeamLeft name="VGL: CODM" role="" body="Call Of Duty Mobile is a free to play shooter game for mobile. The game is famous for its battle royale where teams dive in a world filled with arms and fight each other to survive. Everybody for themselves where survival is the only option." image="Assets/codmVGL.png"/>
<OurTeamRight name="VGL: ARCADE" role="" body="VGL Arcade games include fighting and competitive games, like old-school Pacman, Galaga, Tetris, Pinball, and many more, where players either compete for the highest high score in one game or they control two on-screen characters while engaging in one-on-one combat to show their skill and might. This event allows players compete with each other and at the same time gives them an opportunity to dive into the worlds of Injustice and Naruto Shippuden which in turn recreates the classic atmosphere of an arc" image="Assets/Studio To Stage.png"/> 

  <Footer/>  
  </motion.div>
  )
}
