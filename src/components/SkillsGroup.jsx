export const SkillsGroup = ({ group, items }) => {
  return (
    <div className="skill-group">
      <h3>{group}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}