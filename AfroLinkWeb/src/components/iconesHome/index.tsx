import adv from '../../assets/advogado.svg';
import psi from '../../assets/psicologo.svg';
import med from '../../assets/medico.svg';
import eng from '../../assets/engenheiro.svg';
import per from '../../assets/personal.svg';
import './iconesHome.css'

export default function IconesHome() {
    return (
        <div className='iconesContainer'>
            <div className='iconeDiv'>
                <img src={adv} className='icone' alt="icone advogado" />
                <span>Advogado</span>
            </div>

            <div className='iconeDiv'>
                <img src={psi} className='icone' alt="icone psicologo" />
                <span>Psicologo</span> 
            </div>

            <div className='iconeDiv'>
                <img src={med} className='icone' alt="icone medico" />
                <span>Médico</span>
            </div>

            <div className='iconeDiv'>
                <img src={eng} className='icone' alt="icone engenheiro" />
                <span>Engenheiro</span>
            </div>

            <div className='iconeDiv'>
                <img src={per} className='icone' alt="icone personal" />
                <span>Personal</span>
            </div>
        </div>
    )
}
