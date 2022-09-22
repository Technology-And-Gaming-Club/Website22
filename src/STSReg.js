import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar';
import "./valReg.css"
import { motion } from 'framer-motion';
export default function ValReg() {
    const [menu,setMenu] = useState(0);
  return (
    <>
        
        <Navbar setMenu={setMenu}/>
        <motion.div animate={{y:[-1000,0]}} className="valReg">
        <img src="Assets/Recon 1.png" className='landingLogo' />
        <p className="landingHeading">
            STUDIO TO STAGE
        </p>
            <p className="rulebookHeading">
                RULES SET
            </p>
            <p className="rulebookBody">
            1)Maximum participants allowed per team is 5.
 <br/>
2) The participants must enter the allotted lab on time.	<br/>
3) The participants must enter his and his teammates’ details during submission.
<br/>
4) Any game engine can be used to create the games to be submitted.<br/>
5) Only games created within the time slot will be considered for submission and rating.
<br/>
6) Games created before the time of the event will not be considered for rating.
<br/>
7) Pre-made assets can be used by the participants as long as they have a proper usage rights from the rightful owners of the assets.
<br/>
8) The participants will be requested to join the game jam on itch.io platform at the time of the event.
<br/>
9) UNDER NO CIRCUMSTANCES ARE THE PARTICIPANTS TO DAMAGE LABORATORY PROPERTY
.<br/>
            </p>
            <p className="rulebookHeading">
             
            
            
            </p>
        </motion.div>
      
    </>
  )
}
