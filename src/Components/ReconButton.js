import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./reconButton.css"

export default function ReconButton() {

    const navigate = useNavigate();

    const buttonHandler = ()=>
    {
        navigate("/Rulebook")
    }
    const buttonHandler2 = ()=>
    {
      navigate("/Registration")
    }
  return (
    <>
    <div className="reconButtons">
        <div onClick={buttonHandler} className="moreRecon">
            SOP
        </div>
        <div onClick={buttonHandler2} className="regProcess">
            REGISTRATION
        </div>
    </div>
    </>
  )
}
