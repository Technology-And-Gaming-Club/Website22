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
import OurTeamRight from './OurTeamRight';

export default function OurTeam() {
  const [menu,setMenu] = useState(0);
  useEffect(()=>{
    Aos.init({});
  },[]);
  return (
    <>
      <Navbar setMenu={setMenu}/>
      <OurTeamLeft name="GAME WITH THE WEB Pt2" role="by Santushti" body="TAG club is back with the part-II session of Game with the web, with insights of backend development with MongoDB, Express, etc.." image="Assets/GameWithWebPt2.png"/>
      <OurTeamRight name="GAME WITH THE WEB Pt1" role="by Shaan" body="TAG Club brings you game with the web where we hold a series of workshops to help you learn the basics of web development." image="Assets/GameWithWebPt1png.png"/> 
      <OurTeamLeft name="INTRODUCTION TO PAPER 2D IN UNREAL ENGINE" role="by Jaweed Lateef" body="AI hear footsteps on the right....
Who's approaching??
Well no one because somebody forgot to develop the sprites!
Don't let your limitations be a hindrance to your game development journey! So put on your developer's hat and lets together dive into the realm of sprite-based system Paper 2D on Unreal engine!" image="Assets/ITP2D.png"/>
      <OurTeamRight name="PLAYER 2: CPU READY Pt-1,2,3" role="by Darsh " body="Now the drivers are all set and the engine ready to race, all we await is your presence in the exhilarating final session of our workshop event Player 2: CPU READY! So join us this Wednesday, on YouTube, as we clear the racing tracks and look into the finer details, ending the long anticipation to finally shout out GET SET GO!" image="Assets/CPU Ready.png"/> 
      
      
      <OurTeamLeft name="PHYSICS STIMULATION VERSION 2: BLENDER" role="by Ayush Aggarwal" body="Don't like studying physics, but interested in learning blender? 🤔 Don't worry we got you covered with part 2 of our Physics simulation workshop. Don't miss out on this quality week event, the participants will be provided with certificates for attending. " image="Assets/PhyStimulation1.png"/>
      <OurTeamRight name="PHYSICS STIMULATION VERSION 1: BLENDER" role="by Ayush Aggarwal" body="Ever watched those satisfying particles crash or explode videos on YouTube? So, let us continue our journey in blender. Introducing physics simulation in blender. " image="Assets/PhyStimulation2.png"/> 
      <OurTeamLeft name="INTRODUCTION TO MODIFIERS 2.0" role="by Ayush Aggarwal" body="Learning without application is just entertainment”. So, this week we bring you back to blender with our Introduction to modifiers 2.0. " image="Assets/Intro2.png"/>
      <OurTeamRight name="INTRODUCTION TO MAYA" role="by Sreejith" body="Our quest for 3D Animations and modelling knows no bounds. This week, we bring to you, Introduction to Autodesk Maya. Starting from the basics of the interface of Autodesk Maya to making a low poly game scene, we will be covering the entire process in detail from modelling, texturing, lighting and rendering using Maya. Don't miss this amazing opportunity to learn from one of our best designers!" image="Assets/Maya.png"/> 
      <OurTeamLeft name="INTRODUCTION TO MODIFIERS 1.0" role="by Ayush Aggarwal" body="Want to learn 3D modelling and animations or improve your existing skills on blender, but haven't found the right tools for it? We've got you covered with our introduction to modifiers workshop." image="Assets/Intro.png"/>
      <OurTeamRight name="PIXEL ART ASSET DESIGN" role=" by YOGA NARASIMA" body="" image="Assets/Pixel.png"/> 
      <Footer/>
    
    </>
  )
}
