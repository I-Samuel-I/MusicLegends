import styled from "styled-components";
export const Avatar = styled.div `
    display:flex;
    justify-content:center;
    position:relative;
    height:100px;
    bottom:200px;
    width:20%;
    margin-left:auto;
   
    
    p{
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        display:flex;
        align-items:center;
        padding-right:15px;
        color:white; 
    }
    img{
        display:flex;
        justify-content:center;
        border-radius:100px;
        width:48px;
        height:48px;
    }
`;