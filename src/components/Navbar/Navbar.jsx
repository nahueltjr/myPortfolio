import React, { useState } from 'react'
import "./Navbar.css"
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { CgMenuRight} from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { FaInstagram} from 'react-icons/fa';
import { BsWhatsapp} from 'react-icons/bs';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const goToSection = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({behavior:"smooth"})
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <span className='Navbar_menu_btn' onClick={()=>setOpenMenu(!openMenu)}>
        {openMenu?<IoClose/>:<CgMenuRight/>}
      </span>
      <header className={openMenu?'Navbar show':'Navbar'}>    
              <div className='Navbar_logo'>
                <h2>N</h2>
                <p style={{color:"#fff", fontSize:"1.2rem"}}>Nahuel</p>
                <p>Web Developer</p>
              </div>
              <nav className="Navbar_menu">
                <ul>
                  <li onClick={()=>goToSection("home")}>HOME</li>
                  <li onClick={()=>goToSection("about")}>ABOUT</li>
                  <li onClick={()=>goToSection("skills")}>SKILLS</li>
                  <li onClick={()=>goToSection("works")}>WORKS</li>
                  <li onClick={()=>goToSection("contact")}>CONTACT</li>
                  <li><a href="https://docs.google.com/document/d/1lRm4gYjIXh3VVG8c5iiaZMCSi4Ki4phA/edit?usp=share_link&ouid=117674035154477092127&rtpof=true&sd=true" target="blank_">RESUME</a></li>
                </ul>
              </nav>
              <div className='Navbar_social'>
                <a href="https://www.linkedin.com/in/nahuel-tejerina-3159b9206/" target="blank_"><FaLinkedinIn/></a>
                <a href='https://github.com/nahueltjr?tab=repositories' target="blank_"><FiGithub/></a>
                <a href="https://instagram.com/nahuel.tejerina?igshid=YmMyMTA2M2Y=" target="blank_"><FaInstagram/></a>
                <a href='https://wa.link/d8zrrw' target="blank_"><BsWhatsapp/></a>
              </div>
      </header>
    </>
  )
}

export default Navbar