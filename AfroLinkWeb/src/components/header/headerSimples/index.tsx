import { NavLink } from 'react-router';
import Logo from '../../../assets/logoWhite.png';
import './headerSimples.css'

export default function HeaderSimples() {

  return (
    <header className='headerHome headerSimples fade-delay-2'>
      <div className='topHeader fade-delay-3 '>
        <img src={Logo} className='Logo ' alt="" />
        <NavLink className='linkHome' to={'/'}>Home</NavLink>
      </div>
    </header>
  )
}