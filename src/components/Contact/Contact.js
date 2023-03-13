import React, {useRef, useState,useEffect} from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {FaArrowUp} from "react-icons/fa";

const Contact = () => {
  let formRef = useRef("");
 
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  const submitInputHandler = function(e){
    e.preventDefault();
      emailjs.sendForm('service_6trhfth', 'template_pm9m9eb', formRef.current, '4X8QoV4i-bluke7Yy')
      .then((result) => {
          console.log(result.text); 
            
      }, (error) => {
          console.log(error.text);         
      });
  }

  return (
    <footer className='position-relative'>
     
      <div className='container py-5 text-center contact--section' id='contact'>
        <div className=''>
        <div className='contact--message '>
            <h2 className='about-me'>Contact</h2>
            <p className='form-fill'>Please fill out the form on this section to contact with me.</p>
            <p className='details'>Let's Connect</p>
        </div>
        <div className='contact-form w-75 mx-auto'>
        <form className='form' ref={formRef} onSubmit={submitInputHandler}>
            <input type="text" className='input-control' placeholder="Your Name" name='user_name'  />
            <input type="email" className='input-control'  placeholder="Your Email" name='user_email' />
            <textarea className='input-control' placeholder='Message' name='message'>

            </textarea>
            <div className='nav-btn primary-btn'>
            <button className='btn'>Send Message</button>
            </div>
        </form>
        </div>
        </div>
    </div>
    {/* copy right */}
    <div className='footer copy--right'>
            <span>© Jayalakshmi Kalimuthu, 2023 — built with ReactJs</span>
      </div>
      {visible && 
        <div className='scrollTop' onClick={scrollToTop} >
            <FaArrowUp className='arrowUp' />
        </div>
      }
    </footer>
  )
}

export default Contact