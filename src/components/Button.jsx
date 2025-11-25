import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 303px;
  height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  gap: ${({ theme }) => theme.spacing.md};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;

  background: ${({ theme, $variant }) =>
    $variant === "secondary" ? "transparent" : theme.colors.black};

  color: ${({ theme, $variant }) =>
    $variant === "secondary" ? theme.colors.black : theme.colors.white};
  border: ${({ theme, $variant }) =>
    $variant === "secondary" ? `1px solid ${theme.colors.black}` : "none"};

  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`

export const Button = ({ icon, children, variant = "primary" }) => {
  return (
    <StyledButton type="button" $variant={variant}>
      {icon && <Icon src={icon} alt="" />}
      {children}
    </StyledButton>
  )
} 