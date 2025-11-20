import { SkillsGroup } from './SkillsGroup.jsx'
import skillsData from '../data/skills.json'
import { Heading } from './Heading.jsx'

export const Skills = () => {
  return (
    <section id="skills">
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
    </section>
  )
}