import React from 'react'
import { motion } from 'framer-motion';
import LoginComponent from './Components/LoginComponent'
import AnimatedCursor from 'react-animated-cursor';

export default function Login() {
    return (
    <motion.div animate={{y:[-1000,0]}}>
        <AnimatedCursor className="cursor" color="255,255,255"
                                          innerSize={8}
                                          outerSize={35}
                                          innerScale={1}
                                          outerScale={1.7}
                                          outerAlpha={0}
                                          outerStyle={{border: '3px solid #fff'}}/>
        <LoginComponent />
    </motion.div>
    )
}