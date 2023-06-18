import React from 'react'
import "./reviews.css"
import { useInView } from 'react-intersection-observer'

export default function StackElement(props) {
    const { ref, inView} = useInView({
        /* Optional options */
        threshold: 0,
      });
  return (
    <>
        <div className={inView?'elementContainer elementContainer--zoom':'elementContainer'} ref={ref}>
            <div className="stackImage">
                <img src={props.image}/>
            </div>
            <div className="stackMidContent">
                <div className="stackMidContentHeading">
                    {props.name}
                </div>
                <div className="stackMidContentDesc">
                    {props.content}
                </div>
            </div>
            <div className="reviewButtonContainer">
                <button className="reviewButton">
                    <strong>READ MORE</strong>
                </button>
            </div>
        </div>      
    </>
  )
}
