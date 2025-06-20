import { NavLink } from 'react-router';
import Logo from '../../../assets/logoWhite.png';
import DropDownBusca from '../../../components/dropDownBusca';
import IconesHome from '../../../components/iconesHome';
import Context from '../../../context/Context';
import { useContext } from 'react';
import './header.css'

export default function Header() {
    const context = useContext(Context);

    if (!context) {
        throw new Error("HomeComum deve estar dentro do Provider do Contexto");
    }
    const { setDadosUser } = context;


    // function handleSair() {
    //     setDadosUser(null)
    //     localStorage.removeItem("userEncontrado");
    //     // navigate('/');
    // }

    return (
        <header className='headerHome fade-delay-2'>
            <div className='topHeader fade-delay-3'>
                <img src={Logo} className='Logo' alt="" />

                <div className='linksDiv fade-in-left fade-delay-4'>
                    <div className='headerContainer_right'>
                        <span className='spanHeader'>Olá,</span>
                        <button onClick={() => { }} className='buttonHeader_sair'>Sair</button>
                    </div>

                    <>
                        <NavLink className='linksHeader fade-in-left fade-delay-5' to={'/cadastro'}>
                            Sou Profissional
                        </NavLink>
                        <NavLink className='linksHeader fade-in-left fade-delay-5' to={'/login'}>
                            Login
                        </NavLink>
                    </>
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