import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar';
import { motion } from 'framer-motion';
import "./csgoReg.css"

export default function CSGOReg() {
    const [menu,setMenu] = useState(0);
  return (
    <>
        <Navbar setMenu={setMenu}/>
        <motion.div animate={{y:[-1000,0]}} className="csgoReg">
        <img src="Assets/Recon 1.png" className='landingLogo csgoLanding' />
        <p className="landingHeading csgoHeading">
            CSGO
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
            1.     All participants must register on graVITas website.<br/>
2. 	The decision taken by the game admins/coordinators will be the final.<br/>
3. 	The Teams must reach the venue at least 5 minutes prior to their scheduled timing.<br/>
4. 	The map ban and toss will be done on mapban.gg and wheelofnames respectively.<br/>
5. 	The map pool includes the current ESL maps (Ancient, Dust 2, Inferno, Mirage, Overpass, Vertigo, Nuke).<br/>
6. 	The brackets will be generated using challonge.com and will be given to the participants one day prior to the event.<br/>
7. 	At the start of the tournament, you will receive an automatic invitation or Ip address will be provided to the match lobby. If all players do not enter the lobby in 15 minutes (problems with the client updates, or any other technical issues are not acceptable and players are responsible to ready up for every match in time), the team will be given a choice to play a man down or forfeit the match.<br/>
8. 	Each team is allowed to pause the game (must type !pause in chat) not more than two times and every time up to three minutes. After a team’s pause limit ends, the match continues regardless of whether the problem is fixed. Technical pauses<br/>
10.  Players may receive technical defeats for exploiting bugs. There must be solid evidence indicating a player’s exploitation of a bug in order for them to be penalized. Verbal accusations are not good enough.<br/>
11.  Unfair play is defined as using scripts or programs that hack the game or give an advantage over another. The team will receive disqualification if any player is found cheating or using Unfair play means.<br/>
12.  It is forbidden to change the value of the console command net_graph (the default value is 0, a value of 1 is allowed).<br/>
13.  The cl_bobcycle console command can only have a value of 0.98<br/>
14.  The mat_hdr_level console command is not allowed.<br/>
15.  Changing the value of weapon_debug_spread_show command is prohibited (the default value is 0).<br/>
16.  Weapon_recoil_model command is not allowed.<br/>
17.  It is forbidden to be very toxic to other team members and participants and no level of toxicity will be tolerated towards the game admin.<br/>
18.  Should a player/team leave a match while it is being played even after a tactical pause, the judge can consider that act withdrawal from competition which results in a technical defeat.<br/>
19.  In case a match at any round of a tournament ends and we come to the conclusion that for some reason there has been a technical problem from our side (game server, web service, website, etc.) with that match, the chief judge can ask both parties to replay the match. Should one of the parties refuse to play again, they would face a technical defeat<br/>
20.  Ensure your account is not VAC banned.<br/>
21.  Use of any character cosmetics (any player model other than default isn’t allowed).<br/>
22.  The given equipment must not be damaged or you’ll be charged for it.<br/>
23.  Technical pause will be given if there’s any issues from our side. <br/>

            </p>
        </motion.div>
      
    </>
  )
}
