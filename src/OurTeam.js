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
      <OurTeamLeft name="AYUSH SAHA" role="CHAIRPERSON" body="With his management skills and his sheer desire for the work, Bhargav's enthusiasm and commitment has always provided us success. The only Rainbow Six Siege player in the group, who is also highly skilled at the game." image="Assets/Ayush Saha.png" data-aos="fade-left"/>
      <OurTeamRight name="AYUSH AGGARWAL" role="VICE-CHAIRPERSON" body="Diligent in his works, hardworking and funny, Ayush has never missed a chance to impress us with his work and his other worldly skills." image="Assets/Ayush Aggarwal.png"/> 
      <OurTeamLeft name="VINAYAK AGGARWAL" role="SECRETARY" body="As someone who's always ready to challenge and bring up new ideas, Vinayak has always proven his great dedication towards the club." image="Assets/Vinayak Aggarwal.png" data-aos="fade-left"/>
      <OurTeamRight name="KUMAR KRISHAV" role="CO-SECRETARY" body="Did someone say CSGO? Our in-house professional CS player(albeit with a history of dubiousness) is also that one guy who knows everyone- and is ready to lend a hand in any of their problems- be it a club event or their elo(or both)." image="Assets/Kumar Krishav.png"/> 
      <OurTeamLeft name="BHARGAV CHOPRA" role="EVENTS HEAD" body="With his management skills and his sheer desire for the work, Bhargav's enthusiasm and commitment has always provided us success. The only Rainbow Six Siege player in the group, who is also highly skilled at the game." image="Assets/Bhargav Chopra.png" data-aos="fade-left"/>
      <OurTeamRight name="SHOUNAK BANERJEE" role="PR HEAD" body="From taking responsibilities to being extremely resourceful, Shounak has always been creative and innovative in his ways of work. But out of work, we all know him for his knowledge and extreme FIFA skills." image="Assets/Shounak Banerjee.png"/> 
      <OurTeamLeft name="PRAKHAR" role="TECHNICAL HEAD" body="A man of many names - some call him website-man, others call him the laziest DSA teacher. But all of us know him as the guy to go to for advice - academic or otherwise, or some debugging help. Legend says that he will not be satisfied until every Bua is cut and every single person has played Divinity. (He yields to none other than PHP) " image="Assets/Prakhar.png" data-aos="fade-left"/>
      <OurTeamRight name="SANCHIT AHLAWAT" role="MANAGEMENT HEAD" body="Ever since the beginning, we could always count on Sanchit’s quick wit and diligence for (quite literally) every aspect of the club’s work, and to provide that little extra motivation that everyone desperately needs." image="Assets/Sanchit Ahlawat.png"/> 
      <OurTeamLeft name="SREEJITH" role="DESIGN HEAD" body="Creative, artistic and eloquent, Sreejith has always been the outlook of the club. Without him our club lacks a certain pizzazz- which makes perfect sense as he’s the brains behind all our design ventures (even if he does make us wait 9 months sometimes)." image="Assets/Sreejith.png"/>
      <OurTeamRight name="MANAV SHARMA" role="CREATIVE HEAD" body="The guy with a penchant for creating masterworks of art with a smile on his face. He’s got it all- making posters, rating artwork, changing logos (some day), speed-running pantheon 5." image="Assets/Manav Sharma.png"/> 
      <Footer/>
    
    </>
  )
}
