import './homeComum.css';
import foto from "../../assets/userfoto.png"
import FooterHome from '../../components/footerHome';
import star from '../../assets/star.svg'
import { useUsuarios } from '../../hooks/useUsuarios';
import { useContext } from 'react';
import Context from '../../context/Context';

export default function HomeComum() {
  const { handleVerMais } = useUsuarios()
  
  const { dadosTodosUsers, filtros } = useContext(Context);

  const profissionaisFiltrados = dadosTodosUsers.filter((user) => {
    const matchEstado = !filtros?.estado || user.estado === filtros.estado;
    const matchMunicipio = !filtros?.municipio || user.municipio === filtros.municipio;
    const matchProfissao = !filtros?.profissao || user.profissao === filtros.profissao;
    return matchEstado && matchMunicipio && matchProfissao;
  });

  return (
    <div className='containerHome fade-in-scale fade-delay-1'>
      <span className='containerHome_span fade-in fade-delay-3'>
        Alguns dos nossos Profissionais pelo Brasil:
      </span>

      <div className='containerTodosPerfis fade-in-scale fade-delay-3'>
        <div className='containerTodosPerfis_div'>
          {
            profissionaisFiltrados.length > 0 ? (
              profissionaisFiltrados.map(e => (
                <div key={e.id}
                  className={`containerPerfis fade-in-scale fade-delay-1`}
                  onClick={() => handleVerMais(e.id)}           
                >
                  <img src={foto} alt="fotoUser" className='containerPerfil_fotoUser fade-in-scale' />
                  <div className='containerPerfil_div fade-in'>
                    <h4 className='containerPerfil_div_h4'>{e.nome_completo}</h4>
                    <span className='containerPerfil_div_span1'>{e.profissao}</span>
                    <span className='containerPerfil_div_span2'>
                      <img className='containerPerfil_div_star' src={star} alt="" />
                      <span> {e.avaliacoes} Avaliações</span>
                    </span>
                    <p className='containerPerfil_div_p'>{e.descricao}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum profissional encontrado com os filtros selecionados.</p>
            )
          }
        </div>
      </div>

      <FooterHome />
      <span className='containerHome_footer_span'>© 2025 AfroLink</span>
    </div>
  );
}
