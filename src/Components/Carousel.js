import {motion} from 'framer-motion';
import React from 'react'
import { useRef, useState, useEffect } from 'react';
// import Slider from 'react-touch-drag-slider'
import './carousel.css'
import { useInView } from 'react-intersection-observer';

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
        <h4 className='viewHeading'>
          {props.heading.toUpperCase()}
        </h4>
      </div>
      <div className="container">
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left:-width}} className="inner-carousel">
            {props.images.map(image=>
              {
                return(
                  <motion.div className='item'>
                    <img src={image}/>
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </div>
  )
}