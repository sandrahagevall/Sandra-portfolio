import { Heading } from './Heading.jsx'
import { ContactInfo } from './ContactInfo.jsx'
import { SectionContainer } from './SectionContainer.jsx'
import { IconButton } from './IconButton.jsx'

export const Contact = () => {
  return (
    <section>
      <SectionContainer>
        <Heading>Let's Talk</Heading>
        <ContactInfo
          name="Sandra Hagevall"
          phone="+46(0)703 15 53 85"
          email="sandrahagevall@hotmail.com"
          imageSrc="/images/contactimg.png"
        />
        <IconButton icon="/images/linkedin.svg" url="https://www.linkedin.com/in/sandra-hagevall-8001b5183/" label="LinkedIn" />
        <IconButton icon="/images/gitcontact.svg" url="https://github.com/sandrahagevall" label="GitHub" />
        <IconButton icon="/images/instagram.svg" url="https://www.instagram.com/sandrahagevall/" label="Instagram" />
      </SectionContainer>
    </section>
  )
}