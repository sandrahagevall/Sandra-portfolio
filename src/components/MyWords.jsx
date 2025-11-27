import postsData from '../data/posts.json'
import { BlogPostCard } from './BlogPostCard'
import { Heading } from './Heading.jsx'
import { Button } from './Button.jsx'
import { SectionContainer } from './SectionContainer.jsx'
import styled from 'styled-components'

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
margin-top: 5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 650px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 1000px;
    gap: 3rem;
  }
`

export const MoreArticles = styled.div`
display: flex;
justify-content: center;
margin-top: 3rem;
`

export const MyWords = () => {
  return (
    <section>
      <SectionContainer>
        <Heading>My Words</Heading>
        <ContentWrapper>
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
          <MoreArticles>
            <Button variant="secondary" icon="/images/arrow.svg">See more articles</Button>
          </MoreArticles>
        </ContentWrapper>
      </SectionContainer>
    </section>
  )
}