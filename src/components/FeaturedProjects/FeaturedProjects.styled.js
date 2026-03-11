import styled from "styled-components"

export const FeaturedWrapper = styled.section`
background-color: ${({ theme }) => theme.colors.secondary};
 color: ${({ theme }) => theme.colors.primary};
`
export const FeaturedInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 3rem);
`