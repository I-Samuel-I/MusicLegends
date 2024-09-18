import * as S from "./style"
import Title from "./Title"
import Nav from "./Nav"
import Perfil from "./Perfil"
export default function Menu (){
    return(
        <>
            <S.Menu>
               <Title/>
               <Nav/>
               <Perfil/>
            </S.Menu>
        </>
    )
}