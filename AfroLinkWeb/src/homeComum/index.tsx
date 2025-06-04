import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import Context from '../context/Context';
import ModalBusca from '../components/modalBusca';
import LetterAvatars from '../components/ui/letterAvatars';
import { useNavigate } from 'react-router';


export default function HomeComum() {


  const { dadosTodosUsers, filtros, setFiltroIDProfissionalSelecionado } = useContext(Context);

  const [dadosProfissionais, setDadosProfissionais] = useState([]);

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

  function handleVerMais(id) {
    const profissional = dadosTodosUsers.find(item => item.id === id);
    setFiltroIDProfissionalSelecionado(profissional)
    navigate('/verMais')
    
  }


  return (
    <div className='FlexColumn '>
      <div>
        <LetterAvatars />
      </div>
      <img src={Logo} className='Logo' alt="" />

      <div className='JustifyCenter'>
        <ModalBusca />
      </div>

      <span>Alguns dos profissionais negros do Brasil</span>
      <div className='Flex FlexColumn'  >
        {dadosProfissionais.map((item) => (
          <div className='Flex Border' onClick={() => handleVerMais(item.id)} >
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
