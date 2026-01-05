import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="nav-item">Home</a>
        <span className="nav-separator">|</span>

        <a href="#about" className="nav-item">About</a>
        <span className="nav-separator">|</span>

        <a href="#experience" className="nav-item">Experience</a>
        <span className="nav-separator">|</span>

        <a href="#achievements" className="nav-item">Achievements</a>
        <span className="nav-separator">|</span>

        <a href="#projects" className="nav-item">Projects</a>
      </div>
    </nav>
  )
}

export default Navbar
