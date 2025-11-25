import styled from "styled-components"

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  p {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroImages = styled.div`
  position: relative;
  width: 290px;
  height: 200px;
  margin: 2rem auto;  

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 490px;
    height: 260px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 530px;
    height: 280px;
  }
`

export const HeroImage = styled.div`
  position: absolute;
  width: 140px;
  height: 160px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  &.hero-img-left {
    background-image: url('/images/logistik.jpg');
    left: 0px;
    top: 20px;
    transform: rotate(-5deg);
    z-index: 1;
  }

  &.hero-img-main {
    background-image: url('/images/topimg.png');
    left: 50%;
    top: 8px;
    transform: translateX(-50%);
    z-index: 2;
  }

  &.hero-img-right {
    background-image: url('/images/frontend.jpg');
    right: 0px;
    top: 20px;
    transform: rotate(5deg);
    z-index: 1;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 230px;
    height: 260px;

    &.hero-img-left {
      top: 18px;
    }
    &.hero-img-main {
      top: 0px;
    }
    &.hero-img-right {
      top: 18px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 250px;
    height: 280px;
  }
`;

