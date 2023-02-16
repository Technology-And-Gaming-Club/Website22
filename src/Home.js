import React from 'react'
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import ReactDOM from "react-dom/client";
// import { motion } from 'framer-motion';
import "./Home.css"

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Carousel from './Components/Carousel';
import AnimatedCursor from "react-animated-cursor"
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
// import Scrollbar from 'react-smooth-scrollbar';

export default function Home() {

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  // console.log(mousePosition);

  // useEffect(()=>{

  //   const mouseMove = e =>{
  //     setMousePosition({ 
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener("mousemove",mouseMove);

  //   return ()=>{
  //     window.removeEventListener("mousemove", mouseMove);
  //   }
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x ,
  //     y: mousePosition.y 
  //   }
  // }

  const [menu,setMenu] = useState(0);
  return (


 
    <motion.div animate={{y:[-1000,0]}}>
      <AnimatedCursor className="cursor" color="255,255,255"
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #fff'}}/>
      {/* <Scrollbar> */}
      {/* <motion.div className="cursor" variants={variants} animate="default"></motion.div> */}
      <Navbar setMenu={setMenu}/>
      <FrontPage text1="VELLORE INSTITUTE OF TECHNOLOGY" heading="TECHNOLOGY AND GAMING CLUB" text2="We are the premium gaming and technology club of Vellore Institute of Technology.
      To us, technology is a goal and gaming a religion."/>
      <AboutText heading="ABOUT US" text="We are the premium gaming and technology club of Vellore Institute of Technology. To us, technology is a goal and gaming a religion. Following our tagline, the club hosts two major gaming events namely Game-a-thon and VIT Gamers league along with a numerous workshops on game development, web-development, UI-UX, design and Artificial intelligence.While our gaming events witness thousands of game enthusiasts every year, putting in a lot of hardwork to win our humongous prize pools.Our technical workshops are attended by exuberant participants with a zeal to learn and often with the aim to be a part of our core club. Through Our latest venture TAG PROJECTS we aim to undertake projects on the latest techWe and also host annual Game development workshop Studio-2-Stage where participants can learn to design their games from real world professionals.- THE TEAM"/>
        
      <Carousel heading="WORKSHOPS" images={imagesEvents}/>
      <Carousel heading="OUR EVENTS" images={imagesProjects}/>
      <JoinTag/>
      <Footer/>  

      {/* </Scrollbar> */}
    </motion.div>
  )
}