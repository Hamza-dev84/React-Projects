import React from "react";
import "./Projects.css";
import projects from "./ProjectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="projects-intro">
        Here are some of my best projects built with React JS and modern web technologies.
      </p>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((t, index) => (
                <span key={index} className="tech">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn live">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn github">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
