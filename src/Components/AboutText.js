import React from 'react'
import {motion} from 'framer-motion';
import "./aboutText.css"
import { useInView } from 'react-intersection-observer';

export default function AboutText(props) {

  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className={inView?"aboutContainer aboutContainer--zoom":"aboutContainer"} ref={ref}>

    <div className='aboutText'>
      <motion.div  className="leftAbout">
        <div className="leftAboutHeading">
            {props.heading}
        </div>
        <div className="leftAboutText">
            {props.text}
        </div>
      </motion.div>
      <motion.div className="rightAbout">
        <img src='Assets/aboutImage.png'/>
      </motion.div>
    </div>
    </div>
  )
}
