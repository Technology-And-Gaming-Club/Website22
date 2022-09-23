import React from 'react'
import './ourTeamLeft.css';

export default function OurTeamRight(props) {
  return (
    <>
      <div data-aos="fade-left" data-aos-duration="1500" className="teamContainer">
        <div className="leftPan">
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
        <div className="rightPan">
            <img src={props.image} className='ourTeamImg'/>
        </div>
      </div>
    </>
  )
}
