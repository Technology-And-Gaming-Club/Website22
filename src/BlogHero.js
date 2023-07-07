import React from 'react';
import './blog.css';
import { motion } from 'framer-motion';

export default function BlogHero(props){
    return (
        <div className='blog-container'>
            <motion.div animate={{x:[-1000,0]}}>
                <div className='blog-heading'>
                        {props.title}
                    </div>
                    <div className='top-container'>
                        <div className='left-container'>
                            <div className='blog-para para1'>
                                {props.para1}
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className='blog-img img1'>

                            </div>
                        </div>
                    </div>
            </motion.div>
            <div className='mid-container'>
                <div className='blog-para para2'>
                    { props.para2 }
                </div>
                <div className='blog-img img2'>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='blog-para para3'>
                    {props.para3}
                </div>
            </div>
        </div>
    );
}