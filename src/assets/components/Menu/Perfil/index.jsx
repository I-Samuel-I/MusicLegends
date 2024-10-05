import { useState } from "react";
import * as S from "./style";
import * as Icons from "../../img/index";

export default function Perfil() {
  const [tooltip, setTooltip] = useState({
    perfil: false,
  });

  const MouseEnter = (tooltipKey) => {
    setTooltip((perfil) => ({ ...perfil, [tooltipKey]: true }));
  };

  const MouseLeave = (tooltipKey) => {
    setTooltip((perfil) => ({ ...perfil, [tooltipKey]: false }));
  };

  return (
    <>
      <S.Avatar>
        <p> Samuel Gomes</p>
        <S.GlobalToolTip>
          {tooltip.perfil && <S.ToolTip>Samuel Gomes</S.ToolTip>} 
          <img
            src={Icons.Perfil}
            alt="Perfil_IMG"
            onMouseEnter={() => MouseEnter("perfil")}
            onMouseLeave={() => MouseLeave("perfil")}
          />
        </S.GlobalToolTip>
      </S.Avatar>
    </>
  );
}
