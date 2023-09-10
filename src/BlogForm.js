import { React, useState } from "react";
import './blog.css';
import './blogCompose.css'
import { motion } from 'framer-motion';

export default function BlogForm() {

    const[inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs( (prevVals) => {
            return {...prevVals, [name]: value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="blog-container">
            <form onSubmit={handleSubmit}>
                <motion.div animate={{ x: [-1000, 0] }}>
                    <div className="blog-heading">
                        <textarea 
                            placeholder="Blog Title ..." 
                            rows={2} 
                            name="title" 
                            autoComplete="off" 
                            value={inputs.title}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="top-container">
                        <div className="left-container">
                            <textarea 
                                placeholder="Paragraph 1 ..." 
                                rows={12} 
                                name="para1" 
                                autoComplete="off" 
                                value={inputs.para1}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                        <div className="right-container ">
                            <div className="blog-img img1">
                                <input className="img-input" type="file" name="img1"></input>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="mid-container">
                    <textarea 
                        placeholder="Paragraph 2 ..." 
                        rows={10} 
                        name="para2" 
                        autoComplete="off" 
                        value={inputs.para2}
                        onChange={handleChange}
                    >
                    </textarea>
                    <div className="blog-img img2">
                        <input className="img-input" type="file" name="img1"></input>
                    </div>
                </div>
                <div className="bottom-container">
                    <textarea 
                        placeholder="Paragraph 3 ..." 
                        rows={8} 
                        name="para3" 
                        autoComplete="off" 
                        value={inputs.para3}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <input type="submit" name="submit"></input>
            </form>
        </div>
    )


}