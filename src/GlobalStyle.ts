// src/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    color-scheme: light dark;
    color: #3E2723;
    background-color: #FFFDE7;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: none;
  }

  a:hover {
    color: #535bf2;
  }

  ul, ol {
    list-style: none;
  }

  button, input, select, textarea {
    font: inherit;
    background: none;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
