import { createGlobalStyle } from "styled-components"

export const Globalstyle = createGlobalStyle`

  :root {
    --gray-600: #333;
    --white: #fff;

  }
  
  * {
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
`