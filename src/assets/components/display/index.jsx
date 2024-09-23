import * as S from "./style"
import * as Icons from "../img/index"
export default function Display (){
    return (
        <>
            <S.BgImage>   
                <S.Display>
                    <S.Logo>
                        <img src={Icons.Logo} alt="Logo-Image"/>
                        <p>Riot Games</p>
                    </S.Logo>
                    <S.Details>
                        <img src={Icons.Prev1} alt="Prev-Image"/>
                        <p>1/20</p>
                        <S.ImageInverse>
                            <img src={Icons.Prev1} alt="Prev-Image"/>
                        </S.ImageInverse>
                       
                    </S.Details>
                </S.Display>
               
                
            </S.BgImage>
        </> 
    )
}