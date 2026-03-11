import { SectionContainer } from "../SectionContainer"
import { HeroWrapper, HeroImages, HeroImage, HeroIntro, HeroSubheading, HeroTitle, HeroBody } from "./Hero.styled.js"

export const Hero = () => {
  return (
    <section>
      <SectionContainer>
        <HeroWrapper>
          <HeroIntro>Hi there, I'm Sandra Hagevall</HeroIntro>
          <HeroTitle>Fullstack Devloper</HeroTitle>

          <HeroImages>
            <HeroImage className="hero-img hero-img-left" aria-hidden="true" />
            <HeroImage className="hero-img hero-img-main" role="img" aria-label="Portrait of Sandra Hagevall" />
            <HeroImage className="hero-img hero-img-right" aria-hidden="true" />
          </HeroImages>

          <HeroSubheading>Industrial Engineering & IT Strategy Background</HeroSubheading>
          <HeroBody>
            Fullstack Developer building logical, structured, and accessible applications. I bring strong problem-solving skills, experience collaborating across teams, and the ability to quickly adapt to new technologies while delivering clean, high-quality code.
          </HeroBody>
        </HeroWrapper>
      </SectionContainer>
    </section>
  )
}