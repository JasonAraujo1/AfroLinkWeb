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
    <div className='containerHome'>
      <header className='headerHome'>
        <div className='topHeader'>
          <img src={Logo} className='Logo' alt="" />
          <div className='linksDiv'>
            <NavLink className='linksHeader' to={''}>Sou Profissional</NavLink>
            <NavLink className='linksHeader' to={''}>Login</NavLink>
          </div>
        </div>

        <h1 className='tituloHome'>
          ENCONTRE UM PROFISSIONAL<span className='tituloHome_span'>NEGRO</span>
        </h1>

        <DropDownBusca />
        <IconesHome />
      </header>

      <span className='containerHome_span'>Alguns dos nossos Profissionais pelo Brasil:</span>

      <div className='containerTodosPerfis'  >
        {dadosProfissionais.map((item) => (
          <div className='containerPerfil' onClick={() => handleVerMais(item.id)} >
            <img src={foto} alt="fotoUser" className='containerPerfil_fotoUser' />
            <div className='containerPerfil_div'>
              <h4 className='containerPerfil_div_h4'>{item.nome_completo}</h4>
              <span className='containerPerfil_div_span'>{item.profissao}</span>
              <span >
                <i class="biStar bi-star-fill" /><span>({item.avaliacoes} Avaliações)</span>
              </span>
              <p className='containerPerfil_div_p'>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
      <FooterHome />
    </div>
  )
}
