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
      if (!params.id) return;

      const url =
        dadosUser?.tipo === 'comum'
          ? `https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?id_usuario_comum=${params.id}`
          : `https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?id_usuario_profissional=${params.id}`;

      const response = await fetch(url);
      const dados = await response.json();
      setDadosSolicitacoes(dados);

    }

    onLoad();
  }, [params.id, dadosUser?.tipo]);





  const usuariosSolicitacoes = dadosSolicitacoes.map((item) => {
    const idParaBuscar = dadosUser?.tipo === 'comum'
      ? item.id_usuario_profissional
      : item.id_usuario_comum;

    const usuario = dadosTodosUsers.find(
      (user) => String(user.id) === String(idParaBuscar)
    );

    return {
      ...item,
      nome_completo: usuario?.nome_completo || "Usuário não encontrado",
      foto: usuario?.foto || {},
      tipo: usuario?.tipo || (dadosUser?.tipo === 'comum' ? 'profissional' : 'comum'),
    };
  });


 

  return (
    <div>
      <h1 className="divH1">Olá, {dadosUser?.nome_completo || "Usuário"}</h1>
      {dadosUser.tipo === 'comum' ? (
        <h2 className="divH2">Solicitações feitas</h2>
      ) : (
        <h2 className="divH2">Solicitações recebidas</h2>
      )}


      {usuariosSolicitacoes.length === 0 ? (
        <p>Nenhuma solicitação recebida ainda.</p>
      ) : (
        <CardPerfis dados={usuariosSolicitacoes} />
      )}
    </div>
  );
}
