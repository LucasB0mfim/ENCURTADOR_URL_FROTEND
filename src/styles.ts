import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  white: '#fff',
  black: '#001e2b',
  blackLight: '#3d3d3d',
  green: '#00ed64',
  greenDark: '#00684a'
}

export const breakpoints = {
  mobileSmall: '480px',
  mobileLarge: '700px',
  tablet: '1024px',
  desktop: '1440px',
  fullHd: '1920px'
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background: ${colors.black};
  }
`


export default GlobalStyle
