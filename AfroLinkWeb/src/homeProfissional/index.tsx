import { useContext, useEffect, useState } from "react"
import Context from "../context/Context";
import { fetchApiSolicitacoes } from '../services/fetchApi'

export default function HomeProfissional() {

  const [todasSolicitacoes, setTodasSolicitacoes] = useState([]);

  const { dadosUser, dadosTodosUsers } = useContext(Context);
  

  useEffect(() => {
    async function onLoad() {
      const dataSolicitacoesApi = await fetchApiSolicitacoes()
      setTodasSolicitacoes(dataSolicitacoesApi)
    }
    onLoad()
  }, [])
  
  const solicitacoesFilter = todasSolicitacoes.filter((item)=>(item.id_usuario_profissional === dadosUser.id))
  const solicitacoesFilterUsuarioComum = todasSolicitacoes.map((item)=>(item.id_usuario_comum === dadosTodosUsers.id))
  
 console.log(dadosTodosUsers[14].id);


  
  return (
    <div>
      <h1></h1>
      {solicitacoesFilter.map((item) => (
        <div key={item.id}>
          <h2>Data da solicitação: {item.data_solicitacao}</h2>
          <p>{item.status}</p>
        </div>
      ))}
 
    </div>
  )
}
