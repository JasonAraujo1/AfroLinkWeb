import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import './solicitacoes.css';
import CardPerfis from "../../components/cardsPerfis";
import { useParams } from "react-router";

export default function Solicitacoes() {
  const { dadosUser, dadosTodosUsers } = useContext(Context);
  const [dadosSolicitacoes, setDadosSolicitacoes] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      if (params.id) {
        const apiFetchUserComum = await fetch(
          `https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?id_usuario_profissional=${params.id}`
        );
        const dados = await apiFetchUserComum.json();
        setDadosSolicitacoes(dados);
      }
    }
    onLoad();
  }, [params.id]);

  const usuariosComSolicitacoes = dadosSolicitacoes.map((item) => {
    const usuario = dadosTodosUsers.find(
      (user) => String(user.id) === String(item.id_usuario_comum)
    );
    return {
      ...item,
      nome_completo: usuario?.nome_completo || "Usuário não encontrado",
      foto: usuario?.foto || {},
    };
  });

  console.log("Usuários com solicitações:", usuariosComSolicitacoes);

  return (
    <div>
      <h1 className="divH1">Olá, {dadosUser?.nome_completo || "Usuário"}</h1>
      <h2 className="divH2">Solicitações Recebidas:</h2>

      {usuariosComSolicitacoes.length === 0 ? (
        <p>Nenhuma solicitação recebida ainda.</p>
      ) : (
        <CardPerfis dados={usuariosComSolicitacoes} />
      )}
    </div>
  );
}
