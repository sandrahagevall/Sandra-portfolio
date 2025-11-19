import { Button } from "./Button.jsx"

export const ProjectCard = ({ title, description }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>

      <div>
        <Button>Live demo</Button>
        <Button>View code</Button>
      </div>
    </article>
  )
}