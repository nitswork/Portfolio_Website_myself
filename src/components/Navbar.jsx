import SocialIcons from "./SocialIcons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LEFT NAV */}
        <div className="nav-links">
          <a href="#home">HOME</a>
          <span className="separator">|</span>

          <a href="#about">ABOUT</a>
          <span className="separator">|</span>

          <a href="#experience">EXPERIENCE</a>
          <span className="separator">|</span>

          <a href="#projects">PROJECTS</a>
          <span className="separator">|</span>

          <a href="#achievements">ACHIEVEMENTS</a>
        </div>

        {/* RIGHT ICONS */}
        <SocialIcons />

      </div>
    </nav>
  );
};

export default Navbar;
