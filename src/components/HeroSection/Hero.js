import React from 'react'
import "./Hero.css"
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import Mailto from "react-mailto-link";

const Hero = () => {
  
  return (
    <div className='hero-section' id="home">
        <div className='sub-section'>
            <div className='intro'>Hi, I'm</div>
                <div className='name'>Jayalakshmi Kalimuthu</div>
                <div className='role'>Front End Developer</div>
                <p className='description'>To work in an innovative & challenging environment that could enhance and improve my skills and knowledge</p>
                <div className='d-flex gap-4 justify-content-center align-items-center'>
                <div className='contact-icons d-flex gap-2'>
                    <div className='contact-icon'>
                      <a href="https://www.linkedin.com/in/jayalakshmi-k-86511921b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWLUeJhEYR6q5qRQAy4h22w%3D%3D" target="_blank"><FaLinkedin /></a>
                    </div>
                    <div className='contact-icon'>
                      <a href="https://github.com/Jayalakshmi-23" target="_blank"><FaGithub /></a>
                    </div>
                    <div className='contact-icon'>
                      {/* <a rel="nofollow" href={`mailto:{jayakalimuthu23@gmail.com}`} target="_blank"><FaEnvelope /></a> */}
                      <Mailto email="jayakalimuthu23@gmail.com" obfuscated={true}><FaEnvelope /></Mailto>
                    </div>
                </div>
               
            </div>
        </div>    
    </div>
  )
}

export default Hero