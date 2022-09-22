import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from './Components/Navbar';
import "./fifaReg.css"

export default function FIFAReg() {
    const [menu,setMenu] = useState(0);
  return (
    <>
        <Navbar setMenu={setMenu}/>
        <motion.div animate={{y:[-1000,0]}} className="fifaReg">
        <img src="Assets/Recon 1.png" className='landingLogo fifaLanding' />
        <p className="landingHeading fifaHeading">
            FIFA
        </p>
            <p className="rulebookHeading">
                GENERAL RULES
            </p>
            <p className="rulebookBody">
            1) Participants should be punctual, and come preferably 5 mins early to their allotted time slots at Venue <br/>
            2) A delay of 5 minutes at the maximum will be tolerated. 	<br/>
            3) Participants must acknowledge and comply with the rules and regulations, official announcement and statements and decisions made by the admin/s. (decisions made by the admin is final).<br/>
            4) Systems will NOT be provided; Participants MUST bring their OWN Laptop and all required peripherals.<br/>
            5) Ethernet and Wi-Fi will be provided by us.<br/>
            6) Any damage to Lab property and our equipment i.e., Ethernet will result in a heavy penalty to the participant(s).<br/>
            7) In case of a fallout, the event coordinators and the external jury’s decision will be treated as the final call.<br/>
            8) In case of any bugs, we will Review the scope of the bug and take a decision accordingly. This happens only if the bug is immediately notified to the game admin.<br/>
            9) All Participants must be present at the venue. Remote play of any player is not allowed<br/>
            </p>
            <p className="rulebookHeading">
                GAME RULES
            </p>
            <p className="rulebookBody">
            The matches are going to be 1v1 format only.<br/>
The matches will be played in 2 Legs (Home and Away). The winner will be decided on aggregate score or in case of a draw over 2 legs (There is no AWAY GOAL RULE) , the game will proceed to extra time and further into penalties.<br/>
The final match will only be a SINGLE LEG and will be held on neutral grounds.<br/>
If both the participants chose the same teams, the winner of a coin toss will get to keep their team and the opponent has to proceed to choose a different team.<br/>
Camera settings - Default. <br/>
Legacy defending is strictly not allowed. <br/>
Players can choose to customize their controller settings and binds according to their preference.<br/>
The squads will be the latest downloaded squads (No custom Squads).<br/>
International squads are allowed but participants are not allowed to use the NATIONAL TEAM CALLUP option under settings.<br/>
You will be allowed to customize and choose your team in under 5 minutes.<br/>
Handball Settings : OFF<br/>
Game speed : Normal<br/>
Game difficulty will be set to world class for all the rounds.<br/>
Game length will be 6 minutes, each half.<br/>
A player cannot pause an ongoing game for any reason until the ball goes out of play. Violating this rule, will result in first warning and subsequently can lead to DISQUALIFICATION.<br/>
All the in-game sliders are kept to default value and will not be changed.<br/>
            </p>


            <p className="rulebookHeading">
            RULES of DISQUALIFICATION:

            </p>
            <p className="rulebookBody">
            1.Restart without consent.<br></br>
2.A player cannot pause a game without any reason until and unless the ball goes out.<br></br>
3.Creating any kind of nuisance in the labs.<br></br>
4.Toxicity and foul play is strictly prohibited during the tournament (A slight level of banter would be allowed).<br></br>

NOTE : 1. In case of any delay, the reformed time slots will be sent in the respective        Whatsapp Groups.
	             2. In case of any dilemma or confusion, the participants must inquire from their respective coordinators.
					 				

            </p>

        </motion.div>
      
    </>
  )
}
