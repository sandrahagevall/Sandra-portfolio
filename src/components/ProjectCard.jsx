import { Button } from "./Button.jsx"

export const ProjectCard = ({ title, description, tags, image, liveUrl, codeUrl, position }) => {
  return (
    <article className={`project-card project-card-${position}`}>

      <div className="project-card-inner">

        <div className="project-card-image-container">
          <img src={image} alt={title} className="project-image" />
        </div>

        <div className="project-card-content">
          <div className="project-tags">
            {tags && tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <h3>{title}</h3>

          <p>{description}</p>

          <div className="project-card-buttons">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button icon="/public/link.svg">Live demo</Button>
            </a>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Button icon="/public/github.svg">View code</Button>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}