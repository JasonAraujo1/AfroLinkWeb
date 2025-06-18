import { useContext, useEffect, useState } from 'react';
import SizeAvatars from '../../components/ui/sizeAvatars';
import Context from '../../context/Context';
import ButtonPreto from '../../components/ui/buttonPreto';
import star from '../../assets/star.svg'
import { useUsuarios } from '../../hooks/useUsuarios';
import './verMaisProfissional.css'

export default function VerMaisProfissional() {
  const { profissionalId } = useContext(Context);

  const [profissionalData, setProfissionalData] = useState([])

  const { handleSolicitar } = useUsuarios()


  useEffect(() => {
    async function onLoad() {
      const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?id=${profissionalId}`)
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
              <h2 className='containerPerfil_aside_h2'>{profissional.nome_completo}</h2>
              <span className='containerPerfil_aside_profissao'>{profissional.profissao}</span>
              <span className='containerPerfil_aside_avaliacao'>
                <img className='containerPerfil_div_star' src={star} alt="" /> {profissional.avaliacoes} 
                <span>Avaliações</span>
              </span>
            </div>
          </div>
          <div className='line'></div>
          <div className='containerPerfil_main'>
            <h3 className='containerPerfil_main_h3'>Sobre:</h3>
            <span className='containerPerfil_main_span'>{profissional.descricao}</span>
            <div className='containerPerfil_main_btn'>
              <ButtonPreto onClick={handleSolicitar} texto='Solicitar Contato' />
            </div>
          </div>

        </div>
      ))}

    </div>
  )
}
