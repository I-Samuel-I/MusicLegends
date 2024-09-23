import styled from "styled-components";
import bgImage from "../../images/Walpaper.png"
export const BgImage  = styled.section `
    color:white;
    height:620px;
    width:100%;
    background-image: url(${bgImage});
    background-size: cover; 
    background-position: center -70px;
    background-repeat: no-repeat;
    position:relative;
    z-index: 1;   
`;
export const Display = styled.article`
    width:50%;
    height:auto; 
    margin-left:130px;
    transform:scale(0.9); 
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
    gap:20px;
    margin-top:20px;
    img{
        width:45 qpx;
    }
    p{
        font-size:1.3em;
    }
`;

export const ImageInverse = styled.div`
    transform: scale(-1)
`;