import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
    
  }

  body {
    background: ${(props) => props.theme.GRAY_950};
  }

  body, button, textarea, input {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme.GRAY_700};
  }
`
