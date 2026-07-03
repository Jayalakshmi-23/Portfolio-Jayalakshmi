import React from "react";
import { FaCheckCircle, FaReact, FaPython, FaGitAlt, FaGithub, FaBitbucket, FaLayerGroup, FaCode, FaTools } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiVisualstudiocode, SiFirebase, SiJenkins, SiGithubactions, SiBun } from "react-icons/si";
import "./About.css"

const skillGroups = [
  {
    title: "Web Technologies",
    icon: <FaCode />,
    items: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: <FaLayerGroup />,
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Zustand", icon: <FaLayerGroup /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Rspack", icon: <FaLayerGroup /> },
      { name: "Module Federation", icon: <FaLayerGroup /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Bitbucket", icon: <FaBitbucket /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Firebase RTDB", icon: <SiFirebase /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Bun", icon: <SiBun /> },
    ],
  },
];

const highlights = [
  "Built a virtualized rendering engine in React (windowed rendering + imperative scroll control) sustaining 100,000+ rows at ~15–20 DOM nodes with near-constant memory.",
  "Contributed to a 20+ service micro-frontend architecture (Rspack + Module Federation), enforcing module boundaries and driving the JavaScript → TypeScript migration with Zod validation.",
  "Managed application state with Zustand and built scoped, maintainable component styling with Module CSS.",
  "Helped build an in-house design system on headless components (Radix) — accessible, reusable UI primitives across services.",
  "Automated dependency security auditing through Jenkins and GitHub Actions pipelines, catching vulnerable packages before merge.",
];

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
          Senior Software Engineer with 5+ years of experience building high-performance, large-scale React applications. I specialize in windowed/virtualized rendering, real-time state sync with Zustand, and micro-frontend architecture (Rspack + Module Federation), along with CI/CD automation and the JavaScript-to-TypeScript migration.
        </p>
        <p>
          I enjoy turning complex problems into simple, intuitive interfaces. From accessible design systems built on headless components to automated security auditing in CI, I care about code that scales, performs, and stays maintainable.
        </p>
      </div>
      <ul className="about-highlights">
        {highlights.map((point, i) => (
          <li key={i}>
            <FaCheckCircle className="highlight-icon" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
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
            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="skill-card" key={group.title}>
                        <h3 className="skill-card-title">
                            <span className="skill-card-icon">{group.icon}</span>
                            {group.title}
                        </h3>
                        <div className="skill-chips">
                            {group.items.map((item) => (
                                <span className="skill-chip" key={item.name}>
                                    <span className="skill-chip-icon">{item.icon}</span>
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
      </section>
    </div>
  );
};

export default About;
