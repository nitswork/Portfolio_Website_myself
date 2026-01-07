import { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "../assets/profile.jpeg";
const text = "Hi, I'm Nitya";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // return (
  //   <section id="home" className="home">
  //     <div className="home-content">
  //       <h1 className="typewriter">{displayText}<span className="cursor">|</span></h1>

  //       <p className="home-desc">
  //         I'm a software engineer passionate about building clean, high-impact
  //         applications and exploring AI, full-stack development, and system design.
  //       </p>
  //       <a
  //         href="mailto:nityarajpal29@gmail.com"
  //         className="say-hi-btn no-underline"
  //       >Let's Talk!
  //       </a>

  //     </div>
  //   </section>
  // );

  return (
  <section id="home" className="home flex items-center justify-center gap-16 px-8">
    <div className="home-content max-w-lg">
      <h1 className="typewriter">{displayText}<span className="cursor">|</span></h1>

      <p className="home-desc">
        I'm a software engineer passionate about building clean, high-impact
        applications and exploring AI, full-stack development, and system design.
      </p>
      <a
        href="mailto:nityarajpal29@gmail.com"
        className="say-hi-btn no-underline"
      >
        Let's Talk!
      </a>
    </div>

    {/* Image card */}
    <div className="home-image-card p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105">
      <img
        src={profileImg}
        alt="Nitya"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </section>
);
};

export default Home;
