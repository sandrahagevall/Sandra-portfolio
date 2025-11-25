import { Hero } from "./components/Hero.jsx"
import { Tech } from "./components/Tech.jsx"
import { FeaturedProjects } from "./components/FeaturedProjects.jsx"
import { Skills } from "./components/Skills.jsx"
import { MyWords } from "./components/MyWords.jsx"
import { Contact } from "./components/Contact.jsx"
import { GlobalStyle } from "./components/GlobalStyle.jsx"
import { theme } from "./components/theme.js"
import { ThemeProvider } from "styled-components"


export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Hero />

          <Tech />

          <FeaturedProjects />

          <Skills />

          <MyWords />

          <Contact />
        </main>
      </ThemeProvider>
    </>
  )
}
