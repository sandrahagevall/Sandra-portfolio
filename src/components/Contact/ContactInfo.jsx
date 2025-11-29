import styled from "styled-components"

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `

export const ContactImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  
  
  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 150px;
    height: 150px;
}
`

export const TextContainer = styled.div`
  width: 100%;
  text-align: left;

  p {
    margin: 0.25rem 0;
    padding: 0 12px;
}

.contact-link {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s ease;
  }

  .contact-link:hover {
    text-decoration: underline;
    opacity: 0.7;
  }
  
  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: center;
}
`


export const ContactInfo = ({ name, phone, email, imageSrc }) => {
  return (
    <ContactInfoWrapper>

      <ContactImage src={imageSrc} alt={`Contact ${name}`} />

      <TextContainer>
        <p>{name}</p>
        <p>
          <a href={`tel:${phone}`} className="contact-link">{phone}</a>
        </p>
        <p>
          <a href={`mailto:${email}`} className="contact-link">{email}</a>
        </p>
      </TextContainer>
    </ContactInfoWrapper>
  )
}