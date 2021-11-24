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
export const Title3 = styled.h1`
  font-size: 24px;
  color: whitesmoke;
  margin: 20px 10px 10px 0px;
`;

export const Tela = styled.body`
  display: inline-flexbox;
  float: inline-end;
  align-items: stretch;
`;

export const Produto = styled.h3`
  color: whitesmoke;
  margin: 15px 10px 0px 50px;
`;

export const Formulario = styled.form`
  width: 700px;
  height: 500px;
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
      margin-left: 50px;
      margin-top: 20px;
      margin-bottom: 15px;
      background-color: #489141;
      padding: 10px;
      width: 550px;
      border: 1px solid #dac435;
      outline: 0;
      border-radius: 12px;
      text-align: center;
      color: whitesmoke;
      ::placeholder {
        color: whitesmoke;
      }
    }
    button {
      width: 400px;
      height: 40px;
      background-color: #489141;
      border-radius: 10px;
      border: 2px solid #dac435;
      color: whitesmoke;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-top: 25px;
      margin-left: 222px;
      &:hover {
        background-color: ${shade(0.2, "#489141")};
      }
    }
  }
`;

export const Tabela = styled.table`
  width: 700px;
  height: 535px;
  background-color: ${shade(0.2, "#489141")};
  padding: 3px;
  margin: 5px 10px 10px 100px;
  font-size: 16px;
  border-radius: 12px;
  border: 10px solid #489141;
  text-align: center;
  th {
    padding: 10px;
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
  }
  td {
    border-bottom: 1px solid #dac435;
    color: whitesmoke;
  }
  input {
    background-color: #489141;
    padding: 10px;
    width: 200px;
    border: 1px solid #dac435;
    outline: 0;
    border-radius: 12px;
    text-align: center;
    color: whitesmoke;
    ::placeholder {
      color: whitesmoke;
    }
  }
  button {
    width: 120px;
    margin-top: 25px;
    background-color: #489141;
    border-radius: 10px;
    border: 2px solid #dac435;
    color: whitesmoke;
    font-size: 15px;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, "#489141")};
    }
  }
`;
