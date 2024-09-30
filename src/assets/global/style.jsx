import { createGlobalStyle } from "styled-components";
import  BgImage   from "../images/Walpaper.png";
export const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }
    body,html{
        font-family: "Lexend", sans-serif;
        width:100%;
        background-image: url(${BgImage});
        background-size: cover; 
        background-position: center 30px;
        background-repeat: no-repeat;
        position:relative;
        overflow-y:hidden;
        overflow-x:hidden;
        background-color: #c74848;

    }
    
    
   
    
    @media (width <= 600px) {
         
        body,html{
                background-repeat: no-repeat;
                background-size:1800px;
                
            } 
    }
       
    @media (600px < width <= 767px) {
             
    body,html{
                background-repeat: no-repeat;
                background-size:1400px;
                
            }  
    }  
   
    @media (767px < width <= 991px) {
        
        body,html{
            background-repeat: no-repeat;
            background-size:1400px;
            
        }  
    } 
        
    @media (991px < width <= 1199px) {
        
        body,html{
            background-position: center 50px;
            background-repeat: no-repeat;
            background-size:1300px;
            
        }    
}
        @media (width >= 1200px) {
            body,html{
                background-size:cover;
            }

}
`;