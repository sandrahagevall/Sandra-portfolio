import { StyledButton, Icon } from './Button.styled'

export const Button = ({ icon, children, variant = "primary" }) => {
  return (
    <StyledButton type="button" variant={variant}>
      {icon && <Icon src={icon} alt="" />}
      {children}
    </StyledButton>
  )
} 