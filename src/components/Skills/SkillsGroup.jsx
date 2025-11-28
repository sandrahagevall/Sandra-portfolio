import styled from "styled-components"

export const SkillGroupWrapper = styled.div`
  text-align: left;
  padding: 0 8px;

  h3 {
    font-size: 14px;
    border: 1px solid #fff;
    padding: 4px 18px;
    display: inline-block;
    margin-bottom: 12px;
    border-radius: 4px;
    font-weight: 500;
    min-width: 150px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 14px;
    margin-bottom: 6px;
  }

   @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: center;
  }


  @media ${({ theme }) => theme.breakpoints.desktop} {
    text-align: left;
  }
`

export const SkillsGroup = ({ group, items }) => {
  return (
    <SkillGroupWrapper>
      <h3>{group}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SkillGroupWrapper>
  )
}