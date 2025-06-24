import { useEffect, useState } from 'react';
import SizeAvatars from '../../components/ui/sizeAvatars';

import ButtonPreto from '../../components/ui/buttonPreto';
import star from '../../assets/star.svg'
import { useUsuarios } from '../../hooks/useUsuarios';
import './verMaisProfissional.css'
import { useParams } from 'react-router';

export default function VerMaisProfissional() {
  const [profissionalData, setProfissionalData] = useState(null)
  const { handleSolicitar } = useUsuarios()

  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      if (params.id) {
        const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users/${params.id}`)
        const res = await req.json()
        setProfissionalData(res)
      }
    }
    onLoad()
  }, [])

  return (
    <div className='containerPrincipal'>
      {
        profissionalData ? (
          <div className='containerPerfil'>
            <div className='containerPerfil_aside'>
              <SizeAvatars />
              <div className='containerPerfil_aside_div'>
                <h2 className='containerPerfil_aside_h2'>{profissionalData.nome_completo}</h2>
                <span className='containerPerfil_aside_profissao'>{profissionalData.profissao}</span>
                <span className='containerPerfil_aside_avaliacao'>
                  <img className='containerPerfil_div_star' src={star} alt="" /> {profissionalData.avaliacoes}
                  <span>Avaliações</span>
                </span>
              </div>
            </div>
            <div className='line'></div>
            <div className='containerPerfil_main'>
              <h3 className='containerPerfil_main_h3'>Sobre:</h3>
              <span className='containerPerfil_main_span'>{profissionalData.descricao}</span>
              <div className='containerPerfil_main_btn'>
                <ButtonPreto onClick={handleSolicitar} texto='Solicitar Contato' />
              </div>
            </div>
          </div>
        ) : <p>Página não foi possivel ser encontrada. Erro 404.</p>
      }

    </div>
  )
}
