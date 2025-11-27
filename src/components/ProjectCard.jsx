import { Button } from "./Button.jsx"
import { Card, ImageWrapper, Content, Tags, Buttons } from "./ProjectCard.styled.js"

export const ProjectCard = ({ title, description, tags, image, liveUrl, codeUrl, position }) => {

  return (
    <Card $position={position}>

      <ImageWrapper $position={position}>
        <img src={image} alt={title} />
      </ImageWrapper>

      <Content $position={position}>
        <Tags>
          {tags && tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </Tags>

        <h3>{title}</h3>
        <p>{description}</p>

        <Buttons>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button icon="/public/link.svg">Live demo</Button>
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Button icon="/public/github.svg">View code</Button>
          </a>
        </Buttons>
      </Content >
    </Card>
  )
}