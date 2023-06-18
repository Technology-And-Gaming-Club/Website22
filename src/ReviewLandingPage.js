import React from 'react'
import { useState } from 'react'
import "./reviews.css"
import { motion } from 'framer-motion';

export default function ReviewLandingPage(props) {

    const title = props.title;
  const newText = title.split('\n').map(str => <p>{str}</p>);
  return (
    <motion.div animate={{x:[-1000,0]}} >
      <div className="reviewHeading">
        <div className="reviewHeadingContent reviewHeadingLeft">
            <div className="reviewHeadingLeftTitle">
                {newText}
            </div>
            <div className="reviewHeadingLeftContent">
                {props.content}
            </div>
            <div className="reviewButtonContainer">
                <button className="reviewButton">
                    <strong>POST A REVIEW</strong>
                </button>
            </div>
        </div>
        <div className="reviewHeadingContent reviewHeadingRight">
            <div className="imageStack">
                <div className="stackImage image1">

                </div>
                <div className="stackImage image2">

                </div>
                <div className="stackImage image3">

                </div>
                <div className="stackImage image4">

                </div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}
