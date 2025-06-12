import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logoWhite.png';
import Context from '../../context/Context';
import DropDownBusca from '../../components/dropDownBusca';
import './homeComum.css';
import { NavLink, useNavigate } from 'react-router';
import foto from "../../assets/userfoto.png"
import type { UserType } from '../../types/userType'
import IconesHome from '../../components/iconesHome';
import FooterHome from '../../components/footerHome';
import star from '../../assets/star.svg'

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
    <div className='containerHome fade-in-scale fade-delay-1'>
      {dadosProfissionais.map((item, index) => (
        <>
          <header className='headerHome fade-delay-2'>

            <div className='topHeader fade-delay-3'>
              <img src={Logo} className='Logo' alt="" />

              <div className='linksDiv fade-in-left fade-delay-4'>
                {item?.nome_completo ? (
                  <span className='linksHeader'>Olá, {item.nome_completo}</span>
                ) : (
                  <>
                    <NavLink className='linksHeader fade-in-left fade-delay-5' to={'/cadastro'}>Sou Profissional</NavLink>
                    <NavLink className='linksHeader fade-in-left fade-delay-5' to={'/login'}>Login</NavLink>
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

          <span className='containerHome_span fade-in fade-delay-3'>
            Alguns dos nossos Profissionais pelo Brasil:
          </span>

          <div className='containerTodosPerfis fade-in-scale fade-delay-3'>

            <div
              className={`containerPerfil fade-in-scale fade-delay-${(index % 5) + 1}`}
              onClick={() => handleVerMais(item.id)}
            >
              <img src={foto} alt="fotoUser" className='containerPerfil_fotoUser fade-in-scale' />
              <div className='containerPerfil_div fade-in'>
                <h4 className='containerPerfil_div_h4'>{item.nome_completo}</h4>
                <span className='containerPerfil_div_span1'>{item.profissao}</span>
                <span className='containerPerfil_div_span2'>
                  <img className='containerPerfil_div_star' src={star} alt="" />
                  <span>({item.avaliacoes} Avaliações)</span>
                </span>
                <p className='containerPerfil_div_p'>" {item.descricao} "</p>
              </div>
            </div>

          </div>

          <FooterHome />
          <span className='containerHome_footer_span'>© 2025 AfroLink</span>
        </>
      ))}
    </div>

  )
}
