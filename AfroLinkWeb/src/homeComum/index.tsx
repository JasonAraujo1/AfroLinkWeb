import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import Context from '../context/Context';
import ModalBusca from '../components/modalBusca';


export default function HomeComum() {

  const { dadosUser, dadosTodosUsers } = useContext(Context);
  const [dadosProfissionais, setDadosProfissionais] = useState([]);

  useEffect(() => {

    const profissionaisFilter = dadosTodosUsers.filter(user => user.tipo === 'profissional')
    setDadosProfissionais(profissionaisFilter)
  }, [dadosTodosUsers]);





  return (
    <div className='FlexColumn'>
      <div>
        <img src="" alt="menu" />
        <img src="" alt="avatarUser" />
      </div>
      <img src={Logo} className='Logo' alt="" />

    

        
      <ModalBusca/>

      <span>Alguns dos profissionais negros do Brasil</span>
      <div className='Flex FlexColumn'>
        {dadosProfissionais.map((item) => (
          <div className='Flex Border'>
            <img src="" alt="fotoUser" className='Border' />
            <div>
              <h4>{item.nome_completo}</h4>
              <span>Profissão</span>
              <span><img src="" alt="" />(Avaliação)</span>
              <p>Texto descrição</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
