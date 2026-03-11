import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "../Button"
import { Card, ImageContainer, Content, ArticleButton, ModalOverlay, ModalContent, CloseButton } from "./BlogPostCard.styled.js"

export const BlogPostCard = ({ title, date, image, content, link }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

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
          <p className="preview">{content[0]}</p>
          <ArticleButton onClick={() => setOpen(true)}>
            Read article
          </ArticleButton>
        </Content>
      </Card>
      {open && (
        <ModalOverlay onClick={() => setOpen(false)}>

          <CloseButton
            onClick={() => setOpen(false)}
            aria-label="Close article"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseButton>

          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{title}</h3>

            {content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

          </ModalContent>

        </ModalOverlay>
      )}
    </motion.div>
  )
}