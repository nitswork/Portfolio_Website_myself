import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"

function App() {
  return (
    <>
      <Navbar />

      <main className="app-content">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  )
}

export default App
