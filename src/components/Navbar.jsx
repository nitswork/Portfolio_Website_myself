import SocialIcons from "./SocialIcons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LEFT NAV */}
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <span>|</span>
          <li><a href="#about">ABOUT</a></li>
          <span>|</span>
          <li><a href="#experience">EXPERIENCE</a></li>
          <span>|</span>
          <li><a href="#projects">PROJECTS</a></li>
          <span>|</span>
          <li><a href="#achievements">ACHIEVEMENTS</a></li>
        </ul>
        

        {/* RIGHT ICONS */}
        <SocialIcons />

      </div>
    </nav>
  );
};

export default Navbar;
