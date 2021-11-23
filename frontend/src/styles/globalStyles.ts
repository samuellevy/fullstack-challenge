import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
*,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border:0;
    list-style: none;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    position: relative;
  }

  p , input{
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;
  }

  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, label {
    font-family: 'Open Sans';
  }

  html{
    font-size: 62,5%; /* 1 rem = 10px */
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    background: ${colors.background};
  }
`;
