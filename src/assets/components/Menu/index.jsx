import * as S from "./style"
import Title from "./Title"
import Nav from "./Nav"
import Perfil from "./Perfil"
import NavBar from "../NavBar"
export default function Menu (){
    return(
        <>
            <S.Menu>
                <Title/>
                <Nav/>
                <NavBar/>
                <Perfil/> 
            </S.Menu>
        </>
    )
}