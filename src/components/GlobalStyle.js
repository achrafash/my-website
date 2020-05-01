import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor: ${props => (props.theme.isDark ? `#2f3640` : `#fbd759`)};
    --secondaryColor: ${props => (props.theme.isDark ? `#fbd759` : `#2f3640`)};
    --fontColor: ${props => props.theme.fontColor};
    --fontNegativeColor: ${props => (props.theme.isDark ? `black` : `white`)};
    --shadow: ${props => (props.theme.isDark ? `black` : `grey`)};
    --link: ${props => (props.theme.isDark ? `#fbd759` : `#d35400`)};
  }
`
