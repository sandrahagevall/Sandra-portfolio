import postsData from '../data/posts.json'
import { BlogPostCard } from './BlogPostCard'
import { Heading } from './Heading.jsx'
import { Button } from './Button.jsx'
import { SectionContainer } from './SectionContainer.jsx'

export const MyWords = () => {
  return (
    <section>
      <SectionContainer>
        <Heading>My Words</Heading>
        {postsData.posts.map((post) => (
          <BlogPostCard
            key={post.name}
            title={post.name}
            date={post.date}
            image={post.image}
            description={post.description}
            link={post.link}
          />
        ))}
        <div className="more-articles">
          <Button variant="secondary" icon="/images/arrow.svg">See more articles</Button>
        </div>
      </SectionContainer>
    </section>
  )
}