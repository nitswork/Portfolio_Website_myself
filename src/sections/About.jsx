import profileImg from "../assets/profile.jpeg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-text">
          <h2 className="about-title">
            <span className="slash">/</span> about me
          </h2>

          <p>
            I’m a <span className="highlight">Software Engineering student</span> with
            a strong interest in building clean, scalable applications and
            exploring <span className="highlight">AI/ML and full-stack development</span>.
          </p>

          <p>
            I enjoy turning ideas into real products using modern technologies,
            and I’m constantly learning through projects, internships, and
            hands-on problem solving.
          </p>

          <p className="tech-title">
            Here are some technologies I’ve been working with:
          </p>

          <div className="tech-list">
            <ul>
              <li>▸ Java</li>
              <li>▸ Python</li>
              <li>▸ JavaScript (ES6+)</li>
            </ul>
            <ul>
              <li>▸ React.js</li>
              <li>▸ Node.js</li>
              <li>▸ MongoDB</li>
            </ul>
          </div>

          <p className="about-extra">
            Outside of tech, I enjoy learning new tools, creating content,
            and constantly improving my problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
