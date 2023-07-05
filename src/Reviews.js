import React from 'react'
import NavbarReviews from './Components/NavbarReviews'
import AnimatedCursor from 'react-animated-cursor';
import { useState } from 'react';
import ReviewLandingPage from './ReviewLandingPage';
import { motion } from 'framer-motion';
import imagesReviews from './imagesReviews';
import Carousel from './Components/Carousel';
import ReviewStack from './ReviewStack';



export default function Reviews() {

  const [menu,setMenu] = useState(0);

  return (
    <motion.div animate={{y:[-1000,0]}}>
        <AnimatedCursor className="cursor" color="255,255,255"
                                          innerSize={8}
                                          outerSize={35}
                                          innerScale={1}
                                          outerScale={1.7}
                                          outerAlpha={0}
                                          outerStyle={{border: '3px solid #fff'}}/>
        <NavbarReviews setMenu={setMenu}/>
        <ReviewLandingPage title = {"Welcome to\nTAG's Blogsite"} content = {"I shoved 15 alligators up my ass on 17/03/2015 and 103 other things unknown about me"}/>
        <Carousel heading="REVIEWS" images={imagesReviews}/>
        <ReviewStack/>
    </motion.div>
  )
}
