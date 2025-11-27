import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  /* Prevent horizontal overflow during responsive debugging */
  /* html, body {
    overflow-x: hidden;
  }

  main {
    width: 100%;
  } */

  a {
    text-decoration: none;
    color: inherit;
  }
`