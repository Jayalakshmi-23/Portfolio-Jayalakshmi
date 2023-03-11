import React from "react";
import "./About.css"

const About = () => {
  return (
    <div className="text-center container py-5" id="about">
      <section>
      <div>
        <h2 className="about-me">About Me</h2>
        <p className="details">I build software that solve your problem</p>
      </div>
      <div className="description--about">
        <p>
          Working As a Front End developer with 2+ years of experience in blending the art design with skill programming to deliver an immersive and engaging User Interface through Efficient website development, proactive feature optimization and relentless debugging.
        </p>
        <p>
        I enjoy turning complex problems into simple, beautiful and intuitive codes.I have familarity in responsive web design and fixing UI bugs.I am a team player and enthusiastic go-getter.I build dynamic,interactive and user-centered web designs to scales
        </p>
      </div>
      </section>
      {/* <div className="personal-details">
            <div className="left-section">
                <div className="d-flex display-block">
                    <span className="email">Email:</span>
                    <span className="phoneNo">jayakalimuthu23@gmail.com</span>
                </div>
                <div>
                    <span className="email">Phone No:</span>
                    <span className="phoneNo">8778171100</span>
                </div>
            </div>
          
      </div> */}
      <section className="skill-section">
            <div>
                <h2 className="about-me">Why Choose Me</h2>
                <p className="details">My Experience Area</p>
            </div>
            <div className="experience-items">
                <div className="experience-item">
                    <div className="experience-info">
                        <p>HTML</p>
                        <p>90%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"90%"}}></span>
                    </div>
                </div>
                
                <div className="experience-item">
                    <div className="experience-info">
                        <p>JavaScript</p>
                        <p>80%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"80%"}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>CSS</p>
                        <p>90%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"90%"}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>React Js</p>
                        <p>70%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"70%"}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>jQuery</p>
                        <p>40%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"40%"}}></span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>Bootstrap</p>
                        <p>60%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"60%"}}></span>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default About;
