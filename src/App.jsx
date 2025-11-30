import { Hero } from "./components/Hero"
import { Tech } from "./components/Tech"
import { FeaturedProjects } from "./components/FeaturedProjects"
import { Skills } from "./components/Skills"
import { MyWords } from "./components/MyWords"
import { Contact } from "./components/Contact"
import { GlobalStyle } from "./components/GlobalStyle.jsx"
import { theme } from "./components/theme.js"
import { ThemeProvider } from "styled-components"


export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <a href="#main" className="skip-link">Skip to main content</a>
        <Hero />
        <main id="main" tabIndex={-1}>

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
