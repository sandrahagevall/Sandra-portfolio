import { Button } from "./Button.jsx";

export const BlogPostCard = ({ title, date, image, description, link }) => {
  return (
    <article className="blog-post-card">

      <div className="blog-post-card-image-container">
        <img src={image} alt={title} className="blog-post-image" />
      </div>
      <div className="blog-post-card-content">
        <p className="date">{date}</p>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button icon="/public/link.svg">Read article</Button>
          </a>
        ) : (
          <Button icon="/public/link.svg">Read article</Button>
        )}
      </div>
    </article>
  )
}