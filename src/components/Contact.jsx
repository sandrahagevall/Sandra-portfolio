import { Heading } from './Heading.jsx'
import { ContactInfo } from './ContactInfo.jsx'

export const Contact = () => {
  return (
    <section>
      <Heading>Let's Talk</Heading>
      <ContactInfo
        name="Sandra Hagevall"
        phone="+46(0)703 15 53 85"
        email="sandrahagevall@hotmail.com"
        imageSrc="/images/contactimg.png"
      />
      <div className="social-links">

      </div>
    </section>
  )
}