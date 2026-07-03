import React, {useRef, useState} from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub} from "react-icons/fa";

const Contact = () => {
  let formRef = useRef("");

  const [status, setStatus] = useState("")

  const submitInputHandler = function(e){
    e.preventDefault();
    setStatus("sending");
      emailjs.sendForm('service_6trhfth', 'template_pm9m9eb', formRef.current, '4X8QoV4i-bluke7Yy')
      .then(() => {
          setStatus("success");
          formRef.current.reset();
      }, () => {
          setStatus("error");
      });
  }

  return (
    <footer className='position-relative contact-footer'>
      <div className='container py-5 contact--section' id='contact'>
        <div className='contact--message text-center'>
            <h2 className='about-me'>Contact</h2>
            <p className='details'>Let's Connect</p>
        </div>

        <div className='contact-grid'>
          {/* left: contact details */}
          <div className='contact-info'>
            <h3 className='contact-info-title'>Let's build something great together</h3>
            <p className='contact-info-sub'>Have a project, a role, or an idea in mind? Drop me a message and I'll get back to you soon.</p>

            <ul className='contact-detail-list'>
              <li>
                <span className='detail-icon'><FaEnvelope /></span>
                <div>
                  <span className='detail-label'>Email</span>
                  <a href="mailto:jayakalimuthu23@gmail.com">jayakalimuthu23@gmail.com</a>
                </div>
              </li>
              <li>
                <span className='detail-icon'><FaPhoneAlt /></span>
                <div>
                  <span className='detail-label'>Phone</span>
                  <a href="tel:+918778171100">+91 87781 71100</a>
                </div>
              </li>
              <li>
                <span className='detail-icon'><FaMapMarkerAlt /></span>
                <div>
                  <span className='detail-label'>Location</span>
                  <span className='detail-value'>Chennai, India</span>
                </div>
              </li>
            </ul>

            <div className='contact-socials'>
              <a href="https://www.linkedin.com/in/jayalakshmi23" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/Jayalakshmi-23" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          {/* right: form card */}
          <div className='contact-form'>
            <form className='form' ref={formRef} onSubmit={submitInputHandler}>
                <input type="text" className='input-control' placeholder="Your Name" name='user_name' required />
                <input type="email" className='input-control'  placeholder="Your Email" name='user_email' required />
                <textarea className='input-control' placeholder='Message' name='message' required>

                </textarea>
                <div className='nav-btn primary-btn'>
                <button className='btn' disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                </div>
                {status === "success" && <p className='form-status success'>Thanks! Your message has been sent.</p>}
                {status === "error" && <p className='form-status error'>Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>

      {/* copy right */}
      <div className='footer copy--right'>
            <span>© Jayalakshmi Kalimuthu, 2026 — built with ReactJs</span>
      </div>
    </footer>
  )
}

export default Contact
