import { useEffect, useState } from "react";
import "./About.css";

const aboutText = "/ about me";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + aboutText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-text">
          <h2 className="about-title typewriter">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p>
            I’m a BCA student specializing in
            <span className="highlight"> AI & Machine Learning</span> with
            a strong interest in building clean, scalable applications and
            exploring the world of
            <span className="highlight"> software engineering and full-stack development</span>.
          </p>

          <p>
            I enjoy building real-world applications using ML, computer vision,
            and full-stack technologies, and I’m constantly learning through
            projects, internships, and hands-on problem solving.
          </p>

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
            graphic designing, and constantly improving my problem-solving skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
