import { useContext } from 'react';
import Logo from '../assets/logo.svg';
import Context from '../context/Context';
export default function HomeComum() {
  
   
const {dadosUser} = useContext(Context);



  return (
    <div>
      <div>
        <img src="" alt="menu" />
        <img src="" alt="avatarUser" />
      </div>
      <img src={Logo} className='Logo' alt="" />
   
    <div >
      <input type="text" />
      <button>🔍</button>
    </div>

    <span>Alguns dos profissionais negros do Brasil</span>
    <div className='Flex '>
      <div className='Flex Border'>
        <img src="" alt="fotoUser" className='Border'/>
        <div>
          <h4>Nome Profissional</h4>
          <span>Profissão</span>
          <span><img src="" alt="" />(avaliação)</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet ab </p>
          
        </div>
      </div>
    </div>
    </div>
  )
}
