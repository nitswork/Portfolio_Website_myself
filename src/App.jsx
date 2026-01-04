import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"

function App() {
  return (
    <div className="bg-gray-950 text-white pt-16">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Achievements />
    </div>
  )
}

export default App
