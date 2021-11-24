import styled from "styled-components";
import { shade } from "polished";

// Title representa o H1
export const Title = styled.h1`
  font-size: 48px;
  color: #489141;
  max-width: 900px;
  line-height: 56px;
  margin: 20px 10px 10px 50px;
`;

export const Tela = styled.body`
  display: inline-flexbox;
  float: inline-end;
  align-items: stretch;
`;

export const Formulario = styled.form`
  width: 500px;
  height: 320px;
  background-color: ${shade(0.2, "#489141")};
  padding: 10px;
  margin: 5px 10px 10px 50px;
  font-size: 16px;
  border-radius: 12px;
  border: 7px solid #489141;
  strong {
    color: whitesmoke;
    font-size: 20px;
  }
  div {
    margin-top: 10px;

    input {
      margin-left: 12px;
      background-color: #489141;
      padding: 10px;
      width: 450px;
      border: 1px solid #dac435;
      outline: 0;
      border-radius: 12px;
      text-align: start;
      color: whitesmoke;
      ::placeholder {
        color: whitesmoke;
      }
    }
    button {
      width: 120px;
      height: 40px;
      background-color: #489141;
      border-radius: 10px;
      border: 2px solid #dac435;
      color: #dac435;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-left: 366px;
      &:hover {
        background-color: ${shade(0.2, "#489141")};
      }
    }
  }
`;

export const Tabela = styled.table`
  width: 910px;
  height: auto;
  background-color: ${shade(0.2, "#489141")};
  padding: 3px;
  margin: 5px 10px 10px 50px;
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
    padding: 20px;
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
  }
  button {
    background-color: ${shade(0.2, "#489141")};
    border: none;
    align-items: center;
  }
`;
