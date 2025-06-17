import './homeComum.css';
import foto from "../../assets/userfoto.png"
import FooterHome from '../../components/footerHome';
import star from '../../assets/star.svg'
import { useUsuarios } from '../../hooks/useUsuarios';

export default function HomeComum() {

  const { dadosTodosUsers, handleVerMais } = useUsuarios()


  return (
    <div className='containerHome fade-in-scale fade-delay-1'>
      <span className='containerHome_span fade-in fade-delay-3'>
        Alguns dos nossos Profissionais pelo Brasil:
      </span>

      <div className='containerTodosPerfis fade-in-scale fade-delay-3'>
        <div className='containerTodosPerfis_div'>

          {
            dadosTodosUsers.map(e => (
              <div key={e.id}
                className={`containerPerfil fade-in-scale fade-delay-1`}
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
          }
        </div>

      </div>

      <FooterHome />
      <span className='containerHome_footer_span'>© 2025 AfroLink</span>
    </div>

  )
}
