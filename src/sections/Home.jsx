// import { useEffect, useState } from "react";
// import "./Home.css";
// import profileImg from "../assets/profile.jpeg";

// const text = "Hi, I'm Nitya";

// const Home = () => {
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [index]);

//   return (
//     <section id="home" className="home">
//       <div className="home-container">
        
//         {/* LEFT CONTENT */}
//         <div className="home-content">
//           <h1 className="typewriter">
//             {displayText}
//             <span className="cursor">|</span>
//           </h1>
          
//           <p className="home-desc">
//             I'm a software engineer passionate about building clean, high-impact
//             applications and exploring AI, full-stack development, and system design.
//           </p>

//           <a
//             href="mailto:nityarajpal29@gmail.com"
//             className="say-hi-btn no-underline"
//           >
//             Let's Talk!
//           </a>
//         </div>

//         {/* RIGHT IMAGE CARD (SAME AS ABOUT) */}
//         <div className="home-image-card">
//           <img src={profileImg} alt="Nitya" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Home;
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
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="home">
      <div className="home-container">
        
        {/* LEFT CONTENT */}
        <div className="home-content">
          <h1 className="typewriter">
            {displayText}
            <span className="cursor">|</span>
          </h1>

          <p className="home-desc">
            I'm a software engineer student passionate about building clean, high-impact
            applications and exploring AI, full-stack development, and system design.
          </p>

          <a
            href="mailto:nityarajpal29@gmail.com"
            className="say-hi-btn no-underline"
          >
            Let's Talk!
          </a>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="home-image-card">
          <img src={profileImg} alt="Nitya" />
        </div>

      </div>
    </section>
  );
};

export default Home;
