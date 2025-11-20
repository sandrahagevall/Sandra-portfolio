import postsData from '../data/posts.json'
import { BlogPostCard } from './BlogPostCard'

export const MyWords = () => {
  return (
    <section>
      <h2>My Words</h2>
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
    </section>
  )
}