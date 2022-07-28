import './AppHome.css';
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import Navbar from './Components/Navbar';

import ReactDOM from "react-dom/client";
import Menu from './Components/Menu';

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

function App() {
  const location = useLocation();

  return (
   
      <AnimatedRoutes/>
     
  );
}

export default App;
