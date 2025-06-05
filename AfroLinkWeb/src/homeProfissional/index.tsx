import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { fetchApiSolicitacoes } from "../services/fetchApi";

export default function HomeProfissional() {
  const [todasSolicitacoes, setTodasSolicitacoes] = useState([]);
  const { dadosUser, dadosTodosUsers } = useContext(Context);

  useEffect(() => {
    async function onLoad() {
      const dataSolicitacoesApi = await fetchApiSolicitacoes();
      setTodasSolicitacoes(dataSolicitacoesApi);
    }
    onLoad();
  }, []);

  const solicitacoesFilter = todasSolicitacoes.filter((item) => item.id_usuario_profissional === dadosUser?.id)

  const usuarioComum = dadosTodosUsers.filter((user) => user.tipo === "comum")

  return (
    <div>
      <h1>Solicitações Recebidas</h1>
      {solicitacoesFilter.map((item) => {
        const solicitante = usuarioComum.find((user) => user.id === item.id_usuario_comum);

        return (
          <div key={item.id}>
            <h2>Solicitante: {solicitante?.nome_completo || "Desconhecido"}</h2>
            <p>Data da solicitação: {item.data_solicitacao}</p>
            <p>Status: {item.status}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
