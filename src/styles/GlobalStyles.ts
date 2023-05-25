import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';

export const GlobalStyles = createGlobalStyle`

  // Resize font size to get rem equal 10px
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  // Global styles
  body {
    font-family: 'Overpass', Arial, sans-serif;
    background-color: ${({theme}) => theme.background};
  }


`;