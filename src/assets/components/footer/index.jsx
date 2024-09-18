import * as S from "./style"
import * as Icons from "../img/index"
export default function Footer(){
    return(
        <>
            <S.Options>
                <img src={Icons.Favorite} alt="-Img"/>
                <p>Warriors</p>
                <p>Imagine Dragons</p>
            </S.Options>
        </>
    )
}