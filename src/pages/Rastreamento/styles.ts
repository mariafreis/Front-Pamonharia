import styled from "styled-components";
import { shade } from "polished";
import rastreia from "../../assets/rastreia.png";

// Title representa o H1
export const Title = styled.h1`
  font-size: 48px;
  color: #489141;
  max-width: 900px;
  line-height: 56px;
  margin: 20px 10px 10px 50px;
`;

export const Tela = styled.body`
  background: #dac435 fixed url(${rastreia}) no-repeat 89%;
`;
export const Ajuste = styled.tr``;

export const Tabela = styled.table`
  width: 890px;
  height: auto;
  background-color: ${shade(0.2, "#489141")};
  padding: 0px;
  margin: 25px 10px 30px 50px;
  font-size: 16px;
  border-radius: 12px;
  border: 10px solid #489141;
  text-align: center;
  th {
    padding: 20px;
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
    text-align: center;
  }
  button {
    width: 120px;
    height: 60px;
    background-color: #489141;
    border-radius: 10px;
    border: 2px solid #dac435;
    color: whitesmoke;
    font-size: 20px;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-left: 20px;
    &:hover {
      background-color: ${shade(0.2, "#489141")};
    }
  }
`;
