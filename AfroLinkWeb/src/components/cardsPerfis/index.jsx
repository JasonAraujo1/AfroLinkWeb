import './cardsPerfis.css'
import star from '../../assets/star.svg'
import fotoAvatar from "../../assets/userfoto.png"
import ButtonPreto from '../ui/buttonPreto'


export default function CardPerfis({ dados, funcaoClick }) {
    return (
        <div>
            <div className='containerTodosPerfis fade-in-scale fade-delay-3'>
                <div className='containerTodosPerfis_div'>
                    {dados.map(e => (
                        <div key={e.id}
                            className={`containerPerfis fade-in-scale fade-delay-1`}
                            onClick={() => funcaoClick?.(e.id)}
                        >
                            {e.foto && Object.keys(e.foto).length > 0 ? (
                                <img src={e.foto} alt="fotoUser" className='containerPerfil_fotoUser' />
                            ) : (
                                <img src={fotoAvatar} alt="fotoUser" className='containerPerfil_fotoUser fade-in-scale' />
                            )}
                            <div className='containerPerfil_div fade-in'>
                                <h4 className='containerPerfil_div_h4'>{e.nome_completo}</h4>
                                <span className='containerPerfil_div_span1'>{e.profissao}</span>
                                <span className='containerPerfil_div_span2'>
                                    <img className='containerPerfil_div_star' src={star} alt="" />
                                    <span> {e.avaliacoes} Avaliações</span>
                                </span>
                                <p className='containerPerfil_div_p'>{e.descricao}</p>
                                {e.tipo === 'comum' ? (
                                    <div className='divBtn'>
                                        <ButtonPreto onClick={''} texto="Aceitar" />
                                        <span className='divBtn_span1'>Ou</span>
                                        <span className='divBtn_span2'>Ver mais</span>
                                    </div>
                                ) : (
                                    <div className='divBtn'>
                                        <span className='span_solicitacao'>Solicitação: {e.status}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
