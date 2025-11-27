import styled from "styled-components";

export const Card = styled.article`
  width: 100%;
  max-width: 500px;


  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 900px;
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 6rem;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    display: block;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    img {
      height: 100%;
      border-radius: 12px;
    }
  }
`;

export const Content = styled.div`
  .date {
    font-size: 13px;
    border: 1px solid #000;
    padding: 2px 8px;
    border-radius: 6px;
    margin: 12px 0;
    display: inline-block;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 12px;
  }
`;