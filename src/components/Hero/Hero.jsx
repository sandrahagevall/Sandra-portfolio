import { SectionContainer } from "../SectionContainer"
import { HeroWrapper, HeroImages, HeroImage, HeroIntro, HeroSubheading, HeroTitle, HeroBody } from "./Hero.styled.js"

export const Hero = () => {
  return (
    <section>
      <SectionContainer>
        <HeroWrapper>
          <HeroIntro>Hi there, I'm</HeroIntro>
          <HeroTitle>Sandra Hagevall</HeroTitle>

          <HeroImages>
            <HeroImage className="hero-img hero-img-left" aria-hidden="true" />
            <HeroImage className="hero-img hero-img-main" role="img" aria-label="Portrait of Sandra Hagevall" />
            <HeroImage className="hero-img hero-img-right" aria-hidden="true" />
          </HeroImages>

          <HeroSubheading>Analytical Fullstack Developer with a Background in Industrial Engineering and IT Strategy</HeroSubheading>
          <HeroBody>
            I am a Fullstack Developer skilled at creating logical, structured, and accessible applications. I excel at solving complex problems and delivering efficient solutions. My analytical skills and drive to produce precise, high-quality code make me a valuable asset in any project.
          </HeroBody>
        </HeroWrapper>
      </SectionContainer>
    </section>
  )
}