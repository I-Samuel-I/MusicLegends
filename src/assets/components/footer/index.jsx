import * as S from "./style"
import * as Icons from "../img/index"
import { useState } from "react"
export default function Footer(){
    const [favorite, setFavorite] = useState (true);
    const [tooltip, setTooltip] = useState ({
        aleatory:false,
        prev: false,
        play: false,
        next: false,
        repeat: false,
        expand: false,
    }); 
    // Evento para dica de opções
    const MouseEnter = (tooltipKey) => {
        setTooltip((prev)=>({...prev,[tooltipKey]: true}));
    }
    const MouseLeave = (tooltipKey) => {
        setTooltip((prev)=>({...prev,[tooltipKey]: false}));
    }
   
    //Evento para mudança de imagem (coração)
    const FilledHeart = () => {
        return( 
            <img src ={Icons.Favorite} alt="Favorite-Img" onClick={toggleFavorite}/> 
        );
    };
    const OutLineHeart = () => {
        return(
            <img src ={Icons.OutLineHeart} alt ="Favorite-Img" onClick={toggleFavorite}/>
        );
    }
    const toggleFavorite = () => {
        setFavorite(!favorite)
    }
    
    return(
        <>
            <S.Options>
                <S.Favorite>
                    {favorite ? <FilledHeart/> : <OutLineHeart/>}
                </S.Favorite>
                <S.Text>
                    <h4>Warriors</h4>
                    <p>Imagine Dragons</p>  
                </S.Text>
                <S.Controls>
                    <S.GlobalToolTip>
                    {tooltip.aleatory && <S.ToolTip>Ativar Ordem Aleatória</S.ToolTip>}
                     <img src={Icons.Aleatory} alt="Aleatory-Img"
                        onMouseEnter={()=> MouseEnter("aleatory")}
                        onMouseLeave={()=> MouseLeave("aleatory")}
                        />  
                    </S.GlobalToolTip>
                     <S.Prev>
                        <S.PrevWrapper>
                        {tooltip.prev && <S.ToolTip>Voltar</S.ToolTip>}
                        <img src={Icons.Next} alt="Prev-Img"
                            onMouseEnter={()=> MouseEnter("prev")}
                            onMouseLeave={()=> MouseLeave("prev")}
                        />
                        </S.PrevWrapper>
                    </S.Prev> 
                    <S.Play>
                        <S.GlobalToolTip>
                            {tooltip.play && <S.ToolTip>Play</S.ToolTip>}
                             <img src={Icons.Play} alt = "Play-Img"
                                onMouseEnter={()=> MouseEnter("play")}
                                onMouseLeave={()=> MouseLeave("play")}
                             />
                        </S.GlobalToolTip>
                    </S.Play>
                    <S.GlobalToolTip>
                        {tooltip.next && <S.ToolTip>Avançar</S.ToolTip>}
                        <img src={Icons.Next} alt="Next-Img"
                            onMouseEnter={()=> MouseEnter("next")}
                            onMouseLeave={()=> MouseLeave("next")}
                        />
                    </S.GlobalToolTip>
                    <S.GlobalToolTip>
                        {tooltip.repeat && <S.ToolTip>Avançar</S.ToolTip>}
                        <img src={Icons.Repeat} alt="Repeat-Img"
                            onMouseEnter={()=> MouseEnter("repeat")}
                            onMouseLeave={()=> MouseLeave("repeat")}
                        />
                    </S.GlobalToolTip>
                    <S.Extra>
                        <img src={Icons.Volume} alt="Volume-Img"/>
                        <S.GlobalToolTip>
                            {tooltip.expand && <S.ToolTip>Expandir</S.ToolTip>}
                            <img src={Icons.Expanded} alt="Expanded-Img"
                                onMouseEnter={()=> MouseEnter("expand")}
                                onMouseLeave={()=> MouseLeave("expand")}
                            />
                        </S.GlobalToolTip> 
                    </S.Extra>
                </S.Controls>  
            </S.Options>
        </>
    )
}