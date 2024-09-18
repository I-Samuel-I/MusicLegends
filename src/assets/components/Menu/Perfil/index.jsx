import * as S from "./style"
import * as Icons from "../../img/index"
export default function Perfil (){
    return(
        <>
            <S.Avatar>
                <p> Samuel Gomes</p>
                <img src={Icons.Perfil} alt="Perfil_IMG"></img>
            </S.Avatar>
        </>
    )
}