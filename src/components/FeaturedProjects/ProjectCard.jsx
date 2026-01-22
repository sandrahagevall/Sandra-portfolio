import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "../Button"
import { Card, ImageWrapper, Content, Tags, Buttons } from "./ProjectCard.styled"

export const ProjectCard = ({ title, description, tags, image, liveUrl, codeUrl, position }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card $position={position}>

        <ImageWrapper $position={position}>
          <img src={image} alt={title} />
        </ImageWrapper>

        <Content $position={position}>
          <Tags>
            {tags && tags.map((tag, i) => (
              <span key={`${tag}-${i}`} className="tag">{tag}</span>
            ))}
          </Tags>

          <h3>{title}</h3>
          <p>{description}</p>

          <Buttons>
            <Button as="a" href={liveUrl} target="_blank" rel="noopener noreferrer" icon="/link.svg">Live demo</Button>
            <Button as="a" href={codeUrl} target="_blank" rel="noopener noreferrer" icon="/github.svg">View code</Button>
          </Buttons>
        </Content >
      </Card>
    </motion.div>
  )
}