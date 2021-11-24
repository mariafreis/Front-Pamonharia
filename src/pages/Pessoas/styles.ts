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

export const Title2 = styled.h2`
  font-size: 30px;
  color: whitesmoke;
  max-width: 900px;
  line-height: 56px;
  margin: 2px 10px 2px 10px;
`;

export const Tela = styled.body`
  display: inline-block;
`;

export const Formulario = styled.form`
  width: 767px;
  height: 320px;
  background-color: ${shade(0.2, "#489141")};
  padding: 10px;
  margin: 30px 10px 10px 30px;
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
      width: 660px;
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
      margin-left: 290px;
      &:hover {
        background-color: ${shade(0.2, "#489141")};
      }
    }
  }
`;

export const Tabela = styled.table`
  width: 800px;
  height: 750px;
  background-color: ${shade(0.2, "#489141")};
  padding: 0px;
  margin: 5px 10px 10px 30px;
  font-size: 16px;
  border-radius: 12px;
  border: 7px solid #489141;
  text-align: center;
  th {
    margin-left: 12px;
    padding: 5px;
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
  }
  td {
    margin-left: 12px;
    padding: 0px;
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
  }
  button {
    background-color: ${shade(0.2, "#489141")};
    border: none;
    align-items: center;
  }
`;
