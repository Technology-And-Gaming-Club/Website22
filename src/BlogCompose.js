import { React, useState } from "react";
import Navbar from "./Components/Navbar";
import BlogForm from "./BlogForm";
import AnimatedCursor from "react-animated-cursor";
import { motion } from 'framer-motion';

export default function BlogCompose(){

    const [menu, setMenu] = useState(0);
    var randomText1 = "Pretium fusce id velit ut tortor pretium viverra. Purus semper eget duis at tellus at urna. Cras ornare arcu dui vivamus arcu felis bibendum. Ultrices sagittis orci a scelerisque purus semper eget duis. Montes nascetur ridiculus mus mauris vitae. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Aliquet risus feugiat in ante metus dictum at. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Nisl vel pretium lectus quam. Nunc sed blandit libero volutpat sed cras ornareNunc sed blandit libero volutpat sed cras ornare. volutpat sed cras ornareNunc sed blandit libero volutpat asfdf."
    var randomText2 = "Pretium fusce id velit ut tortor pretium viverra. Purus semper eget duis at tellus at urna. Cras ornare arcu dui vivamus arcu felis bibendum. Ultrices sagittis orci a scelerisque purus semper eget duis. Montes nascetur ridiculus mus mauris vitae. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Aliquet risus feugiat in ante metus dictum at. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Nisl vel pretium lectus quam. Nunc sed blandit libero volutpat sed cras ornareNunc sed blandit libero volutpat sed cras ornare. volutpat sed cras ornareNunc sed blandit libero volutpat asfdf. tpat sed cras ornareNunc sed blandit libero volutpat sed cras ornare. volutpat sed cras ornareNunc sed blandit libero volutpat asfdf.tpat sed cras ornareNunc sed blandit libero volutpat sed cras ornare. volutpat sed cras ornareNunc sed blandit libero volutpat asfdf.tpat sed cras ornareNunc sed blandit libero volutpat sed cras ornare. volutpat sed cras ornareNunc sed blandit libero volutpat asfdf."

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
            <BlogForm />


                {/* <BlogHero title='Title Text Title Text Title Text Title Text Title Text Title Text' 
                          para1={randomText1}
                          para2={randomText2}
                          para3={randomText2} /> */}
        </motion.div>

    )

}