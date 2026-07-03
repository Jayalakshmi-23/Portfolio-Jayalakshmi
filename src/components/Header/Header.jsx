import React, { useEffect, useState } from "react";
import { heroData } from "../Data/data";
import "./Header.css";
import { MdOutlineMenu, MdClose, MdDarkMode, MdLightMode, MdFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import profile from "../../Assets/profile.jpg";

const Header = () => {
  let [active, setActive] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  function menuHandler() {
    setActive(!active);
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function isFixed() {
      setFixedNav(window.scrollY > 50);
    }
    isFixed();
    window.addEventListener("scroll", isFixed);
    return () => window.removeEventListener("scroll", isFixed);
  }, []);

  // Reliable scroll-spy: highlight the section whose center is nearest the
  // middle of the viewport. Handles the last section (Contact), which
  // react-scroll's built-in spy often fails to activate.
  useEffect(() => {
    const sections = heroData
      .map((item) => document.getElementById(item.link))
      .filter(Boolean);
    if (!sections.length) return;

    function onScroll() {
      const mid = window.innerHeight / 2;
      let current = sections[0].id;
      let best = Infinity;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - mid);
        if (rect.top <= mid && distance < best) {
          best = distance;
          current = section.id;
        }
      });
      // if scrolled to the very bottom, force the last section active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themeToggle = (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );

  return (
    <div>
      <header className={`header desktop-menu ${fixedNav ? "fixed" : ""} `}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center menuwrapper">
            <div className="logo d-flex align-items-center">
              <img src={profile} alt="Jayalakshmi Kalimuthu" className="logo-img" />
              <span>JK.</span>
            </div>
            <nav className="nav">
              <ul className="d-flex align-items-center justify-content-center navList">
                {heroData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        className={activeSection === item.link ? "active" : ""}
                        to={item.link}
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
            <div className="nav-btn d-flex align-items-center gap-3">
              {themeToggle}
              <a href="jaya_resume.pdf" download="jaya_resume.pdf"><button className="btn"><MdFileDownload className="btn-icon" /> <span className="btn-label">Download CV</span></button></a>
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
            <div className="logo d-flex align-items-center">
              <img src={profile} alt="Jayalakshmi Kalimuthu" className="logo-img" />
              <span>JK.</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              {themeToggle}
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
                      className={activeSection === item.link ? "active" : ""}
                      to={item.link}
                      offset={-100}
                      duration={500}
                      onClick={() => setActive(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="nav-btn">
              <a href="jaya_resume.pdf" download="jaya_resume.pdf"><button className="btn"><MdFileDownload className="btn-icon" /> <span className="btn-label">Download CV</span></button></a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
