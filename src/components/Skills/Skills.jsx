import React, { useEffect, useRef } from 'react';
import "./Skills.css"
import { motion, useAnimation, useInView } from 'framer-motion';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import javaIcon from "../../../public/Skills-icons/java.svg"
import pythonIcon from "../../../public/Skills-icons/py.svg"
import react from "../../../public/Skills-icons/react.svg"
import html from "../../../public/Skills-icons/html.svg"
import css from "../../../public/Skills-icons/css.svg"
import js from "../../../public/Skills-icons/js.svg"
import sass from "../../../public/Skills-icons/sass.svg"
import redux from "../../../public/Skills-icons/redux.svg"
import git from "../../../public/Skills-icons/git.svg"

const Skills = () => {
    const phrase1 = "My Skills".split("")

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

    const initial={opacity:0}

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2,{
        margin: "-1px 0px -1px 0px",
        once: true
    })

    const animation = useAnimation();

	useEffect(() => {
		if (isInView2) {
			animation.start({
				opacity: 1,
			});
		}
	}, [isInView2, animation]);

    const arrowVariants = {
        y:[0,-5,0],
        transition:{
          repeat:Infinity
        }
    }

    return (
        <div className='Skills' id='skills' ref={ref}>
            <span className='Skills_bg'>Technologies</span>
            <div className='Skills_title'>
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
                <span className='Tag' style={{display:"block"}}>{"<h2>"}</span>
                <span className='Tag'>{"<p>"}</span>
                <p>Some technologies I work with.</p>
                <span className='Tag'>{"<p>"}</span>
            </div>
             <div className='Skills_container' >
                <div className='Skills_grid1'>
                    <motion.div
                        initial={initial}
                        transition={{ delay: .8, duration: .6}}
                        animate={animation}
                        className='Icon_container redux'><img src={redux} alt="" />
                    </motion.div>
                </div>
                <div className='Skills_grid2'>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1, duration: .6 }}
                        animate={animation}
                        className='Icon_container html'><img src={html} alt="" />
                    </motion.div>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1, duration: .6 }}
                        animate={animation}
                        className='Icon_container git'><img src={git} alt="" />
                    </motion.div>  
                </div>

                <div className='Skills_grid3'>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1.2, duration: .6 }}
                        animate={animation}
                        className='Icon_container js'><img src={js} alt="" />
                    </motion.div>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1.2, duration: .6 }}
                        animate={animation}
                        className='Icon_container react' ref={ref2}><img src={react} alt=""/>
                    </motion.div>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1.2, duration: .6 }}
                        animate={animation}
                        className='Icon_container sass'><img src={sass} alt="" />
                    </motion.div>
                </div>

                <div className='Skills_grid4'>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1.4, duration: .6 }}
                        animate={animation}
                        className='Icon_container css'><img src={css} alt="" />
                    </motion.div>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1.4, duration: .6 }}
                        animate={animation}
                        className='Icon_container java'><img src={javaIcon} alt="" />
                    </motion.div>
                </div>
                <div className='Skills_grid5'>
                    <motion.div
                        initial={initial}
                        transition={{ delay: 1.6, duration: .6 }}
                        animate={animation}
                        className='Icon_container py'><img src={pythonIcon} alt=""/>
                    </motion.div>
                </div>
            </div>
            <motion.div
                animate={isInView ? arrowVariants : ""}
                className='Arrow_skills' ref={ref}>
                <span>scroll</span>
                <HiOutlineArrowNarrowDown/>
            </motion.div>
        </div>
    );
};

export default Skills;