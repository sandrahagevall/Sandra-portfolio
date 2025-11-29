import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 303px;
  height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  gap: ${({ theme }) => theme.spacing.md};
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;

  background: ${({ theme, $variant }) =>
    $variant === "secondary" ? "transparent" : theme.colors.primary};

  color: ${({ theme, $variant }) =>
    $variant === "secondary" ? theme.colors.primary : theme.colors.secondary};
  border: ${({ theme, $variant }) =>
    $variant === "secondary" ? `1px solid ${theme.colors.primary}` : "none"};

  transition: 0.2s ease-in-out;

  /* Smooth transition for hover and focus ring */
  transition: opacity 0.18s ease-in-out, box-shadow 0.12s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline: none;
  }

  /* Use focus-visible so mouse users aren't shown the ring; adapt ring by variant */
  &:focus-visible {
    outline: none;
    box-shadow: ${({ $variant, theme }) =>
    $variant === "secondary"
      ? "0 0 0 3px rgba(0,0,0,0.85)"
      : `0 0 0 3px ${theme.colors.accent}`};
    outline-offset: 2px;
  }
`

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`

export const Button = ({ icon, children, variant = "primary", as: asProp, href, target, rel, ariaLabel, ...rest }) => {
  // Render as an anchor when 'as="a"' is passed or when 'href' exists.
  return (asProp === "a" || href) ? (
    <StyledButton
      as="a"
      href={href}
      target={target}
      rel={rel}
      $variant={variant}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon && <Icon src={icon} alt="" />}
      {children}
    </StyledButton>
  ) : (
    <StyledButton type="button" $variant={variant} {...rest}>
      {icon && <Icon src={icon} alt="" />}
      {children}
    </StyledButton>
  )
}