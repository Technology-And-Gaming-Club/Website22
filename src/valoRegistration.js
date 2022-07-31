import React from 'react'
import Navbar from './Components/Navbar';
import { useState } from 'react';
import AnimatedRoutes from './AnimatedRoutes';
import FrontPage from './Components/FrontPage';
//import valo from "./Assets/valo.png";
import './valoRegistration.css';
import './valo.png';
import { useInView } from 'react-intersection-observer';





export default function ValoRegistration() {
    const [menu,setMenu] = useState(0);
    const { ref, inView} = useInView({
      /* Optional options */
      threshold: 0,
      
      


    });

    const [visible, setVisible]=useState(false);

    
    

  return (
    
    <div>

      
        
        <div className='navibar'>
          <Navbar setMenu={setMenu}/>
          <AnimatedRoutes></AnimatedRoutes>
        </div>

        {/* <div className={inView?'valoTextContainer valoTextContainer--zoom':'valoTextContainer'} ref={ref}> */}

         <div class="valoTextContiner">

        

      <div class="container">
			  <img id="valo" src="./Assets/valo.png"/>
			  <div class="divos">
				    <div>VALORANT</div>
            
			  </div>
        
        
			  {/* <img id="icon" src="./Assets/icon.png"/> */}
        
		  </div>

      

      <br></br>
      <br></br>
      <br></br>

      


      

      <div class="bigdiv">
      <br></br>
        <br/>
        <div class="registrationTypeSection">
        <form>
        <div style={{margin: "20px 0"}}>
            <label style={{padding: "0 10px 0 0"}}>
              <span id='registrationType'>Registration Type</span><br/><br/>
              <input type="radio" name="players" style={{margin: "0 2px 0 0"}} onClick={ ()=>setVisible(false)}/>
              Solo Entry
            </label>
          <label >
              <input type="radio" name="players" style={{margin: "0 2px 0 0"}} onClick={ ()=>setVisible(true)}/>
              Team Entry
            </label>
          </div>
        </form>
        </div>
      
			<div>
			<br/>
      <div class="player1">
      <ul id="player">
       <li id='number'>
       <span id='playerNum'>1</span>
       </li>
       <li>
       <div class="textBoxes"> 
        
        <div>
          <br/>

          Name:<br/><br/>
          <input type="text" value="" placeholder="Your Name"/>
        </div>
        
        <div>
        <br/>
          Registration no.:<br/><br/>
          <input type="text" value="" placeholder="Your Registration no. ..."/>
        </div>
        <div>
        <br/>
          Contact no.:<br/><br/>
          <input type="text" value="" placeholder="Your Contact no. ..."/>
        </div>
        <div>
        <br/>
          VIT Email ID:<br/><br/>
          <input type="text" value="" placeholder="Your VIT Email ID ..."/>
        </div>
        <div>
        <br/>
          Discord ID:<br/><br/>
          <input type="text" value="" placeholder="Your Discord ID ..."/>
        </div>
        <div>
        <br/>
          Riot ID:<br/><br/>
          <input type="text" value="" placeholder="Your Riot ID ..."/>
        </div>

        </div>
        </li>
        </ul>

        </div>

        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {visible &&

        <div class="teamReg">

        <div class="player2">

        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <ul id="player">
       <li id='number'>
       <span id='playerNum'>2</span>
       </li>
       <li>
       <div class="textBoxes"> 
        
        <div>
          <br/>
          Name:<br/><br/>
          <input type="text" value="" placeholder="Your Name"/>
        </div>
        
        <div>
        <br/>
          Registration no.:<br/><br/>
          <input type="text" value="" placeholder="Your Registration no. ..."/>
        </div>
        <div>
        <br/>
          Contact no.:<br/><br/>
          <input type="text" value="" placeholder="Your Contact no. ..."/>
        </div>
        <div>
        <br/>
          VIT Email ID:<br/><br/>
          <input type="text" value="" placeholder="Your VIT Email ID ..."/>
        </div>
        <div>
        <br/>
          Discord ID:<br/><br/>
          <input type="text" value="" placeholder="Your Discord ID ..."/>
        </div>
        <div>
        <br/>
          Riot ID:<br/><br/>
          <input type="text" value="" placeholder="Your Riot ID ..."/>
        </div>

        
      

        </div>
        </li>
        </ul>
        </div>

        <div class="player3">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<ul id="player">
<li id='number'>
<span id='playerNum'>3</span>
</li>
<li>
<div class="textBoxes"> 

<div>
  <br/>
  Name:<br/><br/>
  <input type="text" value="" placeholder="Your Name"/>
</div>

<div>
<br/>
  Registration no.:<br/><br/>
  <input type="text" value="" placeholder="Your Registration no. ..."/>
</div>
<div>
<br/>
  Contact no.:<br/><br/>
  <input type="text" value="" placeholder="Your Contact no. ..."/>
</div>
<div>
<br/>
  VIT Email ID:<br/><br/>
  <input type="text" value="" placeholder="Your VIT Email ID ..."/>
</div>
<div>
<br/>
  Discord ID:<br/><br/>
  <input type="text" value="" placeholder="Your Discord ID ..."/>
</div>
<div>
<br/>
  Riot ID:<br/><br/>
  <input type="text" value="" placeholder="Your Riot ID ..."/>
</div>




</div>
</li>
</ul>
</div>

<div class="player4">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<ul id="player">
<li id='number'>
<span id='playerNum'>4</span>
</li>
<li>
<div class="textBoxes"> 

<div>
  <br/>
  Name:<br/><br/>
  <input type="text" value="" placeholder="Your Name"/>
</div>

<div>
<br/>
  Registration no.:<br/><br/>
  <input type="text" value="" placeholder="Your Registration no. ..."/>
</div>
<div>
<br/>
  Contact no.:<br/><br/>
  <input type="text" value="" placeholder="Your Contact no. ..."/>
</div>
<div>
<br/>
  VIT Email ID:<br/><br/>
  <input type="text" value="" placeholder="Your VIT Email ID ..."/>
</div>
<div>
<br/>
  Discord ID:<br/><br/>
  <input type="text" value="" placeholder="Your Discord ID ..."/>
</div>
<div>
<br/>
  Riot ID:<br/><br/>
  <input type="text" value="" placeholder="Your Riot ID ..."/>
</div>




</div>
</li>
</ul>
</div>

<div class="player5">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<ul id="player">
<li id='number'>
<span id='playerNum'>5</span>
</li>
<li>
<div class="textBoxes"> 

<div>
  <br/>
  Name:<br/><br/>
  <input type="text" value="" placeholder="Your Name"/>
</div>

<div>
<br/>
  Registration no.:<br/><br/>
  <input type="text" value="" placeholder="Your Registration no. ..."/>
</div>
<div>
<br/>
  Contact no.:<br/><br/>
  <input type="text" value="" placeholder="Your Contact no. ..."/>
</div>
<div>
<br/>
  VIT Email ID:<br/><br/>
  <input type="text" value="" placeholder="Your VIT Email ID ..."/>
</div>
<div>
<br/>
  Discord ID:<br/><br/>
  <input type="text" value="" placeholder="Your Discord ID ..."/>
</div>
<div>
<br/>
  Riot ID:<br/><br/>
  <input type="text" value="" placeholder="Your Riot ID ..."/>
</div>




</div>
</li>
</ul>
</div>

<br/>
<br/>
<br/>


        </div>
}

        </div>
		 </div> 

    </div>

    </div>

    
    
    
    
    
  )
}
