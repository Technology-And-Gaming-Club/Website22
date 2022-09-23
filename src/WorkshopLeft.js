import React from 'react'
import './ourTeamLeft.css';

export default function OurTeamLeft(props) {
  return (
    <>
      <div data-aos="fade-right" data-aos-duration="1500" className="teamContainer">
        <div className="leftPan">
            <img src={props.image} className='ourTeamImg'/>
        </div>
        <div className="rightPan">
            <div className="rightPanCont">
                <div className="rightPanName">
                    {props.name}
                </div>
                <div className="rightPanRole">
                    {props.role}
                </div>
                <div className="rightPanBody">
                    {props.body}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
