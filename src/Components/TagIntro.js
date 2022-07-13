import React from 'react'
import "./tagIntro.css"

export default function TagIntro() {
  return (
    <motion.div animate={{y:[-1000,0]}} exit={{y:[0,-1000]}} className='tagIntro'>
        <img src="Assets/tagLogo.svg" className="tagIntroLogo" />
    </motion.div>
  )
}
