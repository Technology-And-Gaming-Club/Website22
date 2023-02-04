import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link, to } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(0);
  const menuHandler = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    props.setMenu(clicked);
  }, [clicked]);

  const buttonHandler = () => {
    navigate("/EventVGL");
  };

  return (
    <>
      <motion.nav transition={{ duration: 0.25 }} className="mainNav">
        <motion.div
          animate={clicked == 1 ? { x: [0, -500, 0] } : { x: [0, -500, 10] }}
          className="lines"
        >
          <Link onClick={menuHandler} to={clicked == 1 ? "/" : "/Menu"}>
            <div
              style={
                clicked == 1
                  ? {
                      transform: "rotate(45deg)",
                      marginBottom: "0px",
                      marginTop: "0px",
                      transition: "1.2s",
                    }
                  : {
                      marginBottom: "10px",
                      marginTop: "10px",
                      transition: "1.2s",
                    }
              }
              className="menuBar"
            ></div>
            <div
              style={
                clicked == 1
                  ? {
                      transform: "rotate(-45deg)",
                      marginBottom: "0px",
                      marginTop: "0px",
                      transition: "1.2s",
                    }
                  : {
                      marginBottom: "10px",
                      marginTop: "10px",
                      transition: "1.2s",
                    }
              }
              className="menuBar"
            ></div>
          </Link>
        </motion.div>

        {/* <motion.div animate={clicked==1?{x:[-1000,0]}:{x:[0,-1000]}} className="lines">
            <Link onClick={menuHandler}  to="/" className='cross'>
                <img src='Assets/Union.svg'/>
            </Link>
        </motion.div> */}

        <motion.div
          animate={clicked == 1 ? { y: [0, -1000] } : { y: [-1000, 0] }}
          className="tagLogo"
        >
          <img src="Assets/tagLogo.svg" className="imgTag" />
        </motion.div>
        {/* <motion.div animate={clicked==1?{y:[-1000,0]}:{y:[0 ,-1000]}} initial="false" className="tagLogo">
            <img src="Assets/tagLogo2.svg"/>
        </motion.div> */}
        <motion.div
          animate={clicked == 1 ? { x: [0, 500] } : { x: [500, 0] }}
          className="vgl"
        >
          <button onClick={buttonHandler} className="button vglButton">
            <strong>VGL</strong>
          </button>
        </motion.div>
      </motion.nav>
    </>
  );
}
