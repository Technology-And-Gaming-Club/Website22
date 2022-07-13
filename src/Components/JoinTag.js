import "./joinTag.css"
import React from 'react'
import { useInView } from "react-intersection-observer";

export default function JoinTag() {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  }); 
  return (
    <div className={inView?"joinTag joinTag--zoom":"joinTag"} ref={ref}>
      <div className="box">
        <h4 className="joinTagText textA">
            YOU GOT WHAT IT TAKES?
        </h4>
        <h1 className="joinTagText textB">
            JOIN TAG
        </h1>
      </div>
    </div>
  )
}
