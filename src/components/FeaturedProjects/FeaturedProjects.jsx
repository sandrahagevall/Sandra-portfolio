import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ProjectCard } from "./ProjectCard.jsx"
import projectsData from "../../data/projects.json"
import { Heading } from "../Heading"
import { Button } from "../Button"
import { SectionContainer } from "../SectionContainer"
import { FeaturedWrapper, FeaturedInner } from "./FeaturedProjects.styled.js"

export const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false)

  const handleToggle = () => {
    setShowAll((prev) => !prev)
  }

  const projectsToShow = showAll ? projectsData.projects : projectsData.projects.slice(0, 4)

  return (
    <FeaturedWrapper>
      <SectionContainer>
        <FeaturedInner>
          <Heading>Featured Projects</Heading>

          <AnimatePresence mode="popLayout">
            {projectsToShow.map((project) => (
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
          </AnimatePresence>
          <Button
            variant="secondary"
            icon="/images/arrow.svg"
            $rotated={showAll}
            onClick={handleToggle}>
            {showAll ? "See fewer projects" : "See more projects"}
          </Button>
        </FeaturedInner>
      </SectionContainer>
    </FeaturedWrapper>
  )
}
