import adv from '../../assets/advogado.svg';
import psi from '../../assets/psicologo.svg';
import des from '../../assets/desing.svg';
import fis from '../../assets/fisio.svg';
import nut from '../../assets/nutri.svg';
import './iconesHome.css';
import { useUsuarios } from '../../hooks/useUsuarios';

export default function IconesHome() {
    const { handleBuscaPorIcone} = useUsuarios()

    return (
        <div className='iconesContainer'>
            <div className='iconeDiv' onClick={() => handleBuscaPorIcone("Advogado")}>
                <img src={adv} className='icone' alt="icone advogado" />
                <span className='spanIcone'>Advogado</span>
            </div>

            <div className='iconeDiv' onClick={() => handleBuscaPorIcone("Psicólogo")}>
                <img src={psi} className='icone' alt="icone psicologo" />
                <span className='spanIcone'>Psicólogo</span>
            </div>

            <div className='iconeDiv' onClick={() => handleBuscaPorIcone("Nutricionista")}>
                <img src={nut} className='icone' alt="icone nutri" />
                <span className='spanIcone'>Nutricionista</span>
            </div>

            <div className='iconeDiv' onClick={() => handleBuscaPorIcone("Fisioterapeuta")}>
                <img src={fis} className='icone' alt="icone fisio" />
                <span className='spanIcone'>Fisioterapeuta</span>
            </div>

            <div className='iconeDiv' onClick={() => handleBuscaPorIcone("Designer Gráfico")}>
                <img src={des} className='icone' alt="icone design" />
                <span className='spanIcone'>Designer</span>
            </div>
        </div>
    );
}
