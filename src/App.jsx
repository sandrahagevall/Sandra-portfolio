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
        <Hero />

        <Tech />

        <FeaturedProjects />

        <Skills />

        <MyWords />
      </main>

      <footer>
        <Contact />
      </footer>
    </>
  )
}
