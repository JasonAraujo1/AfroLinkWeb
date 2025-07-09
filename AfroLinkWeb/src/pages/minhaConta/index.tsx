import { useContext, useEffect, useState } from 'react';
import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
import { useParams } from 'react-router';
import InputBranco from '../../components/ui/inputBranco';
import FotoPerfil from '../../components/ui/fotoPerfil';
import users from '../../assets/users.svg';
import Context from '../../context/Context';
import avatarFoto from '../../assets/userfoto.png';
import editar from '../../assets/edit.svg';
import { useUsuarios } from '../../hooks/useUsuarios';

export default function MinhaConta() {

  const [profissionalData, setProfissionalData] = useState([])
  const [solicitacoes, setSolicitacoes] = useState([])

  const [disabledEdit, setDisabledEdit] = useState(true)

  const { dadosTodosUsers } = useContext(Context);

  const{ handleConfirm } = useUsuarios( profissionalData, setDisabledEdit, params);


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
  function handleChange(e) {
    const { name, value } = e.target;
    setProfissionalData(prev => ({
      ...prev,
      [name]: value
    }));
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
                <button className='informacoesPessoais_div_btn' onClick={handleConfirm}>Confirmar</button>
              )
              }
            </div>

            <InputBranco texto='Tipo' name="tipo" disabled={disabledEdit} valor={profissionalData.tipo} onChange={handleChange} />
            <InputBranco texto='Nome' name="nome_completo" disabled={disabledEdit} valor={profissionalData.nome_completo} onChange={handleChange} />
            <InputBranco texto='Telefone' name="telefone" disabled={disabledEdit} valor={profissionalData.telefone} onChange={handleChange} />
            <InputBranco texto='Email' name="email" disabled={disabledEdit} valor={profissionalData.email} onChange={handleChange} />
            <InputBranco texto='CPF' name="cpf" disabled={disabledEdit} valor={profissionalData.cpf} onChange={handleChange} />
            <InputBranco texto='Município' name="municipio" disabled={disabledEdit} valor={profissionalData.municipio} onChange={handleChange} />
            <InputBranco texto='Estado' name="estado" disabled={disabledEdit} valor={profissionalData.estado} onChange={handleChange} />
            <InputBranco texto='Bairro' name="bairro" disabled={disabledEdit} valor={profissionalData.bairro} onChange={handleChange} />
            <InputBranco texto='Endereço' name="endereco" disabled={disabledEdit} valor={profissionalData.endereco} onChange={handleChange} />
            <InputBranco texto='Complemento' name="complemento" disabled={disabledEdit} valor={profissionalData.complemento} onChange={handleChange} />
            <InputBranco texto='Descrição' name="descricao" disabled={disabledEdit} valor={profissionalData.descricao} onChange={handleChange} />
            <InputBranco texto='Profissão' name="profissao" disabled={disabledEdit} valor={profissionalData.profissao} onChange={handleChange} />

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
