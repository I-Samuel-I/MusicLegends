import * as S from "./style"
import * as Icons from "../img/index"
import { useState } from "react"
export default function Display (){
    const [music, setMusic] = useState(1);
    const totalMusic = 20;
    
    const nextMusic = () => {
        if (music < totalMusic){
            setMusic(nextMusic => nextMusic + 1)
        }
    }
    const prevMusic = ()=> {
        if (music > 1){
            setMusic(prevMusic => prevMusic -1);
        }
    }
    return (
        <>
            
                <S.Display>
                    <S.Logo>
                        <img src={Icons.Logo} alt="Logo-Image"/>
                        <p>Riot Games</p>
                    </S.Logo>
                    <S.Details>
                        <img src={Icons.Prev1} alt="Prev-Image" onClick={prevMusic}/>
                        <p>{music}/{totalMusic}</p>
                        <S.ImageInverse>
                            <img src={Icons.Prev1} alt="Next-Image" onClick={nextMusic}/>
                        </S.ImageInverse>
                       
                    </S.Details>
                </S.Display>
               
                
           
        </> 
    )
}