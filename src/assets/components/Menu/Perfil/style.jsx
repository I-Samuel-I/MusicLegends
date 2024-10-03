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
        font-weight: 400;
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
        bottom: 100%;
        left:10%;
        p{
            display:none;
        }
}
    @media (600px < width <= 767px) {
        bottom: 100%;
        left:10%;
        p{
            display:none;
        }
}
    @media (width <= 600px) {
        bottom: 100%;
        left:10%;
        p{
            display:none;
        }
        img{
            position:relative;
            left:20px;
            width:40px;
            height:40px;
            
        }
}
`;

export const GlobalToolTip = styled.div `
    position: relative;
    display: flex;
    
    img:hover{
        transform:scale(1.1);
        cursor: pointer;
    }
`;
export const ToolTip = styled.div`
    position: absolute;
    top: 65px;
    left:50%;
    transform: translateX(-45%);
    background-color: #2e2d2d;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9em;
    white-space: nowrap;
`;