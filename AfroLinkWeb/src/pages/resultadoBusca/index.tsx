import { useContext } from "react"
import Context from "../../context/Context"
import { useUsuarios } from "../../hooks/useUsuarios"
import foto from "../../assets/userfoto.png"
import star from '../../assets/star.svg'

export default function ResultadoBusca() {
    const { profissionalEscohidoInput } = useContext(Context)

    if (!Array.isArray(profissionalEscohidoInput)) {
        return <p>Nenhum dado carregado.</p>
    }

    if (profissionalEscohidoInput.length === 0) {
        return <p>Nenhum profissional encontrado.</p>
    }
  const { handleVerMais } = useUsuarios()

    return (
        <div className='containerHome fade-in-scale fade-delay-1'>
             {profissionalEscohidoInput.map((item) => (
            <span className='containerHome_span fade-in fade-delay-3'>
              
                <div key={item.id}>
                    <h1>Profissionais encontrados:</h1>
                </div>
 
            </span> ))}

            <div className='containerTodosPerfis fade-in-scale fade-delay-3'>
                <div className='containerTodosPerfis_div'>
                    {profissionalEscohidoInput.map(e => (
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
                    }
                </div>
            </div>
        </div>

    )
}
