import {motion} from 'framer-motion';
import React from 'react'
import { useRef, useState, useEffect } from 'react';
// import Slider from 'react-touch-drag-slider'
import './registrationCarousel.css'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Carousel(props) {
  // console.log(images);
  const [width,setWidth] = useState(0);
  const carousel = useRef();
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(()=>
  {
    // console.log(carousel.curremt.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <div className={inView?'carouselContainer carouselContainer--zoom':'carouselContainer'} ref={ref}>
    <motion.div className='carouselBody'>
      <div className="headContainer">
        <h2 className='heading'>
          {props.heading.toUpperCase()}
        </h2>
      </div>
      <div className="container">
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left:-width}} className="inner-carousel">
            {props.images.map(image=>
              {
                return(
                  <Link to="/ValorantRegistrations">
                    <motion.div className='item'>
                      <img src={image}/>
                    </motion.div>
                  </Link>
                );
              })}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </div>
  )
}
