import styled from "styled-components"


export const Card = styled.article`
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;  
  gap: 2rem;
  align-items: stretch;
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 16px;

  background: transparent;
  border: 1px solid transparent;

  transition: transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease;

 @media ${({ theme }) => theme.breakpoints.tablet} {
  &:hover {
  transform: translateY(-8px);

  box-shadow:
    0 18px 40px rgba(0,0,0,0.18),
    0 0 0 1px rgba(0,0,0,0.06);
}
 }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: ${({ $position }) =>
    $position === "left" ? "row" : "row-reverse"};
    gap: 3rem;
    align-items: stretch;
    margin-bottom: 3rem;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`

export const ImageWrapper = styled.div`
  display: flex; 
  max-width: 600px;
  justify-content: center;
  width: 100%;
  flex: 1;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    /* display: block; */
  }

    @media ${({ theme }) => theme.breakpoints.tablet} {
    img {
      width: auto;
      max-width: 600px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    img {
      max-width: 480px; 
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  max-width: 65ch;
  margin: 0 auto;
  flex: 1.6;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0; /* liten marginal ovan & under */
  }

  p {
    margin: 0 0 1rem 0; /* liten marginal under description */
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 750px;
  }

  h3 {
    font-size: 1.8rem;
    margin: 1.5rem 0; /* liten marginal ovan & under */
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: 0.3rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors.secondary};
    color: #3a3a3a;
    padding: 0.15rem 0.35rem;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    font-size: 0.6rem;
    flex-shrink: 1;
    white-space: normal;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    span {
      font-size: 0.75rem;
      /* padding: 0.25rem 0.55rem; */
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
  text-align: center;
    span {
      font-size: 1rem;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: auto;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: flex-start;
  }
`