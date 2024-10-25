import * as S from "./style";
import * as Icons from "../img/index";
import { useState } from "react";

export default function Footer() {
    const [playing, setPlaying] = useState(true);
    const [favorite, setFavorite] = useState(true);
    const [tooltip, setTooltip] = useState({
        aleatory: false,
        prev: false,
        play: false,
        next: false,
        repeat: false,
        expand: false,
        volume: false,
    });

    // Eventos para mostrar/ocultar tooltips
    const MouseEnter = (tooltipKey) => {
        setTooltip((prev) => ({ ...prev, [tooltipKey]: true }));
    };
    const MouseLeave = (tooltipKey) => {
        setTooltip((prev) => ({ ...prev, [tooltipKey]: false }));
    };

    // Eventos para mudança de imagem (ícone do coração)
    const FilledHeart = () => {
        return (
            <img src={Icons.Favorite} alt="Favorite-Img" onClick={toggleFavorite} />
        );
    };
    const OutLineHeart = () => {
        return (
            <img src={Icons.OutLineHeart} alt="Favorite-Img" onClick={toggleFavorite} />
        );
    };
    const toggleFavorite = () => {
        setFavorite(!favorite);
    };
    const togglePlay = () => {
        setPlaying(!playing);
    };

    return (
        <>
            <S.Options>
                <S.ProgressBar>
                <S.ProgressFill playing={playing} />
                <S.ProgressBall playing={playing} />
                </S.ProgressBar>
                <S.Favorite>
                    {favorite ? <FilledHeart /> : <OutLineHeart />}
                </S.Favorite>
                <S.Text>
                    <h4>Warriors</h4>
                    <p>Imagine Dragons</p>
                </S.Text>
                <S.Controls>
                    <S.GlobalToolTip>
                        {tooltip.aleatory && <S.ToolTip>Ativar Ordem Aleatória</S.ToolTip>}
                        <img
                            src={Icons.Aleatory}
                            alt="Aleatory-Img"
                            onMouseEnter={() => MouseEnter("aleatory")}
                            onMouseLeave={() => MouseLeave("aleatory")}
                        />
                    </S.GlobalToolTip>
                    <S.Prev>
                        <S.PrevWrapper>
                            {tooltip.prev && <S.ToolTip>Voltar</S.ToolTip>}
                            <img
                                src={Icons.Next}
                                alt="Prev-Img"
                                onMouseEnter={() => MouseEnter("prev")}
                                onMouseLeave={() => MouseLeave("prev")}
                            />
                        </S.PrevWrapper>
                    </S.Prev>
                    <S.Play onClick={togglePlay}>
                        <S.GlobalToolTip>
                            {tooltip.play && <S.ToolTip>{playing ? "Pause" : "Play"}</S.ToolTip>}
                            <img
                                src={playing ? Icons.Pause : Icons.Play}
                                alt={playing ? "Pause" : "Play"}
                                onMouseEnter={() => MouseEnter("play")}
                                onMouseLeave={() => MouseLeave("play")}
                            />
                        </S.GlobalToolTip>
                    </S.Play>
                    <S.GlobalToolTip>
                        {tooltip.next && <S.ToolTip>Avançar</S.ToolTip>}
                        <img
                            src={Icons.Next}
                            alt="Next-Img"
                            onMouseEnter={() => MouseEnter("next")}
                            onMouseLeave={() => MouseLeave("next")}
                        />
                    </S.GlobalToolTip>
                    <S.GlobalToolTip>
                        {tooltip.repeat && <S.ToolTip>Repetir</S.ToolTip>}
                        <img
                            src={Icons.Repeat}
                            alt="Repeat-Img"
                            onMouseEnter={() => MouseEnter("repeat")}
                            onMouseLeave={() => MouseLeave("repeat")}
                        />
                    </S.GlobalToolTip>
                    <S.Extra>
                        <S.GlobalToolTip>
                            {tooltip.volume && <S.ToolTip>Volume</S.ToolTip>}
                            <img 
                                src={Icons.Volume} alt="Volume-Img" 
                                onMouseEnter={() => MouseEnter("volume")}
                                onMouseLeave={() => MouseLeave("volume")}
                          />  
                        </S.GlobalToolTip>
                        
                        <S.GlobalToolTip>
                            {tooltip.expand && <S.ToolTip>Expandir</S.ToolTip>}
                            <img
                                src={Icons.Expanded}
                                alt="Expanded-Img"
                                onMouseEnter={() => MouseEnter("expand")}
                                onMouseLeave={() => MouseLeave("expand")}
                            />
                        </S.GlobalToolTip>
                    </S.Extra>
                </S.Controls>
            </S.Options>
        </>
    );
}
