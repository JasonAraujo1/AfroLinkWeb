import { useContext, useEffect, useState } from 'react';
import SizeAvatars from '../../components/ui/sizeAvatars';
import Context from '../../context/Context';
import ButtonPreto from '../../components/ui/buttonPreto';
import { Star } from '@mui/icons-material';
import { orange } from '@mui/material/colors';

export default function VerMaisProfissional() {
  const { filtroIDProfissionalSelecionado, dadosUser } = useContext(Context);

  const [profissionalData, setProfissionalData] = useState([])

  async function handleSolicitar() {

    const dataHora = new Date();
    const dataFormatada = dataHora.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })

    const data = {
      data_solicitacao: dataFormatada,
      id_usuario_comum: Number(dadosUser.id),
      id_usuario_profissional: Number(filtroIDProfissionalSelecionado.id),
      status: "pendente",
    };

    const url = "https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes"

    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await req.json()

    alert("Solicitação feita!")
  }

  useEffect(() => {
    async function onLoad() {
      const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?id=${filtroIDProfissionalSelecionado}`)
      const res = await req.json()
      setProfissionalData(res)
    }
    onLoad()
  }, [])
  console.log("profissionalData", profissionalData)

  return (
    <div className=''>
      {profissionalData.map((profissional) => (
        <div key={profissional.id}>
          <SizeAvatars />
          <h2>{profissional.nome_completo}</h2>
          <span>{profissional.profissao}</span>
          <span><Star sx={{ color: orange[900] }} /> Avaliações: {profissional.avaliacoes}</span>

          <h3>Sobre</h3>
          <span>{profissional.descricao}</span>
          <ButtonPreto onClick={handleSolicitar} texto='Solicitar contato' />
        </div>
      ))}

    </div>
  )
}
