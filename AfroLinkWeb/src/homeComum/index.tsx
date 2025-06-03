import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import Context from '../context/Context';
import ModalBusca from '../components/modalBusca';
import LetterAvatars from '../components/ui/letterAvatars';


export default function HomeComum() {

  const { dadosUser, dadosTodosUsers, filtros } = useContext(Context);

  const [dadosProfissionais, setDadosProfissionais] = useState([]);
  useEffect(() => {

    const profissionaisFilter = dadosTodosUsers.filter(user => user.tipo === 'profissional');

    const filtroAplicado = profissionaisFilter.filter(user =>
      (!filtros?.profissao || user.profissao === filtros.profissao) &&
      (!filtros?.estado || user.estado === filtros.estado) &&
      (!filtros?.municipio || user.municipio === filtros.municipio)
    );

    setDadosProfissionais(filtroAplicado);

  }, [dadosTodosUsers, filtros]);


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
      <div className='Flex FlexColumn'>
        {dadosProfissionais.map((item) => (
          <div className='Flex Border'>

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
