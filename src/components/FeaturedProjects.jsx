import { ProjectCard } from "./ProjectCard"
import projectsData from "../data/projects.json"

export const FeaturedProjects = () => {
  return (
    <section>
      <h2>Featured Projects</h2>

      {projectsData.projects.map((project) => (
        <ProjectCard
          tags={project.tags}
          title={project.name}
          description={project.description}
          liveUrl={project.netlify}
          codeUrl={project.github}
        />
      ))}
      <div className="more-projects">
        <button type="button" className="more-projects-btn">See more projects</button>
      </div>
    </section>
  )
}


//  <ProjectCard
//         title="Recipe library"
//         description="This is a web app built using the Spoonacular API, designed to practice fetching specific data and using local storage to enhance the user experience, with JavaScript animations for added interactivity."
//       />
//       <ProjectCard
//         title="Weather app"
//         description="This weather app is a group project built using the SMHI API and TypeScript. It displays accurate weather data for different locations, includes dynamic icons, and was designed to practice API integration, asynchronous data handling, and collaborative development."
//       />
//       <ProjectCard
//         title="Accessibility site"
//         description="This fictional event site is a group project, created with accessbility in focus. It includes a modal with trapped focus, a high-contrast mode toggle, and text customization settings. The project was designed to practice building accessible and user-friendly interfaces while implementing interactive features that enhance usability for all users."
//       />