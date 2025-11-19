import { ProjectCard } from "./ProjectCard"
import projectsData from "../data/projects.json"

export const FeaturedProjects = () => {
  return (
    <section>
      <h2>Featured Projects</h2>

      {projectsData.projects.map((project) => (
        <ProjectCard
          key={project.name}
          tags={project.tags}
          title={project.name}
          description={project.description}
          image={project.image}
          liveUrl={project.netlify}
          codeUrl={project.github}
          position={project.position}
        />
      ))}
      <div className="more-projects">
        <button type="button" className="more-projects-btn">See more projects</button>
      </div>
    </section>
  )
}
