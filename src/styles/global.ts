import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%;
    background-color: #182446;
    position: relative;
    scroll-behavior: smooth;
  }

  html, body, #__next{
    margin:0 auto;
    height: 100%;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    max-width:150rem;
  
  }
`
export default GlobalStyles
