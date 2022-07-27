import React from 'react'
import "./Menu.css"
import {motion} from "framer-motion"

export default function Menu(props) {
  return (


    <motion.div initial={{opacity:"0"}} animate={{y:[-1000,-100], opacity:"1"}} exit={{y:[-100,1000]}} className="menuBody">
        
        <motion.div className="menuContainer">
            <div className="textBox">
                <motion.div animate={{x:[-2800,0]}} exit={{x:[0,-2800]}} transition={{duration: 1}} className='text'>
                    ABOUT
                </motion.div>
                <motion.div animate={{x:[-2700,0]}} exit={{x:[0,-2700]}} transition={{duration: 1}} className='text'>
                    EVENTS
                </motion.div>
                <motion.div animate={{x:[-2600,0]}} exit={{x:[0,-2600]}} transition={{duration: 1}} className='text'>
                    PROJECTS
                </motion.div>
                <motion.div animate={{x:[-2500,0]}} exit={{x:[0,-2500]}} transition={{duration: 1}} className='text'>
                    OUR TEAM
                </motion.div>
            </div>
            <motion.div animate={{x:[1000,0]}}  transition={{duration: 1.5}} className="banner">
                <img src="Assets/aboutImage.png"></img>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}
