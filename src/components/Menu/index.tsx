import React from "react";
import { FcReuse } from "react-icons/fc";
import image from "assets/img/image 8.png";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <nav>
        <div>
          <Link to="/">
            <h1>Cadastra-se</h1>
          </Link>
        </div>
        <div className="direita">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar</Link>
            </li>
          </ul>
        </div>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
