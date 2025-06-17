import { useContext, useEffect, useState } from 'react';
import SizeAvatars from '../../components/ui/sizeAvatars';
import Context from '../../context/Context';
import ButtonPreto from '../../components/ui/buttonPreto';
import { Star } from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import { useUsuarios } from '../../hooks/useUsuarios';
import './verMaisProfissional.css'

export default function VerMaisProfissional() {
  const { filtroIDProfissionalSelecionado } = useContext(Context);

  const [profissionalData, setProfissionalData] = useState([])

  const { handleSolicitar } = useUsuarios()


  useEffect(() => {
    async function onLoad() {
      const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?id=${filtroIDProfissionalSelecionado}`)
      const res = await req.json()
      setProfissionalData(res)
    }
    onLoad()
  }, [])

  return (
    <div className='containerPrincipal'>
      {profissionalData.map((profissional) => (
        <div key={profissional.id} className='containerPerfil'>
          <div className='containerPerfil_aside'>
            <SizeAvatars />
            <div className='containerPerfil_aside_div'>
              <h2>{profissional.nome_completo}</h2>
              <span>{profissional.profissao}</span>
              <span><Star sx={{ color: orange[900] }} /> Avaliações: {profissional.avaliacoes}</span>
            </div>
          </div>
          <div className='line'></div>
          <div className='containerPerfil_main'>
            <h3 className='containerPerfil_main_h3'>Sobre:</h3>
            <span className='containerPerfil_main_span'>{profissional.descricao}</span>
            <div className='containerPerfil_main_btn'>
              <ButtonPreto onClick={handleSolicitar} texto='Solicitar contato' />
            </div>
          </div>

        </div>
      ))}

    </div>
  )
}
