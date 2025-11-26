import styled from "styled-components"

export const FeaturedWrapper = styled.section`
background-color: ${({ theme }) => theme.colors.secondary};
 color: ${({ theme }) => theme.colors.primary};
`
export const FeaturedInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`