import { useContext } from "react";
import Context from "../../context/Context";

export default function HomeProfissional() {
  const { dadosUser, dadosTodosUsers, dadosSolicitacoes } = useContext(Context);

  const solicitacoesFilter = dadosSolicitacoes.filter(
    (item) => String(item.id_usuario_profissional) === String(dadosUser?.id)
  );

  const usuariosComuns = dadosTodosUsers.filter((user) => user.tipo === "comum");

  return (
    <div>
      <h1>Ola, {dadosUser.nome_completo}</h1>
      <h2>Solicitações Recebidas:</h2>

      {solicitacoesFilter.map((item) => {
        const solicitante = usuariosComuns.find(
          (user) => String(user.id) === String(item.id_usuario_comum)
        );

        return (
          <div key={item.id}>
            <h3>Solicitante: {solicitante?.nome_completo || "Desconhecido"}</h3>
            <p>Data da solicitação: {item.data_solicitacao}</p>
            <p>Status: {item.status}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
