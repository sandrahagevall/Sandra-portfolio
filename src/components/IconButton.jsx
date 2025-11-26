import styled from "styled-components"

const StyledIconButton = styled.a`
 width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    filter: brightness(0) invert(1); /* gör ikon vit */
  }
`

export const IconButton = ({ icon, url, label }) => {
  return (
    <StyledIconButton href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <img src={icon} alt="" />
    </StyledIconButton>
  )
}