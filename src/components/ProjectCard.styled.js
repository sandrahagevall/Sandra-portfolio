import styled from "styled-components"


export const Card = styled.article`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;  /* 📱 MOBIL & TABLET */
  gap: 2rem;
  align-items: center;

  /* 🖥 DESKTOP */
  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: ${({ $position }) =>
    $position === "left" ? "row" : "row-reverse"};
    gap: 4rem;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  display: flex; 
  justify-content: center;
  flex: 1;

  img {
    width: 100%;
    height: auto;
    max-width: 360px;
    display: block;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    img {
     max-width: 1400px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  max-width: 100%;

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
    max-width: 550px;
  }

  h3 {
    font-size: 1.8rem;
    margin: 1.5 0; /* liten marginal ovan & under */
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
  white-space: nowrap;

  span {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.15rem 0.35rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    font-size: 0.6rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    span {
      font-size: 0.75rem;
      padding: 0.25rem 0.55rem;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
  text-align: center;
    span {
      font-size: 1rem;
      padding: 0.4rem 0.7rem;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    justify-content: flex-start;
  }
`;