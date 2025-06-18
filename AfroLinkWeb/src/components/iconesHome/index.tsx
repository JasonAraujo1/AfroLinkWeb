import adv from '../../assets/advogado.svg';
import psi from '../../assets/psicologo.svg';
import des from '../../assets/desing.svg';
import fis from '../../assets/fisio.svg';
import nut from '../../assets/nutri.svg';
import './iconesHome.css'
import { useContext } from 'react';
import Context from '../../context/Context';

export default function IconesHome() {

    const { setProfissionalEscohidoInput } = useContext(Context)

    return (
        <div className='iconesContainer'>
            <div className='iconeDiv' onClick={() => setProfissionalEscohidoInput("Advogado")}>
                <img src={adv} className='icone' alt="icone advogado" />
                <span className='spanIcone'>Advogado</span>
            </div>

            <div className='iconeDiv' onClick={() => setProfissionalEscohidoInput("Psicólogo")}>
                <img src={psi} className='icone' alt="icone psicologo" />
                <span className='spanIcone'>Psicólogo</span>
            </div>

            <div className='iconeDiv' onClick={() => setProfissionalEscohidoInput("Nutricionista")}>
                <img src={nut} className='icone' alt="icone medico" />
                <span className='spanIcone'>Nutricionista</span>
            </div>

            <div className='iconeDiv' onClick={() => setProfissionalEscohidoInput("Fisioterapeuta")}>
                <img src={fis} className='icone' alt="icone engenheiro" />
                <span className='spanIcone'>Fisioterapeuta</span>
            </div>

            <div className='iconeDiv' onClick={() => setProfissionalEscohidoInput("Designer")}>
                <img src={des} className='icone' alt="icone personal" />
                <span className='spanIcone'>Designer</span>
            </div>
        </div>
    )
}
