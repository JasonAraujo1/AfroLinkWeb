import { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import InputBusca from '../ui/inputBusca';
import Context from '../../context/Context';
import { fetchApiEstados } from '../../services/fetchApi';
import ComboBox from '../ui/comboBox';


export default function ModalBusca() {
    const { dadosCepApi } = useContext(Context);

    const [isModalOpen, setIsModalOpen] = useState(false);

    async function handleLogin() {

        const data = await fetchApiEstados()
    }
            // const userEncontrado = data.find(user => user.email === userInputEmail && user.senha === userInputSenha)
            // if (!userEncontrado) {
            //     alert('Usuário ou senha incorretos');
            //     return;
            // }
    
            // localStorage.setItem("userEncontrado", JSON.stringify(userEncontrado));
            // localStorage.setItem("dadosTodosUsers", JSON.stringify(data));
    

    function abrirModal() {
        setIsModalOpen(true);
    }

    function fecharModal() {
        setIsModalOpen(false);
    }
    return (
        <div>
            <InputBusca onClick={abrirModal} />

            {isModalOpen && (
                <div className='modalOverlay'>
                    <div className='modalContent FlexColumn'>
                        
                            <CloseIcon onClick={fecharModal} />                   
                            <ComboBox/>
                           
                           
                       


                        <button>Aplicar</button>

                    </div>
                </div>
            )}
        </div>
    )
}
