import React from "react";
import "./Menu.css";
import { motion } from "framer-motion";
import NavbarOpen from "./NavOpen.jsx";
import { useState } from "react";
import { Link, to } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Menu(props) {
  const [menu, setMenu] = useState(1);
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ y: [-1000, 0], opacity: "1" }}
      exit={{ y: [0, 1000] }}
      className="menuBody"
    >
      <NavbarOpen setMenu={setMenu} />

      <motion.div className="menuContainer">
        <div className="textBox">
          <motion.div
            animate={{ x: [-2800, 0] }}
            exit={{ x: [0, -2800] }}
            transition={{ duration: 1 }}
            className="text"
          >
            <Link to="/AppHome" className="navLink">
              ABOUT
            </Link>
          </motion.div>
          <motion.div
            animate={{ x: [-2700, 0] }}
            exit={{ x: [0, -2700] }}
            transition={{ duration: 1 }}
            className="text"
          >
            EVENTS
          </motion.div>
          <motion.div
            animate={{ x: [-2600, 0] }}
            exit={{ x: [0, -2600] }}
            transition={{ duration: 1 }}
            className="text"
          >
            <Link to="/Workshop" className="navLink">
            WORKSHOPS</Link>
          </motion.div>
          <motion.div
            animate={{ x: [-2500, 0] }}
            exit={{ x: [0, -2500] }}
            transition={{ duration: 1 }}
            className="text"
          >
            <Link to="/OurTeam" className="navLink">
              OUR TEAM
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ x: [1000, 0] }}
          transition={{ duration: 1.5 }}
          className="banner"
        >
          <img src="Assets/aboutImage.png"></img>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
