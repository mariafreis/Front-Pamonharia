import React from "react";
import { Tabela, Title, Tela } from "./styles";
import { api } from "../../services/api";

export const Rastreamento: React.FC = () => {
  interface ICustomer {
    id?: string;
    name: string;
    cpf: string;
    celular: string;
    endereco: string;
  }

  const [actualCustomer, setActualCustomer] = React.useState<ICustomer>(
    {} as ICustomer
  );

  const [customers, setCustomers] = React.useState<ICustomer[]>([]);

  let config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzY1NjMyNDUsImV4cCI6MTYzNjY0OTY0NSwic3ViIjoiOGIwMDcwZWQtNTI3NS00NGYzLTlmYTctYmMxZTE5MGQyZmQwIn0.0L_Eln8NWSBwPYSFht7i6wUwjg9xhuLDPVvNo0uuiwM",
    },
  };
  React.useEffect(() => {
    try {
      api
        .get<ICustomer[]>(`/customers`, config)
        .then((response) => setCustomers(response.data));
    } catch {
      alert(`Problema ao consultar clientes`);
    }
  }, [customers]);

  return (
    <>
      <Tela>
        <Title> Rastreamento de vendedores </Title>
        <Tabela>
          <thead>
            <tr>
              <th> Cliente </th>
              <th> Telefone </th>
              <th> Endereço </th>
              <th> Rastrear Vendedor Próximo </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Luana Patricia </td>
              <td> (16)99159-8832 </td>
              <td> Rua José Marques Garcia, 479 </td>
              <td> Rastreando...</td>
            </tr>

            {customers.map((customer, index) => (
              <tr>
                <td> {customer.name} </td>
                <td> {customer.celular}</td>
                <td> {customer.endereco}</td>
                <td>
                  {" "}
                  <button>Rastrear</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Tabela>
      </Tela>
    </>
  );
};
