import { SkillsGroup } from './SkillsGroup.jsx'
import skillsData from '../data/skills.json'
import { Heading } from './Heading.jsx'
import { SectionContainer } from './SectionContainer.jsx'
import styled from 'styled-components'

export const SkillsWrapper = styled.section`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.secondary};
padding: 0 0 5rem;
width: 100%;
`

export const GroupsContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
text-align: left;

@media ${({ theme }) => theme.breakpoints.tablet} {
  max-width: 600px;
  margin: 0 auto;
}

@media ${({ theme }) => theme.breakpoints.desktop} {
  max-width: 1000px;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  text-align: left;

  div {
    margin: 0 auto;
  }
}
`

export const Skills = () => {
  return (
    <SkillsWrapper>
      <SectionContainer>
        <Heading>Skills</Heading>
        <GroupsContainer>
          {skillsData.skills.map((skills) =>
            <SkillsGroup
              key={skills.group}
              group={skills.group}
              items={skills.items}
            />
          )}
        </GroupsContainer>
      </SectionContainer>
    </SkillsWrapper>
  )
}