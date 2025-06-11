import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import Context from '../../context/Context';
import ModalBusca from '../../components/modalBusca';
import LetterAvatars from '../../components/ui/letterAvatars';
import { NavLink, useNavigate } from 'react-router';

import type { UserType } from '../../types/userType'

export default function HomeComum() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("HomeComum deve estar dentro do Provider do Contexto");
  }
  const { dadosTodosUsers, filtros, setFiltroIDProfissionalSelecionado } = context;


  const [dadosProfissionais, setDadosProfissionais] = useState<UserType[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const profissionaisFilter = dadosTodosUsers.filter(user => user.tipo === 'profissional');

    const filtroAplicado = profissionaisFilter.filter(user =>
      (!filtros?.profissao || user.profissao === filtros.profissao) &&
      (!filtros?.estado || user.estado === filtros.estado) &&
      (!filtros?.municipio || user.municipio === filtros.municipio)
    );

    setDadosProfissionais(filtroAplicado);

  }, [dadosTodosUsers, filtros]);

  function handleVerMais(id: string) {
    const profissional = dadosTodosUsers.find(item => item.id === id);
    console.log(profissional)

    if (profissional) {
      setFiltroIDProfissionalSelecionado(profissional)
      navigate('/verMais')
    }
  }


  return (
    <div className='FlexColumn '>
      <header >
        <div className='Flex '>
          <img src={Logo} className='Logo' alt="" />
          <div>
            <NavLink to={''}>Sou Profissional</NavLink>
            <NavLink to={''}>Login</NavLink>
          </div>
        </div>

        <h1>ENCONTRE SEU PROFISSIONAL NEGRO</h1>

        <ModalBusca />
      </header>

      <div className='Flex grid-container'  >
        {dadosProfissionais.map((item) => (
          <div className=' Border' onClick={() => handleVerMais(item.id)} >
            <img src="" alt="fotoUser" className='Border' />
            <div>
              <h4>{item.nome_completo}</h4>
              <span>{item.profissao}</span>
              <span><img src="" alt="" />(Avaliação)</span>
              <p>Texto descrição</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
