import React from 'react'
import Navbar from './Components/Navbar'
import "./registration.css"
import { useState } from 'react'

export default function Registration() {
    const [menu,setMenu] = useState(0);
  return (
    <>
    <Navbar setMenu={setMenu}/>
        <div className="registrations">
            <h2 className="registrationsHeading">
                REGISTRATION PROCEDURE
            </h2>
            <p className="registrationsStep">
            1. Visit <a><span>https://events.vit.ac.in/events/gravitas2022/</span></a> for graVITas registration. <br/>
            </p>
            <img className="registrationsImage img1" src="img/Screenshot 2022-09-18 224708.jpg" alt="" />
            <img src="img/Screenshot 2022-09-18 232114.jpg" alt="" className="registrationsImage img2" />
            <p className="registrationsStep">
            2. Click on “REGISTER” to create graVITas account.
            </p>
            <img src="img/Screenshot 2022-09-18 232104.jpg" alt="" className="registrationsImage img3" />
            <p className="registrationsStep">
            3. Enter the necessary details.<br/><br/>
                   4. Log in to your email and verify your account by clicking on the link.
            </p>
            <img src="img/Screenshot 2022-09-18 224600.jpg" alt="" className="registrationsImage img4" />
            <p className="registrationsStep">
            5. Come back to graVITas registration website and sign in with your credentials.<br/><br/>
                    6. Look for the event name “RECON” and click on “Add to cart”.
            </p>
            <img src="img/Screenshot 2022-09-18 224357.jpg" alt="" className="registrationsImage img5" />
            <p className="registrationsStep">
            7. View your cart (TOP LEFT CORNER).<br/><br/>
                    8. Select number of team members (including yourself).
            </p>
            <img src="img/Screenshot 2022-09-18 224418.jpg" alt="" className="registrationsImage img6" />
            <p className="registrationStep">
            9. Accept Terms and Conditions.<br/><br/>
                  10. Proceed to Payment.
            </p>
            <img src="img/Screenshot 2022-09-18 224504.jpg" alt="" className="registrationsImage img7" />
            <p className="registrationsStep">
            11. Pay using the suitable payment method.
            </p>
            <img src="img/Screenshot 2022-09-18 224518.jpg" alt="" className="registrationsImage img8" />
            <p className="registrationsStep">
            12. A receipt will be sent to you.<br/><br/>
                    13. You must carry the receipt (Hardcopy or Softcopy) with you throughout the entire duration of the event.<br/><br/>
                    14. TAG Club members will contact you regarding further details of your registration (S2S and GAT).<br/><br/>
            </p>
        </div>
    </>
  )
}
