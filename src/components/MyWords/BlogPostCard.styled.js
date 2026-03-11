import styled from "styled-components";

export const Card = styled.article`
   width: 100%;
  max-width: 420px;
  margin: 0 auto 3rem;

  border-radius: 16px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: 0 6px 18px rgba(0,0,0,0.08);

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0,0,0,0.12);
  }
  `

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    min-height: 280px; 
  }

  .date {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 6px;
}

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0;
}

  p {
    margin-bottom: 0.6rem;
  }

  .preview {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #444;
    margin-top: 0.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    overflow: hidden;

    -webkit-mask-image: linear-gradient(180deg, black 70%, transparent);
    mask-image: linear-gradient(180deg, black 70%, transparent);
}
`

export const ArticleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 260px;
    height: 40px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    gap: ${({ theme }) => theme.spacing.md};
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 12px;
    margin-bottom: 1rem;
    margin-top: 1.2rem;
    align-self: center;
    transition: all 0.25s ease;

  &:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  background-color: #f8f8f8;
}
`

export const ModalOverlay = styled.div`
  position: fixed;
  backdrop-filter: blur(6px);
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  background: white;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 1.5rem;
  border-radius: 0.8rem;

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    max-width: 65ch;
  }

  button {
    margin-top: 1.5rem;
  }

    @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 600px;
    padding: 2.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 700px;
  }
`
export const ModalHeader = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: flex-end;

  background: transparent;
  padding-bottom: 0.5rem;

  z-index: 2;
`

export const CloseButton = styled.button`
  position: fixed;
  top: 12px;
  right: 24px;
  z-index: 1001;

  background: none;
  border: none;
  cursor: pointer;

  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  svg {
  width: 36px;
  height: 36px;
  stroke: rgba(255,255,255,0.9);
  stroke-width: 2;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
}
`

