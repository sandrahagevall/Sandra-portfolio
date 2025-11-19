import { ProjectCard } from "./ProjectCard"

export const FeaturedProjects = () => {
  return (
    <section>
      <h2>Featured Projects</h2>
      <ProjectCard
        title="Business site"
        description="This is a project for a fictional company, built with responsive design using Flexbox and Grid, featuring a mobile menu and contact form. It was designed to practice clean structure, interactivity, and enhance the user experience."
      />
      <ProjectCard
        title="Recipe library"
        description="This is a web app built using the Spoonacular API, designed to practice fetching specific data and using local storage to enhance the user experience, with JavaScript animations for added interactivity."
      />
      <ProjectCard
        title="Weather app"
        description="This weather app is a group project built using the SMHI API and TypeScript. It displays accurate weather data for different locations, includes dynamic icons, and was designed to practice API integration, asynchronous data handling, and collaborative development."
      />
      <ProjectCard
        title="Accessibility site"
        description="This fictional event site is a group project, created with accessbility in focus. It includes a modal with trapped focus, a high-contrast mode toggle, and text customization settings. The project was designed to practice building accessible and user-friendly interfaces while implementing interactive features that enhance usability for all users."
      />
    </section>
  )
}