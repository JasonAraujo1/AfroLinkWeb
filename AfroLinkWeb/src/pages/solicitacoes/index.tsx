import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import './solicitacoes.css'

export default function Solicitacoes() {
  const { dadosUser, dadosSolicitacoes, setDadosSolicitacoes} = useContext(Context);

  const [usuariosComuns, setUsuariosComuns] = useState([])

  useEffect(() => {
    async function onLoad() {
      const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?tipo=comum`)
      const res = await req.json()
      setUsuariosComuns(res)

      const apiFetchSolic = await fetch("https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes");
      const data = await apiFetchSolic.json();
      setDadosSolicitacoes(data);
    }
    onLoad()
  }, [])

  const solicitacoesFilter = dadosSolicitacoes.filter(
    (item) => String(item.id_usuario_profissional) === String(dadosUser?.id)
  );
  console.log(solicitacoesFilter)
  return (
    <div>
      <h1 className="divH1">Ola, {dadosUser.nome_completo}</h1>
      <h2 className="divH2">Solicitações Recebidas:</h2>

      {solicitacoesFilter.length === 0 ? (
        <p>Nenhuma solicitação recebida ainda.</p>
      ) : (
        solicitacoesFilter.map((item) => {
          const solicitante = usuariosComuns.find(
            (user) => String(user.id) === String(item.id_usuario_comum)
          );

          return (
            <div key={item.id} className="solicitacaoCard">
              <h3>Solicitante: {solicitante?.nome_completo || "Desconhecido"}</h3>
              <p><strong>Data:</strong> {item.data_solicitacao}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <br />
            </div>
          );
        })
      )}

    </div>
  );
}
