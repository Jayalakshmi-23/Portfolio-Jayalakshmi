import React from 'react'
import "./Summary.css"

const Summary = () => {
  return (
    <section className='summary' id='Resume'>
        <div className='container d-flex justify-content-evenly flex-wrap'>
            <div className='experience py-5'>
                <h3 className='text-white mb-5 my-header'>My Experience</h3>
                <div className='px-5 py-4 my-4 text-white info-box'>
                    <div className='pos-header pb-2'>Front End Developer</div>
                    <p className='name--info'>Cognizant Technology Solutions</p>
                    <p className='duration-time'>March 2022 - PRESENT</p>
                </div>
                <div className='px-5 py-4 my-4 text-white info-box'>
                    <div className='pos-header pb-2'>Programmer Trainee</div>
                    <p className='name--info'>Cognizant Technology Solutions</p>
                    <p className='duration-time'>March 2021 - March 2022</p>
                </div>
            </div>
            <div className='education py-5'>
                <h3 className='text-white mb-5 my-header'>My Education</h3>
                <div className='px-5 py-4 my-4 text-white info-box'>
                    <div className='pos-header pb-2'>Applied Science GPA:8.56/10</div>
                    <p className='name--info'>PSG College of Technology</p>
                    <p className='duration-time'>June 2017 - September 2020</p>
                </div>
                <div className='px-5 py-4 my-4 text-white info-box'>
                    <div className='pos-header pb-2'>Class 12th (HSC) Percent:91.4% </div>
                    <p className='name--info'>Sankar Ponnar Hr Sec School</p>
                    <p className='duration-time'>June 2016 - June 2017</p>
                </div>
                <div className='px-5 py-4 my-4 text-white info-box'>
                    <div className='pos-header pb-2'>Class 10th (SSLC) Percent:95.2%</div>
                    <p className='name--info'>CGM Hr Sec School</p>
                    <p className='duration-time'>June 2014 - June 2015</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Summary