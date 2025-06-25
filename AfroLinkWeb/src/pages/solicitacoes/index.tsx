import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import './solicitacoes.css'
import CardPerfis from "../../components/cardsPerfis";
import { useParams } from "react-router";

export default function Solicitacoes() {
  const { dadosUser } = useContext(Context);
  const [dadosSolicitacoes, setDadosSolicitacoes] = useState([])

  const [setUsuariosComuns] = useState([])

  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?tipo=comum`)
      const res = await req.json()
      setUsuariosComuns(res)


      if (params.id) {
        const apiFetchUserComum = await fetch(
          `https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?id_usuario_profissional=${params.id}`
        );
        const dados = await apiFetchUserComum.json();
        setDadosSolicitacoes(dados);
      }

    }
    onLoad()
  }, [])
  const usuarioComum = dadosSolicitacoes.id_usuario_comum
  console.log(usuarioComum)

  return (
    <div>
      <h1 className="divH1">Ola, {dadosUser.nome_completo}</h1>
      <h2 className="divH2">Solicitações Recebidas:</h2>

      {dadosSolicitacoes.length === 0 ? (
        <p>Nenhuma solicitação recebida ainda.</p>
      ) : (
        <CardPerfis dados={dadosSolicitacoes}/>
          )
        }
     

    </div>
  );
}
