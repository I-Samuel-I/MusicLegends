import { useState } from "react";
import React from "react";
import * as S from "./style";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.NavBar>
        <S.MenuWrapper open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </S.MenuWrapper>
        <S.NavWrapper open={open}>
        <nav>
                <ul>
                    <li>
                        <a href="#" target="_blank">Início</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Buscar</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Minha Biblioteca</a>
                    </li>
                </ul>
            </nav>
        </S.NavWrapper>
      </S.NavBar>
    </>
  );
};
export default NavBar; 
