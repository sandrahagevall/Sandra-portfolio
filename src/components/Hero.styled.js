import styled from "styled-components"

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`

export const HeroTitle = styled.h1`
font-size: 3.25;
font-weight: 700;
order: 2;
margin: 0;

@media ${({ theme }) => theme.breakpoints.desktop} {
  font-size: 5rem;
}
`

export const HeroIntro = styled.p`
font-size: 1.5rem;
font-weight: 500;
order: 1;

@media ${({ theme }) => theme.breakpoints.desktop} {
  font-size: 1.8rem;
}
`

export const HeroSubheading = styled.p`
font-size: 1.25rem;
font-weight: 500;
max-width: 800px;
order: 3; 

@media ${({ theme }) => theme.breakpoints.tablet} {
  font-size: 1.5rem;
  order: 4;
  }

@media ${({ theme }) => theme.breakpoints.desktop} {
  font-size: 1.8rem;
}
`

export const HeroBody = styled.p`
font-size: 1rem;
max-width: 800px;
text-align: start;
order: 5;
margin: 0;

@media ${({ theme }) => theme.breakpoints.tablet} {
  text-align: center;
}

@media ${({ theme }) => theme.breakpoints.desktop} {
  font-size: 1.2rem;
}
`

export const HeroImages = styled.div`
  position: relative;
  width: 290px;
  height: 200px;
  margin: 2rem auto;
  order: 4;  

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 490px;
    height: 260px;
    order: 3;
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
`

