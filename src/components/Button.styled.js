import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 303px;
  height: 48px;
  padding: 8px 16px;
  gap: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;

  ${({ variant }) => variant === 'primary' && css`
    background-color: black;
    color: white;
    border: none;
  `}

  ${({ variant }) => variant === 'secondary' && css`
    background-color: white;
    color: black;
    border: 2px solid black;
  `}
`
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`