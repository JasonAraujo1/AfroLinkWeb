import { useEffect, useState } from "react"
import { useUsuarios } from "../../hooks/useUsuarios"
import foto from "../../assets/userfoto.png"
import star from '../../assets/star.svg'
import { useLocation } from "react-router"
import { fetchProfissao } from "../../services/fetchApi"



export default function ResultadoBusca() {
    const [data, setData] = useState([])

    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const estado = query.get("estado");
    const cidade = query.get("municipio");
    const profissao = query.get("profissao");


    useEffect(() => {
        const load = async () => {
            if (profissao) {
                const req = await fetchProfissao(profissao)
                setData(req)
            }
        }

        load()
    }, [])


    const { handleVerMais } = useUsuarios()

    return (
        <div className='containerHome fade-in-scale fade-delay-1'>
            <div className='containerTodosPerfis fade-in-scale fade-delay-3'>
                <div className='containerTodosPerfis_div'>
                    {data.map(e => (
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
