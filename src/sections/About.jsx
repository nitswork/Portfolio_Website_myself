import { useEffect, useState } from "react";
import "./About.css";
import aboutImg from "../assets/portfolio.jpg"

const aboutText = "/ about me";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + aboutText[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-image-card">
          <img src={aboutImg} alt="Designer & Coder" />
        </div>

        <div className="about-text">
          <h2 className="about-title typewriter">
            {displayText}
            <span className="cursor">|</span>
          </h2>
          <p>
            I’m a <span className="highlight">curious and creative problem-solver</span>
            {" "}with a strong interest in AI/ML, deep learning, and full-stack
            development. I enjoy understanding problems, experimenting with
            ideas, and turning them into something meaningful.
          </p>

          <p>
            I’m drawn to technical, real-world, data-driven, and creative
            problems, and I’m always excited to learn something new along the way.
          </p>
          {/* <p>
            I’m a BCA graduate specialized in
            <span className="highlight"> AI & Machine Learning</span> with
            a strong interest in building clean, scalable applications and
            exploring the world of
            <span className="highlight"> software engineering and full-stack development</span>.
          </p>

          <p>
            I enjoy building real-world applications using ML, computer vision,
            and full-stack technologies, and I’m constantly learning through
            projects, internships, and hands-on problem solving.
          </p> */}

          <p className="tech-title">
            Here are some technologies I’ve been working with:
          </p>

          <div className="tech-list">
            <ul>
              <li>▸ Java</li>
              <li>▸ Python</li>
              <li>▸ TensorFlow</li>
              <li>▸ OpenCV</li>
            </ul>
            <ul>
              <li>▸ JavaScript (ES6+)</li>
              <li>▸ React.js</li>
              <li>▸ Node.js</li>
              <li>▸ MongoDB</li>
            </ul>
          </div>

          <p className="about-extra">
            Outside of tech, I enjoy learning new tools, creating content,
            I am also a graphic designer, and constantly improving my problem-solving skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
