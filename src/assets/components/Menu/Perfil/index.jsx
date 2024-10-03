import { useState } from "react";
import * as S from "./style";
import * as Icons from "../../img/index";

export default function Perfil() {
  const [tooltip, setTooltip] = useState({
    perfil: false,
  });

  const MouseEnter = (tooltipKey) => {
    setTooltip((prev) => ({ ...prev, [tooltipKey]: true }));
  };

  const MouseLeave = (tooltipKey) => {
    setTooltip((prev) => ({ ...prev, [tooltipKey]: false }));
  };

  return (
    <>
      <S.Avatar>
        <p> Samuel Gomes</p>

        <S.GlobalToolTip>
          {tooltip.perfil && <S.ToolTip>Samuel Gomes</S.ToolTip>} {/* Corrigido */}
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
