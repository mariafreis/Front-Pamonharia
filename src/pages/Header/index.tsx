import React from "react";
import { NavLink } from "react-router-dom";
import { Navegacao } from "./styles";
import sair from "../../assets/sairwhite.png";
import logo from "../../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <>
      <Navegacao>
        <ul>
          <li>
            <NavLink to="/inicio">
              {" "}
              <img src={logo} width="150px" alt="PamonhariaFrancana" />{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/estoque"> Estoque </NavLink>
          </li>
          <li>
            <NavLink to="/financas"> Finanças </NavLink>
          </li>
          <li>
            <NavLink to="/pessoas"> Pessoas </NavLink>
          </li>
          <li>
            <NavLink to="/usuarios"> Usuários </NavLink>
          </li>
          <li>
            <NavLink to="/"> Caixas </NavLink>
          </li>
          <li>
            <NavLink to="/"> Vendas </NavLink>
          </li>
          <li>
            <NavLink to="/rastreamento"> Rastreamento </NavLink>
          </li>
          <div>
            <li>
              <NavLink to="/">
                {" "}
                <img src={sair} width="45px" alt="Sair" />{" "}
              </NavLink>
            </li>
          </div>
        </ul>
      </Navegacao>
    </>
  );
};
