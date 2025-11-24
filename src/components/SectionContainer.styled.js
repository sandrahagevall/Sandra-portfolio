import styled from 'styled-components'

export const StyledSectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;

  @media (min-width: 768px) { 
    padding: 96px 32px;
  }

  @media (min-width: 1024px) {
    padding: 120px 48px;
  }
`