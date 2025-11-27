import { Heading } from './Heading.jsx'
import { ContactInfo } from './ContactInfo.jsx'
import { SectionContainer } from './SectionContainer.jsx'
import { IconButton } from './IconButton.jsx'
import styled from 'styled-components'

export const ContactWrapper = styled.section`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.secondary};
`
export const SocialWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  justify-content: center;  /* ← centrera ikonerna */
`;

export const Contact = () => {
  return (
    <ContactWrapper>
      <SectionContainer>
        <Heading>Let's Talk</Heading>
        <ContactInfo
          name="Sandra Hagevall"
          phone="+46(0)703 15 53 85"
          email="sandrahagevall@hotmail.com"
          imageSrc="/images/contactimg.png"
        />
        <SocialWrapper>
          <IconButton icon="/images/linkedin.svg" url="https://www.linkedin.com/in/sandra-hagevall-8001b5183/" label="LinkedIn" />
          <IconButton icon="/gitcontact.svg" url="https://github.com/sandrahagevall" label="GitHub" />
        </SocialWrapper>
      </SectionContainer>
    </ContactWrapper>
  )
}