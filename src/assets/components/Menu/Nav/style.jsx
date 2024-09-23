import styled from "styled-components";

export const Nav = styled.nav`
    nav{
        display:flex; 
        position:relative;
        bottom:100px;
        width:100vw;
        height:100px;
    }
    ul{
        display:flex;
        align-items:center;
        list-style:none;
    }
    li{
        padding:20px;  
    }
    a{
        color:white;
        text-decoration:none;
    }
    a:hover{
        display:flex;
        color: #c2c0c0;
        transition:0.5s;
        transform:scale(1.2)
    }
`;
