import { useEffect, useState } from 'react';
import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
import { useParams } from 'react-router';

export default function MinhaConta() {

  const [profissionalData, setProfissionalData] = useState([])

  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      if (params.id) {
        const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users/${params.id}`)
        const res = await req.json()
        setProfissionalData(res)
      }
    }
    onLoad()
  }, [])



  return (
    <div>

      <div className='divH1'>MinhaConta</div>
        <div className='divContainer'>

          <main className='divMain'>
            <div className='divMain_InformacoesGerais'>
              <span className='divMain_InformacoesGerais_span'>Informações Gerais</span>
              <div className='divMain_InformacoesGerais_div'>
                <span className='divMain_InformacoesGerais_div_span'>{profissionalData.profissao}</span>
                <span className='divMain_InformacoesGerais_div_span'>{profissionalData.nome_completo}</span>
                <span className='divMain_InformacoesGerais_div_span'>{profissionalData.estado}</span>
                <span className='divMain_InformacoesGerais_div_span'>{profissionalData.createdAt}</span>
              </div>
            </div>

            <div>
              <span>Tipo: {profissionalData.tipo}</span>
              <span>Nome: {profissionalData.nome_completo}</span>
              <span>Telefone: {profissionalData.telefone}</span>
              <span>Email: {profissionalData.email}</span>
              <span>CPF: {profissionalData.cpf}</span>
              <span>Município: {profissionalData.municipio}</span>
              <span>Estado: {profissionalData.estado}</span>
              <span>Bairro: {profissionalData.bairro}</span>
              <span>Endereço: {profissionalData.endereco}</span>
              <span>Complemento: {profissionalData.complemento}</span>
              <span>Avaliações: {profissionalData.avaliacoes}</span>
              <span>Descrição: {profissionalData.descricao}</span>
              <span>Profissão: {profissionalData.profissao}</span>
            </div>

          </main>

          <aside className='divAside'>
            <div>
              <img src="fotouser" alt="fotoUser" />
              <UploadBtn />
            </div>
            <div>
              <div>
                <span>Alterações</span>
                <div>
                  <span>13</span>
                  <img src="" alt="userSilhueta" />
                </div>
                <span>Últimos contatos</span>
                <div>
                  <div>
                    <img src="" alt="userPhoto" />
                    <span>Fulano de tal</span>
                    <span>data</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
    </div>

  )
}
