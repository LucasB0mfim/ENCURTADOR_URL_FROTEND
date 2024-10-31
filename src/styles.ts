import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  white: '#fff',
  black: '#181818',
  blackLight: '#3d3d3d',
  green: '#649a6f'
}

export const breakpoints = {
  fullHd: '1360px'
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    color: ${colors.white};
    background: ${colors.black};
  }
`


export default GlobalStyle
