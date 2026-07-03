import React from 'react'
import "./Hero.css"
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import {MdKeyboardArrowDown} from "react-icons/md";
import Mailto from "react-mailto-link";
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <div className='hero-section' id="home">
        {/* decorative background orbs */}
        <span className='orb orb-1'></span>
        <span className='orb orb-2'></span>
        <span className='orb orb-3'></span>

        <div className='sub-section'>
            <div className='intro'>Hi, I'm</div>
                <div className='name'>Jayalakshmi Kalimuthu</div>
                <div className='role'>Senior Software Engineer</div>
                <p className='description'>Frontend engineer specializing in high-performance rendering, real-time state sync, and micro-frontend architecture at scale.</p>

                <div className='hero-cta d-flex gap-3 justify-content-center flex-wrap'>
                    <Link to="portfolio" spy={true} offset={-100} duration={500} className='btn btn-primary-hero'>View My Work</Link>
                    <Link to="contact" spy={true} offset={-100} duration={500} className='btn btn-outline-hero'>Get In Touch</Link>
                </div>

                <div className='d-flex gap-4 justify-content-center align-items-center'>
                <div className='contact-icons d-flex gap-2'>
                    <div className='contact-icon'>
                      <a href="https://www.linkedin.com/in/jayalakshmi23?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkZsEYJVlTieLB1kpsN767w%3D%3D" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                    <div className='contact-icon'>
                      <a href="https://github.com/Jayalakshmi-23" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                    </div>
                    <div className='contact-icon'>
                      <Mailto email="jayakalimuthu23@gmail.com" obfuscated={true}><FaEnvelope /></Mailto>
                    </div>
                </div>
            </div>
        </div>

        <Link to="about" spy={true} offset={-100} duration={500} className='scroll-down' aria-label="Scroll to About">
            <MdKeyboardArrowDown />
        </Link>
    </div>
  )
}

export default Hero
