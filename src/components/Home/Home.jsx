import React, { useRef } from 'react'
import "./Home.css"
import { motion, useInView } from 'framer-motion'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

const Home = () => {
  const phrase1 = "Hi!".split("")
  const phrase2 = "I'm Nahuel".split("")
  const phrase3 = "Web Developer.".split("")
  
  const spanVariants = {
    visible:{scaleY:1},
    hover:{scaleY:[1,0.8,0.7,1.2,0.9,1.2,1,1.1,1],
    scaleX:[1,1.2,1.3,0.8,1.1,0.8,1,0.9,1],
    color:"#08fdd8"}
  }
  const list = {
    visible:{
      opacity:1,
      transition:{
        delay:0.6,
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
    once:true
  })

  const arrowVariants = {
    y:[0,-5,0],
    transition:{
      repeat:Infinity
    }
  }
  const titleVariants = {
    x:0,
    opacity:1,
    transition:{
      delay:1.7,
      duration:0.4
    }
  }

  const goToSection = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({behavior:"smooth"})
  }

  return (
    <section className='Home' id='home'>
        <span className='Home_bg'>Development</span>
        <div className='Header_tags'>
          <span className='Tag'>{"<html>"}</span>
          <span className='Tag' style={{marginLeft:"30px"}}>{"<section>"}</span>
        </div>
        <div className='Home_title'>
        <span className='Tag'>{"<h1>"}</span>
          <motion.h1 variants={list} initial="hidden" animate="visible">
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
          </motion.h1>
          <br />
          <motion.h1 variants={list} initial="hidden" animate="visible">
            {
              phrase2.map((letter,index)=>(
                <motion.span variants={item}key={index}>
                <motion.span
                variants={spanVariants}
                initial="visible"
                whileHover="hover"
                transition={{duration:.9,times:[1,1]}}
                >{letter === " " ? "\u00A0": letter}</motion.span>
                </motion.span>
              ))
            }
          </motion.h1>
          <br />
          <motion.h1 variants={list} initial="hidden" animate="visible">
          {
            phrase3.map((letter,index)=>(
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
          </motion.h1>

          <span className='Tag'>{"<h1>"}</span>

          <div className='Home_text'>
            <span className='Tag'>{"<p>"}</span>
            <motion.p
            initial={{opacity:0, x:-100}}
            animate={isInView ? titleVariants : ""}
            >I like to craft solid and scalable frontend products with great user experiences.</motion.p>
            <span className='Tag' style={{display:"block"}}>{"<p>"}</span>
            <button onClick={()=>goToSection("contact")} className='Home_btn'>Contact me!</button>
          </div>
        </div>
        <span className='Tag' style={{marginLeft:"30px"}}>{"<section>"}</span>
        <motion.div
          animate={isInView ? arrowVariants : ""}
          className='Arrow' ref={ref}>
          <span>scroll</span>
          <HiOutlineArrowNarrowDown/>
        </motion.div>
    </section>
  )
}

export default Home