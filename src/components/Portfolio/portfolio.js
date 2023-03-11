import React, {useState, useEffect} from 'react'
import {portfolio, tags} from "../Data/data";
import "./portfolio.css";
import {FaGithub} from 'react-icons/fa';


const Portfolio = () => {
  let [tag, setTag] =  useState('All');
  let [filterImages, setFilterImages] = useState([]);

 useEffect(() => {
    tag === "All" ? setFilterImages(portfolio) : setFilterImages(portfolio.filter(port => port.tag === tag));
 }, [tag])
 

  return (
    <section className='portfolio'>
      <div className='container-fluid container-xxl text-center' id='portfolio'>
      <div>
        <h2 className="about-me">Portfolio</h2>
        <p className="details">My Amazing Works</p>
      </div>

      <ul className='d-flex justify-content-center align-items-center work-list-ul'>
        {
          tags.map(item => {
            return <li key={item.urlparaName} onClick={() => setTag(item.urlparaName)} className={`c-pointer ${tag === item.urlparaName ? "active" : ""}`}>{item.name}</li>
          })
        }
      </ul>

      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {
          filterImages.map(function(port) {
              return  (
                <div key={port.id} className="image-width">
                  <img  src={port.image} className="image-port" />
                  <div className="portfolio--header">
                      <div className='context-box text-white w-100 h-100 d-flex justify-content-center align-items-center flex-column p-2'>
                          <h3>{port.Title}</h3>
                          <p >{port.description}</p>
                          <a href={port.GitLink} target="_blank"><FaGithub className='fs-1 text-white text-decoration-none' /></a>
                      </div>
                  </div>
                </div>
              )
          })
        }
      </div>
    </div>
    </section>
  )
}

export default Portfolio