import styled from "styled-components";
import { shade } from "polished";

// Title representa o H1
export const Title = styled.h1`
  font-size: 48px;
  color: #457b1b;
  max-width: 900px;
  line-height: 56px;
  margin: 20px 10px 20px 50px;
`;

export const Title2 = styled.h2`
  font-size: 30px;
  color: whitesmoke;
  max-width: 900px;
  line-height: 56px;
  margin: 2px 10px 2px 10px;
`;
export const Linha = styled.h2`
  font-size: 30px;
  color: whitesmoke;
  max-width: 900px;
  line-height: 56px;
  margin: 2px 10px 2px 10px;
`;

export const Form = styled.form`
  width: 510px;
  height: auto;
  background-color: ${shade(0.2, "#457b1b")};
  padding: 10px;
  margin: 15px 10px 2px 50px;
  font-size: 16px;
  border-radius: 12px;
  border: 10px solid #457b1b;
  strong {
    color: whitesmoke;
    font-size: 20px;
  }
  div {
    margin-top: 10px;

    input {
      background-color: #457b1b;
      padding: 10px;
      width: 485px;
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
      height: 40px;
      background-color: #457b1b;
      border-radius: 10px;
      border: 2px solid #dac435;
      color: #dac435;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.2s;
      margin-left: 300px;
      &:hover {
        background-color: ${shade(0.2, "#dac435")};
      }
    }
  }
`;

export const Tabela = styled.div`
  width: 720px;
  height: auto;
  background-color: ${shade(0.2, "#457b1b")};
  padding: 10px;
  margin-left: 50px;
  font-size: 16px;
  border-radius: 12px;
  border: 10px solid #457b1b;
  strong {
    color: whitesmoke;
    font-size: 20px;
  }
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    color: whitesmoke;
    button {
      border: none;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
