import * as S from "./style"
import * as Icons from "../img/index"
export default function Footer(){
    return(
        <>
            <S.Options>
                <S.Favorite>
                    <img src={Icons.Favorite} alt="Favorite-Img"/>
                </S.Favorite>
                <S.Text>
                    <h4>Warriors</h4>
                    <p>Imagine Dragons</p>  
                </S.Text>
               
                <S.Controls>
                    <img src={Icons.Aleatory} alt="Aleatory-Img"/>
                    <S.Prev>
                        <img src={Icons.Next} alt="Prev-Img"/>
                    </S.Prev> 
                    <S.Play>
                        <img src={Icons.Play} alt = "Play-Img"/>
                    </S.Play>
                    
                    <img src={Icons.Next} alt="Next-Img"/>
                    <img src={Icons.Repeat} alt="Repeat-Img"/>
                    <S.Extra>
                        <img src={Icons.Volume} alt="Volume-Img"/>
                        <img src={Icons.Expanded} alt="Expanded-Img"/> 
                    </S.Extra>
                   
                </S.Controls>
                
                
            </S.Options>
        </>
    )
}