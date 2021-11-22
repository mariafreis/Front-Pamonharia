import React from "react";
import { Title, Title2, Form, Tabela, Linha } from "./styles";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { api } from "../../services/api";

export const Inicio: React.FC = () => {
  interface IMessage {
    id?: string;
    name: string;
    text: string;
  }

  const [actualMessage, setActualMessage] = React.useState<IMessage>(
    {} as IMessage
  );

  const [messages, setMessages] = React.useState<IMessage[]>([]);

  let config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzY1NjMyNDUsImV4cCI6MTYzNjY0OTY0NSwic3ViIjoiOGIwMDcwZWQtNTI3NS00NGYzLTlmYTctYmMxZTE5MGQyZmQwIn0.0L_Eln8NWSBwPYSFht7i6wUwjg9xhuLDPVvNo0uuiwM",
    },
  };

  React.useEffect(() => {
    try {
      api
        .get<IMessage[]>(`/messages`, config)
        .then((response) => setMessages(response.data));
    } catch {
      alert(`Problema ao consultar mensagens`);
    }
  }, [messages]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(actualMessage, {
      [e.target.name]: e.target.value,
    });

    setActualMessage(aux);
  }

  function addMessage(): void {
    if (!actualMessage.name) {
      alert(`Problema ao adicionar produtos`);
    } else if (!actualMessage.id) {
      try {
        api
          .post<IMessage>(`/messages`, actualMessage, config)
          .then((response) => alert(`Mensagem inserida com sucesso`));
        setActualMessage({} as IMessage);
      } catch {
        alert(`Problema ao inserir mensagem`);
      }
    } else {
      let updateMessage = {
        name: actualMessage.name,
        text: actualMessage.text,
      };
      try {
        api
          .put<IMessage>(`/messages/${actualMessage.id}`, updateMessage, config)
          .then((response) => alert(`Mensagem atualizada com sucesso`));
        setActualMessage({} as IMessage);
      } catch {
        alert(`Problema ao atualizar mensagem`);
      }
    }
  }

  function deleteMessage(id: string | undefined): void {
    const resp = window.confirm(
      `Tem certeza que deseja realizar a exclusão dessa mensagem?`
    );
    if (resp) {
      try {
        api
          .delete<IMessage>(`/messages/${id}`, config)
          .then((response) => alert(`Mensagem removida com sucesso! `));
        setActualMessage({} as IMessage);
      } catch {
        alert(`Problema ao remover mensagem`);
      }
    }
  }

  function updateMessage(message: IMessage | undefined): void {
    if (message) {
      const aux = message;
      setActualMessage(aux);
    }
  }

  return (
    <>
      <Title>Olá, Seja Bem Vindo!</Title>

      <Tabela>
        <Title2>Recados Importantes</Title2>
        <table>
          <thead></thead>
          <tbody>
            {messages.map((message, index) => (
              <tr>
                <td>
                  {" "}
                  {message.text} <Linha></Linha> Por:
                  {message.name}{" "}
                  <button onClick={() => deleteMessage(message.id)}>
                    {" "}
                    <AiFillDelete />{" "}
                  </button>{" "}
                  <button onClick={() => updateMessage(message)}>
                    {" "}
                    <AiFillEdit />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Tabela>
      <Form>
        <Title2>Escrever Novo Recado</Title2>
        <div>
          <input
            name="name"
            value={actualMessage.name}
            placeholder="Nome"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="text"
            value={actualMessage.text}
            placeholder="Informe a o recado que deseja deixar para que todos vejam!"
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={addMessage} type="submit">
            Salvar
          </button>
        </div>
      </Form>
    </>
  );
};
