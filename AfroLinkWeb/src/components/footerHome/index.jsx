import './footerHome.css'

export default function FooterHome() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <h2>Sobre</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="#">Quem somos?</a></li>
                            <li><a href="#">Menções legais</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Superprof no mundo</a></li>
                            <li><a href="#">Aulas Online</a></li>
                            <li><a href="#">Estados</a></li>
                            <li><a href="#">Trabalhe na Superprof</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Matérias</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="#">Artes e Lazer</a></li>
                            <li><a href="#">Desenvolvimento pessoal</a></li>
                            <li><a href="#">Informática</a></li>
                            <li><a href="#">Línguas</a></li>
                            <li><a href="#">Música</a></li>
                            <li><a href="#">Saúde e Bem-estar</a></li>
                            <li><a href="#">Reforço escolar</a></li>
                            <li><a href="#">Esportes e dança</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Siga essa aventura</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="#">Revista We Love Prof</a></li>
                            <li><a href="#">Recursos pedagógicos</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Suporte</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="#">Página de ajuda</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Siga-nos</h2>
                        <ul className=" footer-column_ul social">
                            <li><a href="#">📘</a></li>
                            <li><a href="#">🐦</a></li>
                            <li><a href="#">📸</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}
