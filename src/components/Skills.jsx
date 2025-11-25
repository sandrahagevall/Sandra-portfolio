import { SkillsGroup } from './SkillsGroup.jsx'
import skillsData from '../data/skills.json'
import { Heading } from './Heading.jsx'
import { SectionContainer } from './SectionContainer.jsx'

export const Skills = () => {
  return (
    <section id="skills">
      <SectionContainer>
        <Heading>Skills</Heading>
        <div className="skills-container">
          {skillsData.skills.map((skills) =>
            <SkillsGroup
              key={skills.group}
              group={skills.group}
              items={skills.items}
            />
          )}
        </div>
      </SectionContainer>
    </section>
  )
}