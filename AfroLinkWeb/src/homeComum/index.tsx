import { useContext, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import Context from '../context/Context';
export default function HomeComum() {
  
   
  
  const {dadosUser} = useContext(Context);
  const {dadosTodosUsers} = useContext(Context);
useEffect(() => {
  const dadosTodosUsers = JSON.parse(localStorage.getItem("dadosUsers") || "[]");
  const profissionais = dadosTodosUsers.filter(user => user.tipo === 'profissional');
  console.log(profissionais);
}, []);


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
          <h4>{dadosUser?.nome_completo}</h4>
          <span>Profissão</span>
          <span><img src="" alt="" />(Avaliação)</span>
          <p>Texto descrição</p>
          
        </div>
      </div>
    </div>
    </div>
  )
}
