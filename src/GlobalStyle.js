import { createGlobalStyle } from "styled-components"
import fundo from "./assets/Fundo.jpg"


export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif; 
    }

    body{
        background-image: url(${fundo});
        background-position: top center;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-color: #1E3B41;
      }

      a:hover{
        cursor: pointer;
        color: #F88050;
        font-weight: bold;
      }

      h2{
        color: #F88050;
      }
    `