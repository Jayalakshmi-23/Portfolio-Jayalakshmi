import React, { useEffect, useState } from "react";
import { heroData } from "../Data/data";
import "./Header.css";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../../Assets/photo.jpeg"

const Header = () => {
  let [active, setActive] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  function isFixed() {
    if (window.scrollY > 50) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }

  function menuHandler() {
    setActive(!active);
  }

  window.addEventListener("scroll", setFixedNav);

  useEffect(() => {
    isFixed();
  }, [fixedNav]);

  return (
    <div>
      <header className={`header desktop-menu ${fixedNav ? "fixed" : ""} `}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center menuwrapper">
            <div className="logo">
              <span>Portfolio</span>
              {/* <img src={logo} /> */}
            </div>
            <nav className="nav">
              <ul className="d-flex align-items-center justify-content-center navList">
                {heroData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        offset={-100}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="nav-btn">
              <button className="btn">Download CV</button>
            </div>
          </div>
        </div>
      </header>
      <header
        className={`header mobile-menu ${active ? "active" : ""} ${
          fixedNav ? "fixed" : ""
        }`}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center menuwrapper">
            <div className="logo">
              <span>Portfolio</span>
            </div>
            <div>
              {!active && (
                <MdOutlineMenu onClick={menuHandler} className="menu-icon" />
              )}
              {active && (
                <MdClose onClick={menuHandler} className="menu-icon" />
              )}
            </div>
          </div>
          <nav className={`nav-items ${active ? "active" : ""}`}>
            <ul className="navList">
              {heroData.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      offset={0}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="nav-btn">
              <button className="btn">Download CV</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
