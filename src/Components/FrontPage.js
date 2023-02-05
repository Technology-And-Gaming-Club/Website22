import React from 'react'
import "./frontPage.css"
import { useInView } from 'react-intersection-observer';

export default function FrontPage(props) {
    const { ref, inView} = useInView({
        /* Optional options */
        threshold: 0,
      });
  return (
    <div className={inView?'frontPageContainer frontPageContainer--zoom':'frontPageContainer'} ref={ref}>
        <div className="frontPage">
            {/* <div className="frontImageLeft">

            </div> */}
            <div className="frontPageMainText">
                <div className="frontText1">
                    {props.text1}
                </div>
                <div className="frontHeading">
                    {props.heading}
                </div>
                <div className="frontText2">
                    {props.text2}
                </div>
            </div>
        </div>
    </div>
  )
}
