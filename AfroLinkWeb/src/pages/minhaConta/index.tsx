import { useEffect, useState } from 'react';
import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
import { useParams } from 'react-router';

export default function MinhaConta() {

  const [profissionalData, setProfissionalData] = useState(null)
  
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

console.log("profissionalData",profissionalData)


  return (
    <div>
      <div className='divH1'>MinhaConta</div>
      <div className='divContainer'>

        <main className='divMain'>
          <div className='divMain_InformacoesGerais'>
            <span>Informações Gerais</span>
            <div>
              <span>Nome</span>
              <span>Profissão</span>
              <span>Estado</span>
              <span>Início: "createdAt": "2025-06-09T08:33:15.689Z",</span>
            </div>
          </div>

          <div>
            <span>"tipo": "profissionalspan"</span>
            <span>"nome_completo": "Amanda Souzaspan"</span>
            <span> "telefone": "991111111span"</span>
            <span> "email": "amanda.souza@email.comspan"</span>
            <span>"senha": "123span"</span>
            <span>"cpf": "12345678900span"</span>
            <span>"municipio": "São Luísspan"</span>
            <span> "estado": "Maranhãospan"</span>
            <span> "bairro": "Cohamaspan"</span>
            <span> "endereco": "Rua A, 123span"</span>
            <span>"complemento": "Ap 101span"</span>
            <span>"avaliacoes": 1span2</span>
            <span>"descricao": "Especialista em direito civilspan"</span>
            <span>"profissao": "Advogado",</span>
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
