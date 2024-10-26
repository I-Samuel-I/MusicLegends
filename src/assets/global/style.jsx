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
        background-image:  linear-gradient(to top, #131313 10%, rgba(0, 0, 0, 0) 45%) ,
        linear-gradient(to bottom, #131313 0%, rgba(0, 0, 0, 0) 20%),
        linear-gradient(rgba(77, 75, 75, 0.137), rgba(77, 75, 75, 0.137)),
        url(${BgImage});
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
                background-image:  linear-gradient(to top, #131313 30%, rgba(0, 0, 0, 0) 60%) ,
                linear-gradient(to bottom, #00000076 0%, rgba(0, 0, 0, 0) 25%),
                linear-gradient(rgba(77, 75, 75, 0.200), rgba(77, 75, 75, 0.200)),
                url(${BgImage});
            } 
    }
       
    @media (600px < width <= 767px) {
             
        body,html{
                background-repeat: no-repeat;
                background-size:1400px;
                background-image:  linear-gradient(to top, #131313 10%, rgba(0, 0, 0, 0) 45%) ,
                linear-gradient(to bottom, #131313 0%, rgba(0, 0, 0, 0) 20%),
                linear-gradient(rgba(77, 75, 75, 0.137), rgba(77, 75, 75, 0.137)),
                url(${BgImage});
            }  
    }  
   
    @media (767px < width <= 991px) {
        
        body,html{
            background-repeat: no-repeat;
            background-size:1400px;
            background-image:  linear-gradient(to top, #131313 10%, rgba(0, 0, 0, 0) 45%) ,
            linear-gradient(to bottom, #131313 0%, rgba(0, 0, 0, 0) 20%),
            linear-gradient(rgba(77, 75, 75, 0.137), rgba(77, 75, 75, 0.137)),
            url(${BgImage});
            
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