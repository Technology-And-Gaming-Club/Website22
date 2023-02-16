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
import AnimatedCursor from 'react-animated-cursor';

export default function OurTeam() {
  const [menu,setMenu] = useState(0);
  useEffect(()=>{
    Aos.init({});
  },[]);
  return (
    <>
    <AnimatedCursor className="cursor" color="255,255,255"
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #fff'}}/>
      <Navbar setMenu={setMenu}/>
      <OurTeamLeft name="CLASH" role="Weekly Tournament" body="Get your mindset right and prepare yourself for tournaments coming to you every week.
" image="Assets/Clash.png"/>
      <OurTeamRight name="LIBERTY" role="Digital Poster Making Competition" body="On the occasion of the 75th anniversary of the Declaration of Independence, we at TAG Club-VIT are hosting a competition to create a digital poster with the theme 'Liberty' One can demonstrate their artistic skills using the following softwares: Canva, Figma, Photoshop, and others." image="Assets/DPMC.png"/> 
      <OurTeamLeft name="GAMESCAPE" role="IntraClub Tournament" body="Sick and tired with all the classes Monday to Saturday? Jaded with attending lectures from 8 in the morning to 7:30 at night? Who would understand your feelings better than us!? Believe us, for we know, all you need right now is an awe-inspiring, mind-boggling and a flabbergasting gaming session where we don’t test your book knowledge, but your presence of mind, your strategy and your winning spirit!" image="Assets/Gamescape.png"/>
      <OurTeamRight name="STUDIO TO STAGE" role="GAMEJAM" body="Hackathon related to Game Development which will test participant's Technical Skills by Game Development" image="Assets/Studio To Stage.png"/> 
      <OurTeamLeft name="GAME-A-THON" role="All India E-Sports Tournament" body="e-Sports Tournament including 4 games- Valorant, CS:GO, Rainbow Six Seige and Rocket League" image="Assets/GAT2021.png"/>
      <OurTeamRight name="UNREAL LEVEL DESIGN CHALLENGE" role="DESIGN COMPETITION" body="FTAG gives you the chance to be creative with Unreal Level Design Challenge, showcase and compete with others by creating a House in Unreal Engine." image="Assets/UnrealLevlChallng.png"/> 
      <OurTeamLeft name="BLENDER COMPETITION"  body="Let your creativity take wings with TAG's Blender Render Challenge. Compete with your fellow blender buddies and showcase your imagination.
 " image="Assets/BlenderCpm.png"/>
      <OurTeamRight name="NO TOBACCO DAY" role="DIGITAL POSTER MAKING COMPETITION" body="TAG asks participants to explore design domains digitally through canva, photoshop or figma on topic- NO TABACCO DAY'" image="Assets/DPMCold.png"/> 
      <OurTeamLeft name="TAG CYBERCUP" role="e-Sports Tournament" body="We are proud to announce TAG-CyberCup, a gaming tournament that is sure to get you off your feet and into an E-sport extravaganza.
TAG CyberCup is an intra club tournament consisting of 3 games: CS:GO, Valorant and Rocket League. If you can register as a full team- that’s great! But even if you are missing a team we got you covered!
Have you got what it takes to meet the challenge?
." image="Assets/Cybercup.png"/>
      <OurTeamRight name="TAG-O-MANIA" role="intra-Club Tournament" body="The game of life has 2 participants :
Player and spectator.
You have to pick one of our Intra-Club Tournament. .
The list of titles is huge, all the way from 'Among Us' to the good old 'CS:GO'we have it all" image="Assets/tagOmania.png"/> 
      <Footer/>
    
    </>
  )
}
