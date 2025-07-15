import { useContext, useEffect, useState } from 'react';
import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
import { useParams } from 'react-router';
import FotoPerfil from '../../components/ui/fotoPerfil';
import users from '../../assets/users.svg';
import Context from '../../context/Context';
import avatarFoto from '../../assets/userfoto.png';
import editar from '../../assets/edit.svg';
import { useUsuarios } from '../../hooks/useUsuarios';
import FormMinhaConta from '../../components/formMinhaConta';

export default function MinhaConta() {

  const [solicitacoes, setSolicitacoes] = useState([])

  const [disabledEdit, setDisabledEdit] = useState(true)

  const { dadosTodosUsers , profissionalData, setProfissionalData } = useContext(Context);

  const { handleConfirm } = useUsuarios();


  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      if (params.id) {
        const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users/${params.id}`)
        const res = await req.json()
        setProfissionalData(res)

        if (res.tipo === 'profissional') {
          const reqSol = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?id_usuario_profissional=${params.id}`)
          const resSol = await reqSol.json()
          setSolicitacoes(resSol)
        } else {
          // Se não for um profissional, buscar solicitações de usuários comuns
          const reqSol = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?id_usuario_comum=${params.id}`)
          const resSol = await reqSol.json()
          setSolicitacoes(resSol);
        }
      }
    }
    onLoad()
  }, [params.id])


  const interacoes = solicitacoes.map(s => {
    const id = profissionalData.tipo === 'profissional' ? s.id_usuario_comum : s.id_usuario_profissional
    const u = dadosTodosUsers.find(d => d.id == id)
    return u && { ...u, data_solicitacao: s.data_solicitacao, status: s.status }
  }).filter(Boolean)


  function handleEdit() {
    setDisabledEdit(false);
  }

  function handleChange(evento) {
    const campoEditado = evento.target.name;  
    const novoValor = evento.target.value;   

    setProfissionalData({
      ...profissionalData,
      [campoEditado]: novoValor
    });
  }




  return (
    <div>

      <div className='divH1'>MinhaConta</div>
      <div className='divContainer'>

        <main className='divMain'>
          <div className='divMain_InformacoesGerais'>
            <span className='divMain_InformacoesGerais_span'>Informações Gerais</span>
            <div className='divMain_InformacoesGerais_div'>
              {profissionalData.profissao &&
                <span className='divMain_InformacoesGerais_div_span'>{profissionalData.profissao}</span>
              }
              <span className='divMain_InformacoesGerais_div_span'>{profissionalData.nome_completo}</span>
              <span className='divMain_InformacoesGerais_div_span'>{profissionalData.estado}</span>
              <span className='divMain_InformacoesGerais_div_span'>{profissionalData.avaliacoes} Avaliações</span>
              <span className='divMain_InformacoesGerais_div_span'>Início: {new Date(profissionalData?.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className='divMain_InformacoesPessoais'>
            <div className='informacoesPessoais_div'>
              <span className='informacoesPessoais_div_span'>Informações Pessoais</span>
              {disabledEdit === true ? (
                <img className='informacoesPessoais_div_img' src={editar} alt="editar informações" onClick={handleEdit} />
              ) : (
                <button
                  className='informacoesPessoais_div_btn'
                  onClick={() => handleConfirm(params, profissionalData, setDisabledEdit)}
                >
                  Confirmar
                </button>
              )
              }
            </div>

              <FormMinhaConta handleChange={handleChange} disabledEdit={disabledEdit} />

          </div>

        </main>

        <aside className='divAside'>
          <div>
            <FotoPerfil />
            <UploadBtn />
          </div>

          <div className='divAside_Informacoes'>
            <div>
              <div className='divAside_Informacoes_div'>
                <span className='divAside_Informacoes_span'>Interações</span>
                <div className='divAside_avaliacoes'>
                  <span>{interacoes.length}</span>
                  <img src={users} alt="userSilhueta" />
                </div>
              </div>
              <span>Últimos contatos</span>
              <div>
                {interacoes
                  .slice(-3) // pega os 3 últimos itens
                  .map(({ id, foto, nome_completo, data_solicitacao }) => {
                    const fotoValida = typeof foto === 'string' && foto.trim() !== '';

                    return (
                      <div className="divAside_Informacoes_contatos" key={id}>
                        <img className='Informacoes_contatos_avatar'
                          src={fotoValida ? foto : avatarFoto}
                          alt="userPhoto"
                        />
                        <span className='Informacoes_contatos_span'>{nome_completo}</span>
                        <span>{new Date(data_solicitacao).toLocaleDateString()}</span>
                      </div>
                    );
                  })}


                {interacoes.length === 0 && <span>Nenhum contato recente.</span>}
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>

  )
}
