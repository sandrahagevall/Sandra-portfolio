import styled from 'styled-components'

export const StyledSectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 16px;

  @media ${({ theme }) => theme.breakpoints.tablet} { 
    padding: 48px 32px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 58px 30px;
  }
`