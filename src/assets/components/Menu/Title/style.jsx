import styled from "styled-components";

export const Title = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100px;
    color:#eb4848;
    h1{
        font-weight:400;
        font-size:1.7em;
    }

    @media (767px < width <= 991px) {
        display:flex;
        justify-content:start;
        width:50%;
    }
    @media (600px < width <= 767px) {
        display:flex;
        justify-content:start;
        width:70%;
        
}
    @media (width <= 600px) {
        display:flex;
        justify-content:start;
        width:70%;
        
        h1{
            font-size:1.5em;
        }
      
}
`;