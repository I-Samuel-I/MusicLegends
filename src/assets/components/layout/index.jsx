import Display from "../display";
import Footer from "../footer";
import Header from "../header";
import Teste from "../teste";
import * as S from "./style"
export default function Layout(){
    return(
        <>
            <S.Layout>
                <Header/> 
                <Display/>
                <Footer/>
            </S.Layout> 
        </>
    )
}