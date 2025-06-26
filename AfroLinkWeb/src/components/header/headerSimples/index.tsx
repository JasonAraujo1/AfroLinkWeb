import { NavLink } from 'react-router';
import Logo from '../../../assets/logoWhite.png';
import './headerSimples.css'
import Context from '../../../context/Context';
import { useContext } from 'react';
import MenuLateral from '../../menuLateral/menuLateral';


export default function HeaderSimples() {
  const { dadosUser } = useContext(Context);

  return (
    <header className='headerHome headerSimples fade-delay-2'>
      <div className='topHeaderSimples fade-delay-3'>
        <div className='logoAndLink fade-delay-3 fade-in-left'>
          <img src={Logo} className='Logo' alt="" />
          <NavLink className='linkHome' to={'/'}>Home</NavLink>
        </div>
        <div className='linksDiv fade-in-left fade-delay-4'>
          {dadosUser ? (
            <div className='containerNomeSair'>
              <span className='userNome'>Olá, {dadosUser.nome_completo}</span>
              <span className='linha'></span>
              <MenuLateral />
            </div>
          ) : (
            <>
              <NavLink className='linksHeader fade-in-left fade-delay-5' to={'/cadastro'}>
                Cadastro
              </NavLink>
              <NavLink className='linksHeader fade-in-left fade-delay-5' to={'/login'}>
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}