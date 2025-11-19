import { Button } from "./Button.jsx"

export const ProjectCard = ({ title, description, liveUrl, codeUrl, tags }) => {
  return (
    <article>
      <div className="project-tags">
        {tags && tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <h3>{title}</h3>

      <p>{description}</p>

      <div>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <Button>Live demo</Button>
        </a>
        <a href={codeUrl} target="_blank" rel="noopener noreferrer">
          <Button>View code</Button>
        </a>
      </div>
    </article>
  )
}