import { createGlobalStyle } from 'styled-components';
import { theme } from 'src/themes/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  html {
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
    font: 300 1rem 'Work Sans', arial, sans-serif;

    body::-webkit-scrollbar {
      width: 10px;
    }

    body::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }

  body{
    width: 100%;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};

    .button-link {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      margin: 15px;
      border: none;
      border-radius: 5px;
      color: ${theme.colors.text};
      font: 500 1.5rem arial;
      background-image: linear-gradient(45deg, ${theme.colors.secondary}, ${theme.colors.primary});
      cursor: pointer;
      transition: ease-in-out all 0.5s;

      :hover {
        filter: brightness(150%);
      }
    }
  }
`;
