import { useContext, useEffect, useState } from 'react';
import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
import { useParams } from 'react-router';
import InputBranco from '../../components/ui/inputBranco';
import FotoPerfil from '../../components/ui/fotoPerfil';
import users from '../../assets/users.svg';
import Context from '../../context/Context';

export default function MinhaConta() {

  const [profissionalData, setProfissionalData] = useState([])
  const [solicitacoes, setSolicitacoes] = useState([])

  const { dadosTodosUsers } = useContext(Context);


  const params = useParams();
  useEffect(() => {
    async function onLoad() {
      if (params.id) {
        // Busca os dados do usuário
        const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users/${params.id}`);
        const res = await req.json();
        setProfissionalData(res);

        // Define se é comum ou profissional e busca as solicitações corretas
        const filtro = res.tipo === 'comum'
          ? `id_usuario_comum=${params.id}`
          : `id_usuario_profissional=${params.id}`;

        const reqSol = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes?${filtro}`);
        const resSol = await reqSol.json();
        setSolicitacoes(resSol);
      }
    }
    onLoad();
  }, []);

  const solicitacoesFiltradas = solicitacoes.filter((solicitacao) =>
    dadosTodosUsers.some(user => String(user.id) === String(
      profissionalData.tipo === 'comum'
        ? solicitacao.id_usuario_profissional
        : solicitacao.id_usuario_comum
    ))
  );
  console.log("solicitacoesFiltradas",solicitacoesFiltradas);


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
              <span className='divMain_InformacoesGerais_div_span'>Início: {new Date(profissionalData?.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className='divMain_InformacoesPessoais'>
            <h4>editar informações</h4>
            <InputBranco texto='Tipo' placeholder={profissionalData.tipo} />
            <InputBranco texto='Nome' placeholder={profissionalData.nome_completo} />
            <InputBranco texto='Telefone' placeholder={profissionalData.telefone} />
            <InputBranco texto='Email' placeholder={profissionalData.email} />
            <InputBranco texto='CPF' placeholder={profissionalData.cpf} />
            <InputBranco texto='Município' placeholder={profissionalData.municipio} />
            <InputBranco texto='Estado' placeholder={profissionalData.estado} />
            <InputBranco texto='Bairro' placeholder={profissionalData.bairro} />
            <InputBranco texto='Endereço' placeholder={profissionalData.endereco} />
            <InputBranco texto='Complemento' placeholder={profissionalData.complemento} />
            <InputBranco texto='Avaliações' placeholder={profissionalData.avaliacoes} />
            <InputBranco texto='Descrição' placeholder={profissionalData.descricao} />
            <InputBranco texto='Profissão' placeholder={profissionalData.profissao} />

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
                  <span>{profissionalData.avaliacoes}</span>
                  <img src={users} alt="userSilhueta" />
                  {/* {e.foto && Object.keys(e.foto).length > 0 ? (
                    <img src={e.foto} alt="fotoUser" className='containerPerfil_fotoUser' />
                  ) : (
                    <img src={fotoAvatar} alt="fotoUser" className='containerPerfil_fotoUser fade-in-scale' />
                  )} */}
                </div>
              </div>
              <span>Últimos contatos</span>
              <div>
                {solicitacoesFiltradas.map((solicitacao) => (
                  <div className='divAside_Informacoes_contatos'>
                    <img src={''} alt="userPhoto" />
                    <span>{solicitacao.nome_completo}</span>
                    <span>data</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>

  )
}
