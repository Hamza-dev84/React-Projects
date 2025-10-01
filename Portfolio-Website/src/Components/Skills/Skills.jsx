import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiJavascript, SiVercel } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          I have hands-on experience in building responsive websites using
          modern web technologies, tools, and APIs.
        </p>

        <div className="skills-grid">
          
          <div className="skill-card">
            <FaHtml5 className="skill-icon html" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="skill-icon css" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <SiJavascript className="skill-icon js" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaReact className="skill-icon react" />
            <p>React.js</p>
          </div>

          
          <div className="skill-card">
            <FaGitAlt className="skill-icon git" />
            <p>Git</p>
          </div>
          <div className="skill-card">
            <FaGithub className="skill-icon github" />
            <p>GitHub</p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;
