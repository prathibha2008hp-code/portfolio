import { CustomCursor } from './components/CustomCursor'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { About, Contact, Experience, Footer, OpenSource, Projects, Skills } from './sections/PortfolioSections'
import './portfolio.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
