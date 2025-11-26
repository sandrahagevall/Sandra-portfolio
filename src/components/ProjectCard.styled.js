import styled from "styled-components"

export const Card = styled.article`
display: flex;
flex-direction: column;
gap: 1rem;
margin: o auto;

@media ${({ theme }) => theme.breakpoints.desktop} {
  display: grid; 
  grid-template-columns: ${({ $position }) =>
    $position === "left" ? "1fr 1fr" : "1fr 1fr"};
  grid-template-areas: ${({ $position }) =>
    $position === "left" ? "'image content'" : "'content image'"};
  align-items: center;
  gap: 2rem;
}
`
export const ImageWrapper = styled.div`
  grid-area: image;

  img {
    width: 100%;
    border-radius: 12px;
    display: block;
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 550px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.3rem 0.7rem;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 0.8rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;