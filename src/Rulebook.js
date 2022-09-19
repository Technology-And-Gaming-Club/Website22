import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react';
import "./rulebook.css"
import { motion } from 'framer-motion';

export default function Rulebook() {
    const [menu,setMenu] = useState(0);
  return (
    <>
        <Navbar setMenu={setMenu}/>
        <motion.div animate={{y:[-1000,0]}} className="rulebook">
            <h1 className="rulebookHeading">
                GENERAL INSTRUCTIONS AND CODE OF CONDUCT
            </h1>
            <p className="rulebookBody">
            1.Dates: 30th Sept, 1st Oct, 2nd Oct 2022 <br/>
2. Timings: 10AM TO 6PM (All 3 days)<br/>
3. Venue: <br/>
4. Registration Fee - INR 100 per head per game/hackathon. <br/>
5. Participants must arrive 10 minutes prior to their allotted time slot at (S2S venue).<br/>
6. A maximum delay of 5 minutes will be tolerated. <br/>
7. The participants will be asked to move to their respective venues.<br/>
8. Participants must carry their registration receipts (hardcopy or softcopy) throughout the entire fest to get access into the respective venues. <br/>
9. A team may contain (1-5) members for Valorant, CSGO, CODM, Studio To Stage. However, if the participant opts to take part in FIFA 22, they must register solo. (1v1 format only for FIFA 22)<br/>
10. Any damage to or (theft of) lab properties or to our equipment will result in severe penalization. This includes: -<br/></p>
<p className="tab rulebookBody" >
        a.)LAN cables<br/>
        b.)Laptops & Power Adapters<br/>
        c.)Tables & Chairs<br/>
        d.)Controllers<br/>
        e.)Cables<br/>
        f.)Monitor & CPUs<br/>
        g.)Power sockets<br/>
        h.)Projector<br/>
        i.)Smart Board<br/>
        j.)White Board<br/>
        k.)Stationary<br/>
        l.)Routers<br/>
</p>
<p className="rulebookBody">
11. Participants MUST take full responsibility for their own belongings. In case of any damage, the organizing committee will not be responsible. <br/>
12. Participants must be respectful towards the organizing committee and fellow participants. Use of violence/foul language/hate speech will not be tolerated. This can lead to direct disqualification from the tournament.<br/>
13. Any foul play/usage of any unethical methods (Eg: Cheats) will lead to direct disqualification from the tournament.<br/>
14. Possible punishments: -<br/>
</p>
<p className="tab rulebookBody">
            a.)Default Loss for one game.<br/>
             b.)Default Loss for the whole match.<br/>
             c.)Temporary or permanent ban from the competition.<br/>
             d.)Ban from other events.<br/>
</p>
<p className="rulebookBody">
15. Participants shall not use language that is obscene, foul, vulgar, insulting, or threatening towards their opposition or organizing committee. There must be proper behavior and a level of sportsmanship.  <br/>
16. In case of any delay, the reformed time slots will be sent in the respective whatsapp groups.<br/>
17. In case of any dilemma or confusion, the participants must inquire from their respective coordinators.<br/>
18. Registered team members cannot be replaced without prior notice. (It will be permitted only in case of emergencies).<br/>
19. For internet connectivity, LAN cables will be provided for Valorant, CSGO, Studio To Stage. Extra routers will be made available for CODM.<br/>
20. For further enquiry about games/hackathon, refer to the respective game rulebooks.<br/>
21.In case of any dispute, the admin’s word will be the final verdict. <br/>
22. Semi finals and Finals will be streamed on TAG Club’s official YouTube Channel.<br/>
23. For further details regarding the event, refer to graVITas website and DM TAG Club on Instagram (@tagclub.vit)<br/>
</p>    

        </motion.div>
      
    </>
  )
}
