import React, {useState, useEffect} from 'react'
import {portfolio, tags} from "../Data/data";
import "./portfolio.css";
import {FaExternalLinkAlt} from 'react-icons/fa';


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

      <div className='d-flex justify-content-center align-items-stretch flex-wrap'>
        {
          filterImages.map(function(port) {
              return  (
                <div key={port.id} className="port-card">
                  <div className="port-img-wrap">
                    <img src={port.image} alt={port.Title} className="image-port" />
                    <div className="port-overlay">
                      <a href={port.GitLink} target="_blank" rel="noreferrer" aria-label={`Open ${port.Title}`} className="port-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <div className="port-body">
                    <span className="port-cat">{port.tag}</span>
                    <h3 className='PortTitle'>{port.Title}</h3>
                    <p className='portDes'>{port.description}</p>
                    <div className="port-tags">
                      {(port.tech || []).map((t) => (
                        <span className="port-tag" key={t}>{t}</span>
                      ))}
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