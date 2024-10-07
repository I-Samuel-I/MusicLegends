import styled from "styled-components";

export const Options = styled.footer`
    display:flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height:80px;
    background-color: #131313;     
    color:white;
    
    img{
        width:35px;   
    }
    
    @media (width <= 600px) {
        display:flex;
        flex-direction:column;
        height:150px;
       
        img{
            width:45px;
        }
}   
`;

export const Favorite = styled.div`
    display:flex;
    padding-left:165px;
    padding-right:20px;
    
    @media (767px < width <= 991px) {
        padding-left:10px;
    }
    @media (600px < width <= 767px) {
        padding-left:10px;
}

    @media (width <= 600px) {
        display:none;
}
`;
export const Controls = styled.div`
    width:100%;
    display:flex;
    align-items: center; 
    img{
        
        margin-left:10px;
    }
    
    @media (width <= 600px) {
        display:flex;
        justify-content:center;
        border:solid 1px;
        img{
            margin-left:25px;
        }
    }
    
`;

export const Text = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    font-size:1.1em;
    width:40%;
    p{
        font-size:0.9em;
    }
   
    @media (width <= 600px) {
        padding:20px;
        width:100%;
        p{
            font-weight:300;
        }
        h4{
            font-weight:500;
        }
}   
`;

export const Prev = styled.div `
    transform: scale(-1);
    display:flex;
    margin-right:5px;
`;

export const Play = styled.div `
    display:flex;
    justify-content:center;
    border-radius:50px;
    width:40px;
    height:40px;
    background-color: #191919;
    border: solid 1px #1E1E1E; 
    &:hover{
        transform: scale(1.09);
    }
    img{
        width:25px;
        margin-left:0px;
    }

    @media (width <= 991px) {
        width: 40px;
        height:40px;
    }

    @media (600px < width <= 767px) {
        width: 45px;
        height:40px;
        img{
            width:23px;
        }
}
    @media (width <= 600px) {
        img{
            width:30px;
        }
    }
`;

export const Extra = styled.div ` 
    display:flex;
    width:60%;
    padding-left:160px;
    img{
       margin-left:45px;
    }
    
    @media (767px < width <= 991px) {
        padding-left:100px;
    }
    @media (600px < width <= 767px) {
        padding-left:10px;
}
    @media (width <= 600px) {
        display:none;
    }
`;

export const GlobalToolTip = styled.div` 
    @media (width >= 992px){
        position: relative;
        display: flex;
    
        img:hover{
            transform:scale(1.09);
            cursor: pointer;
        } 
    @media (width <= 991px){
        display:none;
    }
}
   
`;

export const ToolTip = styled.div`
    @media (width >= 992px){
        position: absolute;
        bottom: 50px;
        left:50%;
        transform: translateX(-45%);
        background-color: #2e2d2d;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.9em;
        white-space: nowrap;
    }
   
    @media (width <= 991px){
        display:none;
    }
`;

export const PrevWrapper = styled.div `
    position: relative;
    display: flex;
    transform:scale(-1);
    img{
        transform: scale(-1);
    }
    img:hover{
        transform:scale(-1.1)
        
    }
`;