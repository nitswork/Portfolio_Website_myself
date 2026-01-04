const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex justify-center items-center gap-20 py-4 list-none m-0">
          <li>
            <a href="#home" className="no-underline text-blue-700 text-lg font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="no-underline text-blue-700 text-lg font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="no-underline text-blue-700 text-lg font-semibold">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="no-underline text-blue-700 text-lg font-semibold">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="no-underline text-blue-700 text-lg font-semibold">
              Achievements
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
