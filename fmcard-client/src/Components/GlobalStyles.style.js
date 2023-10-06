import { createGlobalStyle } from "styled-components";
import DINProBold from '../resource/font/DINPro-Bold.woff';
import DINProCondBold from '../resource/font/DINPro-CondBold.woff';
import PosteramaBold from '../resource/font/Posterama-Bold.ttf';
import theme from "./theme/theme";

export const GlobalStyles = createGlobalStyle`
    
    @font-face {
        font-family: 'DINProCondBold';
        src:url(${DINProCondBold}) format('woff');
    }

    @font-face {
        font-family: 'DINProBold';
        src:url(${DINProBold}) format('woff');
    }

    @font-face {
        font-family: 'Posterama';
        src: url(${PosteramaBold}) format('ttf'),
    }
    *{
        box-sizing: border-box;
        font-family: Montserrat,Helvetica,Arial,sans-serif;
    }
    
    body{
        background-color:${theme.primary.light};
        padding:0;
        margin:0;
        
    }
    .col-6{
        width:50%;
    }
    .card-border{
        border: 1px solid #414561;
        border-radius : 6px;
    }
    .text-center {
        text-align: center!important;
    }
    a{
        font-weight:300;
        color :${theme.text.contrastText};
        text-decoration: none;
        &:hover{
            cursor: pointer;
            text-decoration: underline
        }
    }
    .error-text{
    color: red;
    font-size: 12px;
  }

`