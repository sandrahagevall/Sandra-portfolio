import { Hero } from "./components/Hero.jsx"
import { Tech } from "./components/Tech.jsx"
import { FeaturedProjects } from "./components/FeaturedProjects.jsx"
import { Skills } from "./components/Skills.jsx"
import { MyWords } from "./components/MyWords.jsx"
import { Contact } from "./components/Contact.jsx"


export const App = () => {
  return (
    <>
      <main>
        {/* HERO */}
        <Hero />

        {/* TECH */}
        <Tech />

        {/* FEATURED PROJECTS */}
        <FeaturedProjects />

        {/* SKILLS */}
        <Skills />

        {/* MY WORDS */}
        <MyWords />
      </main>

      <footer>
        {/* CONTACT */}
        <Contact />
      </footer>
    </>
  )
}
