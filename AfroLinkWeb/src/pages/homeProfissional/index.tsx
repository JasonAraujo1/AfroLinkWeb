import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import './homeProfissional.css'

export default function HomeProfissional() {
  const { dadosUser, dadosSolicitacoes } = useContext(Context);

  const[usuariosComuns , setUsuariosComuns] = useState([])
  
    useEffect(()=>{
     async function onLoad(){
       const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?tipo=comum`)
       const res = await req.json()
       setUsuariosComuns(res)
     }
     onLoad() 
    },[])

  const solicitacoesFilter = dadosSolicitacoes.filter(
    (item) => String(item.id_usuario_profissional) === String(dadosUser?.id)
  );

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
