import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }
    body,html{
        font-family: "Lexend", sans-serif;
        height:100vh;
        overflow-y:hidden;
        overflow-x:hidden;
        background-color: #754a4a;

    }
`;