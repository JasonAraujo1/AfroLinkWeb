import { useContext } from 'react';
import SizeAvatars from '../../components/ui/sizeAvatars';
import Context from '../../context/Context';
import ButtonPreto from '../../components/ui/buttonPreto';
import { Star } from '@mui/icons-material';
import { orange } from '@mui/material/colors';

export default function VerMaisProfissional() {
  const { filtroIDProfissionalSelecionado, dadosUser } = useContext(Context);

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
      id_usuario_comum:dadosUser.id,
      id_usuario_profissional:filtroIDProfissionalSelecionado.id,
      status: "pendente",
    }
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
    console.log(dadosUser.id)
  }

  return (
    <div className='FlexColumn'>
      <SizeAvatars />
      <h2>{filtroIDProfissionalSelecionado.nome_completo}</h2>
      <span>{filtroIDProfissionalSelecionado.profissao}</span>
      <span><Star sx={{ color: orange[900] }} />Avaliações:{filtroIDProfissionalSelecionado.avaliacoes}</span>

      <h3>Sobre</h3>
      <span>{filtroIDProfissionalSelecionado.descricao}</span>
      <ButtonPreto onClick={handleSolicitar} texto='Solicitar contato' />
    </div>
  )
}
