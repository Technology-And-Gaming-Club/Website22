import React from 'react'
import { useState } from 'react'
import "./codmReg.css";

import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';

export default function CODMReg() {
    const [menu,setMenu] = useState(0);
  return (
    <>
        <Navbar setMenu={setMenu}/>
        <motion.div animate={{y:[-1000,0]}} className="codmReg">
        <img src="Assets/Recon 1.png" className='landingLogo codmLanding' />
        <p className="landingHeading codmHeading ">
            CODM
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
            1. Map ban system will be used for choosing the map for the match.<br/>

2. It is essential for all players to bear a sporting and fair attitude for an orderly game. Breaches of this rule will lead to penalties.<br/>

3. Participants may not use obscene or offensive gestures or profanity in their tags, Participant handles, Team Branding, game chat, live play communications, lobby chat, shoulder content, interviews, or other public-facing communications of any kind.<br/>

4. Any form of cheating by any players will not be tolerated. All participants are prohibited from influencing or manipulating any Game Match with the intent that any aspect of the match is determined by anything other than the competitive merits.<br/>


5. Map pool: There will be total of 5 maps in the pool, namely: <br/>
<br/>
Crash <br/>
Crossfire <br/>
Backlot <br/>
Strike <br/>
Citystreets <br/>
<br/>
6. All players should record full POV demo’s for the duration of each map. <br/>

7. Failing to do so will result in disqualification. <br/>

8. If a player is caught using any of the banned items listed below, a warning will first be given, followed by disqualification if the player repeats the offence. This will result in an automatic win towards the opponent.<br/>

9. Banned Items:<br/>
<br/>
Guns<br/>
1. NA-45<br/>
2. Thumper<br/>
3. SVD<br/>
4. Crossbow<br/>
5. HS2126<br/>
6. Striker<br/>
7. R9<br/>
8. FHJ<br/>
9. SMRS<br/>
10. RPD<br/>
11. Holger<br/>
12. JAK-12<br/>
<br/>
Throwables<br/>
1. Trip Mine<br/>
2. Thermite<br/>
3. Molotov Cocktail<br/>
<br/>
Tactical Utility<br/>
1. Heartbeat Sensor<br/>
2. Gas Grenade<br/>
3. Flash Drone<br/>
4. Flash Bang<br/>
5. Concussion<br/>
<br/>
Perks<br/>
1. Persistence<br/>
2. Restock<br/>
3. Martydom<br/>
4. Tactician<br/>
5. Recon<br/>
6. Shrapnel<br/>
7. Tracker<br/>
8. Quick Fix<br/>
9. Hardline<br/>
<br/>
Weapon Perks & Attachments<br/>
1. Akimbo<br/>
2. Gas Grenade Bolt<br/>
3. Thermite Bolt<br/>
<br/>
Extra Info:<br/>
1. All Score Streaks, Operator Skills and Melee are banned.<br/>
2. Teams are restricted to 2 snipers/ marksmen only.<br/>
3. Teams are restricted to 1 shotgunner only.<br/>
4. Emotes are banned.<br/>
5. Nuke is allowed.<br/>
<br/>


Tournament format: <br/>

The tournament will be played on a BO3 format, with single elimination.<br/>
<br/>


Match format: <br/>

5v5 TDM<br/>

            </p>
        </motion.div>
</>
  )
}
