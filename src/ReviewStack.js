import React from 'react'
import "./reviews.css"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import StackElement from './StackElement'

export default function ReviewStack() {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <motion.div animate={{y:[-1000,0]}}>
        <div className="stack">
            <StackElement name={"GOAT SIMULATOR"} content={"Aquafina sdgh  rsoidngf sodgfoasfna asfosndognaonf dsof sd a asf sdf sd g   sdg sdg   sgi sdg ds ig sd igdfgdfgdfg sdgsdfgs fsdgvouwdfojndsgvsndn"} image={"./Assets/55.png"}/>
            <StackElement name={"MARIO KART"} content={"Aquafina sdgh  rsoidngf sodgfoasfna asfosndognaonf dsof sd a asf sdf sd g   sdg sdg   sgi sdg ds ig sd igdfgdfgdfg sdgsdfgs fsdgvouwdfojndsgvsndn"} image={"./Assets/44.png"}/>
            <StackElement name={"COCK AND BALLS TORTURE SIMULATOR"} content={"Aquafina sdgh  rsoidngf sodgfoasfna asfosndognaonf dsof sd a asf sdf sd g   sdg sdg   sgi sdg ds ig sd igdfgdfgdfg sdgsdfgs fsdgvouwdfojndsgvsndn"} image={"./Assets/44.png"}/>
        </div>      
    </motion.div>
  )
}
