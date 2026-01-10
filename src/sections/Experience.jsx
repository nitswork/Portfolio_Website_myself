import { useState, useEffect } from "react";
import "./Experience.css";

const experiences = [
  {
    company: "IBM",
    role: "Tech Intern – Research Project",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Built a web-based Research Portal using React.js with secure authentication via Passport.js and OAuth.",
      "Gained hands-on experience in full-stack development, authentication protocols, and responsive UI design.",
      "Collaborated remotely in a cloud-based development environment.",
    ],
  },
  {
    company: "CRIS",
    role: "Tech Intern – MDBMS Project",
    duration: "May 2024 – Jul 2024",
    points: [
      "Worked on MDBMS systems using PostgreSQL and Flutter for a live government project.",
      "Contributed to feature development and database functionality in production systems.",
      "Collaborated with cross-functional teams in an on-site environment.",
    ],
  },
  {
    company: "Dharmanand Nawani Charitable Trust",
    role: "Social Internship",
    duration: "2024",
    points: [
      "Participated in community-focused initiatives aimed at social development.",
      "Assisted in organizing outreach activities and awareness programs.",
      "Developed teamwork, communication, and leadership skills through fieldwork.",
    ],
  },
  {
    company: "Binary Keeda",
    role: "Graphic Designer Intern",
    duration: "2023",
    points: [
      "Designed social media creatives, posters, and branding assets.",
      "Worked with Canva and design tools to deliver visually engaging content.",
      "Collaborated with marketing teams to maintain brand consistency.",
    ],
  },
];

const experienceText = "/ experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < experienceText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + experienceText[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="experience" className="experience">
      <h2 className="section-title typewriter">
        {displayText}
        <span className="cursor">|</span>
      </h2>

      <div className="experience-container">
        {/* LEFT COMPANY LIST */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`company-btn ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* RIGHT DETAILS */}
        <div className="experience-details">
          <h3>
            {experiences[activeIndex].role}{" "}
            <span>@ {experiences[activeIndex].company}</span>
          </h3>

          <p className="duration">{experiences[activeIndex].duration}</p>

          <ul>
            {experiences[activeIndex].points.map((point, i) => (
              <li key={i}>▸ {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
