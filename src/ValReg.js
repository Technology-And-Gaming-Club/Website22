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
            1. Map ban system will be used for choosing the map for the match. <br/>
2. If a player or team is unable to report in time for their match, the match will be postponed for another 5 minutes. Any further delay and the team will be given the choice to proceed as a short-manned team, or surrender. <br/>
3. A player is not allowed to play on a Riot ID other than that registered by the player/team captain. <br/>
4. Matches are decided randomly. No request to change the brackets will be entertained. <br/>
5. Request for change in time slots will not be entertained. <br/>
6. The finals will be best of 3. The remaining matches will follow the single-elimination format. <br/>
7. Use of cheats or glitches or any other unfair methods in the tournament will result in the immediate disqualification of that team. <br/>
8. Any kind of super dashes or jumps or hidden cypher cams that are outside the boundary of normal play and considered as bugs will lead to a disqualification. <br/>
9. A game score of 12-12 will result in the match going into overtime (difference of 2 to win). <br/>
10. A total of 2 time-outs of duration of 90 seconds each will be offered to each team during a match. A timeout is to be claimed only during the buy phase of a round. <br/>
11. Timeouts can be called from the settings menu of the game. <br/>
12. Misbehavior or verbal abuse with any of the admins will result in the immediate disqualification of that team. <br/>
13. While we do understand that playful banter between teams is part of the fun, please exercise restraint as to not go overboard. Hateful speech and verbal abuse will not be tolerated. <br/>
14. The Tournament coordinators will have the final say in all matters. <br/>
15. Agents/Maps released till the 1st of September 2022 will only be in play. <br/>
            </p>
        </motion.div>
      
    </>
  )
}
