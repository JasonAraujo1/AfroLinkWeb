import './footerHome.css'
import face from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import x from '../../assets/twitter-x.svg'

export default function FooterHome() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <h2>Sobre</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="/sobre">Quem somos?</a></li>
                            <li><a href="/termos-legais">Menções legais</a></li>
                            <li><a href="/privacidade">Política de Privacidade</a></li>
                            <li><a href="/afrolink-mundo">AfroLink no mundo</a></li>
                            <li><a href="/aulas-online">Aulas Online</a></li>
                            <li><a href="/estados">Estados</a></li>
                            <li><a href="/trabalhe-conosco">Trabalhe na AfroLink</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Áreas de Atuação</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="/artes-e-lazer">Artes e Lazer</a></li>
                            <li><a href="/desenvolvimento-pessoal">Desenvolvimento pessoal</a></li>
                            <li><a href="/informatica">Informática</a></li>
                            <li><a href="/linguas">Línguas</a></li>
                            <li><a href="/musica">Música</a></li>
                            <li><a href="/saude-e-bem-estar">Saúde e Bem-estar</a></li>
                            <li><a href="/reforco-escolar">Reforço escolar</a></li>
                            <li><a href="/esportes-e-danca">Esportes e dança</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Comunidade</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="/revista">Revista AfroLink</a></li>
                            <li><a href="/recursos">Recursos pedagógicos</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2>Suporte</h2>
                        <ul className='footer-column_ul'>
                            <li><a href="/ajuda">Página de ajuda</a></li>
                            <li><a href="/contato">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-column ">
                        <h2>Siga-nos</h2>
                        <ul className="footer-column_ul social_ul">
                            <li><a className='social' href="https://facebook.com" target="_blank" rel="noreferrer"><img src={face} alt="" /></a></li>
                            <li><a className='social' href="https://twitter.com" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a></li>
                            <li><a className='social' href="https://instagram.com" target="_blank" rel="noreferrer"><img src={x} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <span className='containerHome_footer_span'>© 2025 AfroLink</span>
        </div>
    )
}
