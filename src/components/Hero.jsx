import { SectionContainer } from "./SectionContainer"
import { HeroWrapper, HeroImages, HeroImage } from "./Hero.styled.js"

export const Hero = () => {
  return (
    <section>
      <SectionContainer>
        <HeroWrapper>
          <p>Hi there, I'm</p>
          <h1>Sandra Hagevall</h1>

          <HeroImages>
            <HeroImage className="hero-img hero-img-left" aria-hidden="true" />
            <HeroImage className="hero-img hero-img-main" role="img" aria-label="Portrait of Sandra Hagevall" />
            <HeroImage className="hero-img hero-img-right" aria-hidden="true" />
          </HeroImages>

          <p><strong>Analytical Frontend Developer with a Background in Industrial Engineering and IT Strategy</strong></p>
          <p>
            I am a Frontend Developer skilled at creating logical, structured, and accessible applications. I excel at solving complex problems and delivering efficient solutions. My analytical skills and drive to produce precise, high-quality code make me a valuable asset in any project.
          </p>
        </HeroWrapper>
      </SectionContainer>
    </section>
  )
}