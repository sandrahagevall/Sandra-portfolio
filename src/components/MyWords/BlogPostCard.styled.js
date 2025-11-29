import styled from "styled-components";

export const Card = styled.article`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 50% 50%;
    column-gap: ${({ theme }) => theme.spacing.xl};
  }
`

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    display: block;
  }

 @media ${({ theme }) => theme.breakpoints.tablet} {
    img {
    width: 260px;
    height: 300px;    
    object-fit: cover;
    }
  }

 @media ${({ theme }) => theme.breakpoints.desktop} {
  img { 
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    min-height: 280px; 
  }

  .date {
    font-size: 0.9rem;
    border: 1px solid #000;
    padding: 2px 8px;
    border-radius: 4px;
    margin: 12px 0;
    display: inline-block;
    max-width: 150px;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0 0 12px 0;
  }

  p {
    margin-bottom: 0.6rem;
  }

  a, button {
    margin-bottom: 1.2rem;
    align-self: center;
  }

   @media ${({ theme }) => theme.breakpoints.tablet} {
    a, button {
      align-self: flex-start;
    }
  }
`