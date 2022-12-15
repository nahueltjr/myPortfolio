import React, { useRef } from 'react';
import "./About.css"
import { motion, useInView } from 'framer-motion';
import avatar from "../../../src/assets/Avatar/avatar2.png"

const About = () => {
    const phrase1 = "About Me".split("")
  
    const spanVariants = {
        visible:{scaleY:1},
        hover:{scaleY:[1,0.8,0.7,1.2,0.9,1.2,1,1.1,1],
        scaleX:[1,1.2,1.3,0.8,1.1,0.8,1,0.9,1],
        }
    }
    const list = {
        visible:{
        opacity:1,
        transition:{
            when:"beforeChildren",
            staggerChildren:0.1,
        }
        },
        hidden: {
        transition: {
            when: "afterChildren",
        }
        }
    }
    const item = {
        visible:{
        opacity:1,
        y: [-1,-1.9,-2.7,1],
        scaleY:[1,1.3,0.8,1]
        },
        hidden: {
        opacity:0
    }

    }

    const ref = useRef(null)
    const isInView = useInView(ref,{
        margin: "-1px 0px -1px 0px",
        once: true
    })
    
   const variantsDescription = {
        show:{
            opacity:1,
            x:0,
            transition:{
                delay:0.8,
                duration:0.8
            }
        }
   }
    return (
        <section className='About' id='about' ref={ref}>
            <div className='About_title'>
                <span className='Tag'>{"<h2>"}</span>
                <motion.h2 variants={list} initial="hidden" animate={isInView?"visible":""}>
                    {
                    phrase1.map((letter,index)=>(
                        <motion.span variants={item} key={index}>
                        <motion.span
                        variants={spanVariants}
                        initial="visible"
                        whileHover="hover"
                        transition={{duration:.9,times:[1,1]}}
                        >{letter === " " ? "\u00A0": letter}</motion.span>
                        </motion.span>
                    ))
                    }
                </motion.h2>
                <span className='Tag'>{"<h2>"}</span>
            </div>
            <div className='About_description'>
                <motion.div
                variants={variantsDescription}
                initial={{opacity:0, x:-300}}
                animate={isInView?"show":"hide"}
                className='About_text'>
                    <span className='Tag'>{"<p>"}</span>
                    <p>
                        Hello! my name is Nahuel, I'm a web developer with a passion for frontend development. I'm currently studying Systems Engineering at Universidad Tecnologica Nacional, ARG. <br />
                        I'm a graduate from a fullstack bootcamp where I acquired frontend skills, more specifically in React.js technology. <br />
                        In building JavaScript applications, I'm equipped with just the right tools, I can create components with maximum performance and scalability. <br />
                        Attention to detail and problem solving are my priorities.
                    </p>
                    <span className='Tag'>{"<p>"}</span>
                </motion.div>
                <motion.div
                variants={variantsDescription}
                initial={{opacity:0, x:-100}}
                animate={isInView?"show":"hide"}
                className='About_avatar'>
                    <span className='About_wrapper'>
                       <img src={avatar} alt="avatar" />
                    </span>
                </motion.div>
            </div>
            <div className='About_footer'>
                <div className='About_footer_content'>
                    <div className='About_footer_icon dev'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <span>Web Development</span> 
                    <p>HTML/CSS, JavaScript Animation, React, Responsive Website.</p>  
                </div>
                <div className='About_footer_content'>
                    <div className='About_footer_icon ux'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <span>Responsive UI Design</span>
                    <p>Develop and implement responsive and aesthetically interfaces for websites and apps that adapt to any type of device or browser.</p>
                </div>
                <div className='About_footer_content'>
                    <div className='About_footer_icon mt'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg> 
                    </div>
                    <span>Manual Testing</span>
                    <p>Based on ISTQB glosary.</p>
                </div>
            </div>
        </section>
    );
};

export default About;