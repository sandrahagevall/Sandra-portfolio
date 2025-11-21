import { ProjectCard } from "./ProjectCard"
import projectsData from "../data/projects.json"
import { Heading } from "./Heading.jsx"
import { Button } from "./Button.jsx"

export const FeaturedProjects = () => {
  return (
    <section>
      <Heading>Featured Projects</Heading>

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
        <Button variant="secondary" icon="/images/arrow.svg">See more projects</Button>
      </div>
    </section>
  )
}
