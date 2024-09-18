import * as S from "./style"
import * as Icons from "../img/index"
export default function Display (){
    return (
        <>
            <S.Display>   
                <img src={Icons.Logo} alt="Logo-Image"/>
                <p>Riot Games</p>
                <div>
                    <img src={Icons.Prev1} alt="Prev-Image"/>
                    <p>1/20</p>
                    <img src={Icons.Prev1} alt="Prev-Image"/>
                </div>
                
            </S.Display>
        </> 
    )
}