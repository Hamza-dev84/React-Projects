
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span>Muhammad Hamza</span> <br />
          I’m a passionate <b>Front-End Developer</b> focused on building clean,
          responsive, and user-friendly websites. I enjoy turning creative ideas
          into interactive web experiences using{" "}
          <b>HTML, CSS, JavaScript, and React.js</b>.
        </p>
        <p>
          Currently, I’m sharpening my skills by working on <b>different projects </b>
          , while also exploring modern tools and frameworks to stay updated with the
          latest industry trends.
        </p>
        <p className="highlight">
           I believe in writing clean code, continuous learning, and solving
          problems with creative solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
