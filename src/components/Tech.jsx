import { Heading } from "./Heading"
import { SectionContainer } from "./SectionContainer.jsx"
import styled from "styled-components"


export const TechWrapper = styled.section`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.secondary};
padding: 0 0 5rem; 
`

export const TechInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const TechBody = styled.p`
font-size: 1rem;
max-width: 350px;
text-align: center;
margin: auto 0;

@media ${({ theme }) => theme.breakpoints.tablet} {
  max-width: 500px;
}

@media ${({ theme }) => theme.breakpoints.desktop} {
font-size: 1.2rem;
max-width: 850px;
}
`


export const Tech = () => {
  return (
    <TechWrapper>
      <SectionContainer>
        <TechInner>
          <Heading>Tech</Heading>
          <TechBody>HTML, CSS, Flexbox, JavaScript ES6, TypeScript, JSX, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.</TechBody>
        </TechInner>
      </SectionContainer>
    </TechWrapper>
  )
}