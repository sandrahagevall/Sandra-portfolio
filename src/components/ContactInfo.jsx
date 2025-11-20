export const ContactInfo = ({ name, phone, email, imageSrc }) => {
  return (
    <div className="contact-info">
      <div className="contact-image">
        <img src={imageSrc} alt={`Contact ${name}`} />
      </div>

      <p><strong>{name}</strong></p>

      <p><strong>
        <a href={`tel:${phone}`} className="contact-link">{phone}</a>
      </strong></p>
      <p><strong>
        <a href={`mailto:${email}`} className="contact-link">{email}</a>
      </strong></p>
    </div>
  )
}