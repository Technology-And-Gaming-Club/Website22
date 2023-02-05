import React from 'react'
import './ourTeamLeft.css';

export default function OurTeamLeft(props) {
  return (
    <>
      <div data-aos="fade-right" data-aos-duration="1500" className="teamContainer">
        <div className="leftPan">
            <img src={props.image} className='ourTeamImg'/>
        </div>
        <div className="leftPan">
            <div className="leftPanCont">
                <div className="leftPanName">
                    {props.name}
                </div>
                <div className="leftPanRole">
                    {props.role}
                </div>
                <div className="leftPanBody">
                    {props.body}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
