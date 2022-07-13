import "./footer.css"
import { HashLink } from 'react-router-hash-link';
import React from 'react'
import { scroller } from "react-scroll";
import {motion} from 'framer-motion';

export default function Footer() {
    const scroll=()=>
    {
        scroller.scrollTo("footer",{duration: 800, delay:0});
    }
  return (
    <div className="footerContainer">
    <div className="footer">
        <div className="footerLeft">
            <div className="footerLeftSubHeading">
                GOT ANY QUESTIONS?
            </div>
            <div className="footerLeftHeading">
                GET IN TOUCH
            </div>
            <div className="footerLeftText">
                You can always reach us through tag@vit.ac.in for all your questions, comments or general lovebombing. For press related info, read more here.
            </div>
        </div>
        <div className="footerRight">
            <div className="footerRightBlockA">
                <div className="footerRightHeading">
                    ADDRESS
                </div>
                <div className="footerRightText">
                    VIT UNIVERSITY <br/>
                    KATPADI <br/>
                    TAMIL-NADU <br/> 
                    632001
                </div>
            </div>
            <div className="footerRightBlockB">
                <div className="footerRightHeading">
                    FOLLOW US HERE
                </div>
                <div className="footerRightText">
                    <a href="#" target="_blank">
                        FACEBOOK
                    </a>
                    <a href="https://www.instagram.com/tagclub.vit/" target="_blank">
                        INSTAGRAM
                    </a>
                    <a href="https://www.youtube.com/user/TAGclub2012" target="_blank">
                        YOUTUBE
                    </a>
                    <a href="https://www.linkedin.com/company/tag-club-vit?original_referer=https%3A%2F%2Flinktree.tagclub.in%2F" target="_blank">
                        LINKEDIN
                    </a>
                </div>
            </div>
        </div>
        <div className="footerExtremeRight">
            Technology And Gaming Club 2022
        </div>
    </div>
    <div className="bottomButton">
    <motion.a onClick={scroll} className="goToBottom"> GET INTO TOUCH </motion.a>
    </div>
    </div>
        
  )
}
