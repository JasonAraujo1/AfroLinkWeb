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
  const usuarioComumFind = dadosTodosUsers.filter((item) => item.id === solicitacoesFilter.id_usuario_comum )
  console.log('TESTE', usuarioComumFind)

  
  return (
    <div>
      <h1></h1>
      {solicitacoesFilter.map((item) => (
        <div key={item.id}>
          <h2>{item.data_solicitacao}</h2>
          <p>{item.status}</p>
        </div>
      ))}
 
    </div>
  )
}
