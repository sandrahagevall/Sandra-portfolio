import styled from "styled-components"

const StyledHeading = styled.h2`
font-size: 3.75rem;
font-weight: 700;
text-align: center;
margin-bottom: ${({ theme }) => theme.spacing.lg};

@media ${({ theme }) => theme.breakpoints.desktop} {
  font-size: 5rem;
}
`

export const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}