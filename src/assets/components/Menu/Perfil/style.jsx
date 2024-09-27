import styled from "styled-components";
export const Avatar = styled.div `
    display:flex;
    align-items:center;
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
    p:hover{
        display:flex;
        color: #c2c0c0;
        transition:0.5s;
        transform:scale(1.2);
        cursor: pointer;
    }
    img{
        border-radius:100px;
        width:48px;
        height:48px;
    }

    @media (767px < width <= 991px) {
        p{
            display:none;
        }
}
    @media (600px < width <= 767px) {
        p{
            display:none;
        }
}
    @media (width <= 600px) {
        p{
            display:none;
        }
}
`;