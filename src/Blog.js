import { React, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import BlogHero from "./BlogHero";
import { getAllReviews } from "./utils.js";
import AnimatedCursor from "react-animated-cursor";
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";

export default function Blog(){

    const [menu, setMenu] = useState(0);
    const [data, setData] = useState(null);

    const blogID = useParams().id;

    useEffect(() => {
    const fetch = async () => {
      getAllReviews().then((data) => {
      data.forEach((blog, index, array) => {
        console.log(blog.id, blogID, blog.id === blogID);
        if(blog.id === blogID) {
          setData(blog);
          console.log("should set")
        }
      })
    })};
    fetch();
    }, [])

    return(
        <motion.div animate={{y:[-1000,0]}}>
            <AnimatedCursor className="cursor" color="255,255,255"
                                                innerSize={8}
                                                outerSize={35}
                                                innerScale={1}
                                                outerScale={1.7}
                                                outerAlpha={0}
                                                outerStyle={{border: '3px solid #fff'}}/>
                <Navbar setMenu={setMenu}/>
                {data?<BlogHero title={data.heading} 
                          para1={data.section1}
                          para2={data.section2}
                          para3={data.section3} />:"Now Loading..."}
        </motion.div>

    )

}
