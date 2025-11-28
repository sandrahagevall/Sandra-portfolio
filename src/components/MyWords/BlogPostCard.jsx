import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "../Button"
import { Card, ImageContainer, Content } from "./BlogPostCard.styled.js"

export const BlogPostCard = ({ title, date, image, description, link }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card>
        <ImageContainer>
          <img src={image} alt={title} className="blog-post-image" />
        </ImageContainer>

        <Content>
          <p className="date">{date}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button icon="/link.svg">Read article</Button>
            </a>
          ) : (
            <Button icon="/link.svg">Read article</Button>
          )}
        </Content>
      </Card>
    </motion.div>
  )
}