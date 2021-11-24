import React from "react";
import { Title2 } from "../Inicio/styles";
import { Title, Formulario, Tabela, Tela, Produto, Title3 } from "./styles";
import trash from "../../assets/trashwhite.png";

export const Vendas: React.FC = () => {
  return (
    <>
      <Title>Vendas</Title>
      <Tela>
        <Formulario>
          <div>
            <Title2> Nova Venda</Title2>
            <input type="text" name="cliente" placeholder="Juliana Dias" />
          </div>
          <div>
            <Produto>
              Produto ________________________ Quantidade __________________
              Valor
            </Produto>
            <Produto>
              Pamonha Doce ______________________ 2 _______________________ 5,50
            </Produto>
            <Produto>
              Pamonha Salgada ___________________ 2 _______________________ 5,50
            </Produto>
            <Produto>
              Cural Medio _________________________ 1 _______________________
              6,00
            </Produto>
          </div>
          <div>
            <input name="produto" placeholder="Adicionar Mais Produtos + " />
          </div>
          <div>
            <button type="submit">Salvar</button>
          </div>
        </Formulario>

        <Tabela>
          <thead>
            <Title2> Resumo da Venda </Title2>
            <tr>
              <th> Produto </th>
              <th> Quantidade </th>
              <th> Total </th>
              <th> Remover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Pamonha Doce </td>
              <td> 2</td>
              <td> 11,00</td>
              <td>
                <img src={trash} width="20px" alt="Trash" />
              </td>
            </tr>
            <tr>
              <td> Pamonha Salgada </td>
              <td> 2</td>
              <td> 11,00</td>
              <td>
                <img src={trash} width="20px" alt="Trash" />
              </td>
            </tr>
            <tr>
              <td> Cural Médio </td>
              <td> 1</td>
              <td> 6,00</td>
              <td>
                <img src={trash} width="20px" alt="Trash" />
              </td>
            </tr>
            <tr>
              <td> Total Venda </td>
              <td> 5 </td>
              <td> 27,00</td>
              <td></td>
            </tr>
            <tr>
              <div>
                <Title2> Forma de Pagamento</Title2>
                <input
                  name="Cartão de Credito"
                  placeholder="Cartão de Credito __ 27,00"
                />
              </div>
              <div>
                <button type="submit">Adicionar +</button>
              </div>
              <div>
                <button type="submit">Concluir</button>
              </div>
            </tr>
          </tbody>
        </Tabela>
      </Tela>
    </>
  );
};
