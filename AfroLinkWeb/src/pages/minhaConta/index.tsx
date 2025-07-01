import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
export default function MinhaConta() {
  return (
    <div>
      <div className='divH1'>MinhaConta</div>
      <div className='divContainer'>

        <main className='divMain'>
          <div>
            <span>Informações Gerais</span>
            <div>
              <span>Nome</span>
              <span>Profissão</span>
              <span>Estado</span>
              <span>Início</span>
            </div>
          </div>
        </main>

        <aside className='divAside'>
          <div>
            <img src="fotouser" alt="fotoUser" />
            <UploadBtn/>
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
