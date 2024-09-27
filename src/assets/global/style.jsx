import { createGlobalStyle } from "styled-components";
import  BgImage   from "../images/Walpaper.png";
export const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }
    body,html{
        font-family: "Lexend", sans-serif;
        
        width:100%;
        background-image: url(${BgImage});
        background-size: cover; 
        background-position: center 30px;
        background-repeat: no-repeat;
        position:relative;
        overflow-y:hidden;
        overflow-x:hidden;
        background-color: #754a4a;

    }
`;