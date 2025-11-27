import styled from "styled-components"

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;   /* ← vänster på mobil */
  text-align: left;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    align-items: center;     /* ← centrerat på tablet & desktop */
    text-align: center;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.25rem 0;
  }
`


export const ContactInfo = ({ name, phone, email, imageSrc }) => {
  return (
    <ContactInfoWrapper>

      <img src={imageSrc} alt={`Contact ${name}`} />

      <p>{name}</p>

      <p>
        <a href={`tel:${phone}`} className="contact-link">{phone}</a>
      </p>
      <p>
        <a href={`mailto:${email}`} className="contact-link">{email}</a>
      </p>
    </ContactInfoWrapper>
  )
}