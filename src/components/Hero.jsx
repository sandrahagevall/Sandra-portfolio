import { SectionContainer } from "./SectionContainer"

export const Hero = () => {
  return (
    <section>
      <SectionContainer>
        <p>Hi there, I'm</p>
        <h1>Sandra Hagevall</h1>
        <div className="hero-images">
          <div className="hero-img hero-img-left" aria-hidden="true"></div>
          <div className="hero-img hero-img-main" role="img" aria-label="Portrait of Sandra Hagevall"></div>
          <div className="hero-img hero-img-right" aria-hidden="true"></div>
        </div>
        <p><strong>Analytical Frontend Developer with a Background in Industrial Engineering and IT Strategy</strong></p>
        <p>
          I am a Frontend Developer skilled at creating logical, structured, and accessible applications. I excel at solving complex problems and delivering efficient solutions. My analytical skills and drive to produce precise, high-quality code make me a valuable asset in any project.
        </p>
      </SectionContainer>
    </section>
  )
}