import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Prata&display=swap");
  :root {
    --yellow: #fbd759;
    --carbon: #2f3640;
    --mainColor: ${props => (props.theme.isDark ? `#2f3640` : `#fbd759`)};
    --secondaryColor: ${props => (props.theme.isDark ? `#fbd759` : `#2f3640`)};
    --fontColor: ${props => props.theme.fontColor};
    --fontNegativeColor: ${props => (props.theme.isDark ? `black` : `white`)};
    --shadow: ${props => (props.theme.isDark ? `black` : `grey`)};
    --link: ${props => (props.theme.isDark ? `#fbd759` : `#d35400`)};
    --prata: "Prata", serif;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-position: inside;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
  }
  body {
    font-size: 16px;
  }
  @media only screen and (min-width: 990px) {
    body {
      font-size: 20px;
    }
  }
`
