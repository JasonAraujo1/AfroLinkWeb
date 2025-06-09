import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import { fetchApiSolicitacoes } from "../../services/fetchApi";

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
  const usuarioComumSolicitante = solicitacoesFilter.filter((item) => item.id_usuario_comum === dadosTodosUsers?.id);

console.log("solicitacoesFilter:", solicitacoesFilter);
console.log("usuarioComumSolicitante:", usuarioComumSolicitante);

  return (
    <div>
      <h1>Ola, {dadosUser.nome_completo}</h1>
      
      <h2>Solicitações Recebidas:{usuarioComumSolicitante}</h2>
      

      
          <div >
            <h3>Solicitante: </h3>
            <p>Data da solicitação: </p>
            <p>Status: </p>
            <br />
          </div>
       
     
    </div>
  );
}
