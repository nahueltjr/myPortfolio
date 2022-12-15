import React, { useRef } from 'react';
import "./Contact.css"
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

const Contact = () => {

    const phrase1 = "Contact Me".split("")
  
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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bajeoko', 'template_0gig1ic', form.current, 'RBSi0CmL8nXf7M5C-')
          .then((result) => {
            console.log(result);
            e.target.reset()
          }, (error) => {
              console.log(error);
          });
    };

    const goToSection = (id) => {
        const element = document.getElementById(id)
        element.scrollIntoView({behavior:"smooth"})
    }
    
    
    return (
        <section className='Contact' id='contact'>
            <span className='Contact_bg'>Contact</span>
            <div className='Contact_title'>
                <span className='Tag' ref={ref}>{"<h2>"}</span>
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
            
            <span className='Tag'>{"<form>"}</span>
            <form className='Contact_form' ref={form} onSubmit={sendEmail}>
                    <div className='Contact_inputs'>
                        <input type="text" name="user_name" autoComplete='off' placeholder='Name..'/>
                    </div>
                    <div className='Contact_inputs'>
                        <input  type="email" name="user_email" autoComplete='off' placeholder='Email..'/>
                    </div>
                    <div className='Contact_inputs'>
                        <textarea type="text" name="message" autoComplete='off' placeholder='Message..'/>
                    </div>
                    <button className='Send_btn' type="submit" value="Send">Send</button>
            </form>
            <span className='Tag'>{"<form>"}</span>
            <span className='Tag' style={{marginLeft:"0"}}>{"<html>"}</span>
            <span onClick={()=>goToSection("home")} className='Arrow_up'><HiOutlineArrowNarrowUp/></span>
        </section>
    );
};

export default Contact;