import { NavLink } from 'react-router';
import Logo from '../../../assets/logoWhite.png';
import DropDownBusca from '../../../components/dropDownBusca';
import IconesHome from '../../../components/iconesHome';
import Context from '../../../context/Context';
import { useContext } from 'react';
import './header.css'

export default function Header() {

    const { dadosUser } = useContext(Context);


    // function handleSair() {
    //     localStorage.removeItem("userEncontrado");
    //     // navigate('/');
    // }

    return (
        <header className='headerHome fade-delay-2'>
            <div className='topHeader fade-delay-3'>
                <img src={Logo} className='Logo' alt="" />

                <div className='linksDiv fade-in-left fade-delay-4'>
                    {dadosUser ? (
                        <span className='userNome'>Olá, {dadosUser.nome_completo}</span>
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

            <h1 className='tituloHome '>
                ENCONTRE UM PROFISSIONAL<span className='tituloHome_span'>NEGRO</span>
            </h1>

            <div className='fade-in-scale fade-delay-3'>
                <DropDownBusca />
                <IconesHome />
            </div>
        </header>
    )
}