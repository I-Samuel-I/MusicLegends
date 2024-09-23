import styled from "styled-components";

export const Options = styled.footer`
    display:flex;
    background-color: #131313;     
    width:100%;
    height:75px;
    color:white;
    position:relative;
    z-index:2;
    img{
        width:35px;
        
    }
  
`;
export const Favorite = styled.div`
    display:flex;
    padding-left:165px;
    padding-right:20px;
`;

export const Controls = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between; 
    align-items: center; 
    padding-left:200px;
    img{
        
        
    }
`;
export const Text = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    font-size:1.1em;
    
    p{
        font-size:0.9em;
    }
`;
export const Prev = styled.div `
    transform: scale(-1);
`;
export const Play = styled.div `
    display:flex;
    justify-content:center;
    border-radius:50px;
    width:50px;
    height:50px;
    background-color: #191919;
    border: solid 1px #1E1E1E;
`;
export const Extra = styled.div ` 
    display:flex;
    
    width:60%;
    padding-left:175px;
    img{
       margin-left:45px;
    }
`;