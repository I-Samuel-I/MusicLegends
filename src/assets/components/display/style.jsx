import styled from "styled-components";

export const Display = styled.article`
    color:white;
    width:50%;
    margin-left:130px;
    transform:scale(0.9); 

    @media (767px < width <= 991px) {
    
    width:100%;
    margin-left:-40px;
    transform:scale(0.8);
}
    @media (600px < width <= 767px) {
        width:100%;
        margin-left:0px;
        transform:scale(0.8);
}  
    @media (width <= 600px) {
        width:100%;
        margin-left:0px;
        transform:scale(0.8);
}
`;
export const Logo = styled.div`
    img{
        margin-top:300px;
    }
    p{  
        margin-top:20px;
        font-size:1.4em;
    }
`;

export const Details = styled.section`
    display:flex;
    align-items:center;
    gap:15px;
    margin-top:20px;
    img{
        width:40px;
    }
    p{
        font-size:1.5em;
    }
`;

export const ImageInverse = styled.div`
    transform: scale(-1)

    
`;