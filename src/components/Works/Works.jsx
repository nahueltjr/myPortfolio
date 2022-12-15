import React, { useRef } from 'react';
import "./Works.css"
import { motion, useInView } from 'framer-motion';
import Ecom1 from "../../../public/Projects-imgs/Ecommerce1.png"
import Poke from "../../../public/Projects-imgs/Pokedex.png"
import Rick from "../../../public/Projects-imgs/Rick.png"
import Weather from "../../../public/Projects-imgs/Weather.png"
import Crud from "../../../public/Projects-imgs/Crud.png"

const Works = () => {

    const phrase1 = "My Latest Projects".split("")
  
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
        once: true
    })

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2,{
        once:true
    })
    const ref3 = useRef(null)
    const isInView3 = useInView(ref3,{
        once:true
    })
    const ref4 = useRef(null)
    const isInView4 = useInView(ref4,{
        once:true
    })
    const ref5 = useRef(null)
    const isInView5 = useInView(ref5,{
        once:true
    })
    const ref6 = useRef(null)
    const isInView6 = useInView(ref6,{
        once:true
    })

    const worksVariants = {
        show:{
            opacity:1,
            y:0,
            transition:{
                delay:0.2,
                duration:0.6
            }
        }
   }

    return (
        <section className='Works' id='works'>
                <div className='Works_title'>
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
                    <span className='Tag' ref={ref}>{"<h2>"}</span>
                </div>
                <div className='Works_container'>
                    <motion.div
                    variants={worksVariants}
                    initial={{opacity:0, y:50}}
                    animate={isInView2?"show":"hide"}
                    className='Works_card'>
                        <div className='Works_imgs'>
                           <img src={Ecom1} alt=""/>
                            <motion.span whileHover={{scale:1.1}} className='Works_wrapper'>
                                <a href="https://candid-sherbet-7ff173.netlify.app/" target="blank_">View Project</a>
                            </motion.span> 
                        </div>
                        <div className='Works_imgs_desc'>
                            <span className='Tag'>{"<h4>"}</span>
                            <h4>Ecommerce</h4>
                            <span className='Tag' style={{display:"block"}}>{"<h4>"}</span>
                            <span className='Tag'>{"<p>"}</span>
                            <p ref={ref2}>An app that displays products and their details from an API. <br /> To access the cart and add, remove or "buy" products, you must log in.</p>
                            <span className='Tag'>{"<p>"}</span>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Redux
                                </li>
                                <li>
                                    React-Router
                                </li>
                            </ul>
                        </div>  
                    </motion.div>

                    <motion.div
                    variants={worksVariants}
                    initial={{opacity:0, y:50}}
                    animate={isInView3?"show":"hide"}
                    className='Works_card'>
                        <div className='Works_imgs'>
                            <img src={Poke} alt="" />
                            <motion.span whileHover={{scale:1.1}} className='Works_wrapper'>
                                <a href="https://incandescent-bombolone-ab00a2.netlify.app/" target="blank_">View Project</a>
                            </motion.span>
                        </div>
                        <div className='Works_imgs_desc'>
                            <span className='Tag'>{"<h4>"}</span>
                            <h4>App Pokedex</h4>
                            <span className='Tag' style={{display:"block"}}>{"<h4>"}</span>
                            <span className='Tag'>{"<p>"}</span>
                            <p ref={ref3}>A list of all existing pokemons, choose one and see it's stats.</p>
                            <span className='Tag'>{"<p>"}</span>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Framer-Motion
                                </li>
                                <li>
                                    React-Router
                                </li>
                            </ul>
                        </div> 
                    </motion.div>

                    <motion.div
                    variants={worksVariants}
                    initial={{opacity:0, y:50}}
                    animate={isInView4?"show":"hide"}
                    className='Works_card'>
                        <div className='Works_imgs'>
                            <img src={Crud} alt="" />
                            <motion.span whileHover={{scale:1.1}} className='Works_wrapper'>
                                <a href="https://taupe-maamoul-beae47.netlify.app/" target="blank_">View Project</a>
                            </motion.span>
                        </div>
                        <div className='Works_imgs_desc'>
                            <span className='Tag'>{"<h4>"}</span>
                            <h4>Users C.R.U.D.</h4>
                            <span className='Tag' style={{display:"block"}}>{"<h4>"}</span>
                            <span className='Tag'>{"<p>"}</span>
                            <p ref={ref4}>Fill out the form to create a user card, you can update or delete it.</p>
                            <span className='Tag'>{"<p>"}</span>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    React-hook-form
                                </li>
                            </ul>
                        </div> 
                    </motion.div>

                    <motion.div
                    variants={worksVariants}
                    initial={{opacity:0, y:50}}
                    animate={isInView5?"show":"hide"}
                    className='Works_card'>
                        <div className='Works_imgs'>
                            <img src={Rick} alt="" />
                            <motion.span whileHover={{scale:1.1}} className='Works_wrapper'>
                                <a href="https://brilliant-shortbread-759759.netlify.app/" target="blank_">View Project</a>
                            </motion.span>
                        </div>
                        <div className='Works_imgs_desc'>
                            <span className='Tag'>{"<h4>"}</span>
                            <h4>App Rick & Morty</h4>
                            <span className='Tag' style={{display:"block"}}>{"<h4>"}</span>
                            <span className='Tag'>{"<p>"}</span>
                            <p ref={ref5}>A wiki of all universes of Rick & Morty and it's habitants.</p>
                            <span className='Tag'>{"<p>"}</span>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    React-Paginate
                                </li>
                            </ul>
                        </div> 
                    </motion.div>

                    <motion.div
                    variants={worksVariants}
                    initial={{opacity:0, y:50}}
                    animate={isInView6?"show":"hide"}
                    className='Works_card'>
                        <div className='Works_imgs'>
                            <img src={Weather} alt="" />
                            <motion.span whileHover={{scale:1.1}} className='Works_wrapper'>
                                <a href="https://dashing-cannoli-74745b.netlify.app/" target="blank_">View Project</a>
                            </motion.span>
                        </div>
                        <div className='Works_imgs_desc'>
                            <span className='Tag'>{"<h4>"}</span>
                            <h4>Weather App</h4>
                            <span className='Tag' style={{display:"block"}}>{"<h4>"}</span>
                            <span className='Tag'>{"<p>"}</span>
                            <p ref={ref6}>Shows the temperature of you current city.</p>
                            <span className='Tag'>{"<p>"}</span>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    Framer-Motion
                                </li>
                            </ul>
                        </div> 
                    </motion.div>
                </div>
        </section>
    );
};

export default Works;