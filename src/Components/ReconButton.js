import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./reconButton.css"

export default function ReconButton() {

    const navigate = useNavigate();

    const buttonHandler = ()=>
    {
        navigate("/Rulebook")
    }
  return (
    <>
        <div onClick={buttonHandler} className="moreRecon">
            SOP
        </div>
    </>
  )
}
