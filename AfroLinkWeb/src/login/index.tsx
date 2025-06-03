import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { fetchApiUsers } from '../services/fetchApi'
import logo from '../assets/logo.svg'
import ButtonPreto from '../components/ui/buttonPreto'
import InputTexto from '../components/ui/inputTexto'


export default function Login() {

    const [userInputEmail, setUserInputEmail] = useState('')
    const [userInputSenha, setUserInputSenha] = useState('')


    const navigate = useNavigate()

    async function handleLogin() {
        const data = await fetchApiUsers()
        const userEncontrado = data.find(user => user.email === userInputEmail && user.senha === userInputSenha)
        if (!userEncontrado) {
            alert('Usuário ou senha incorretos');
            return;
        }

        localStorage.setItem("userEncontrado", JSON.stringify(userEncontrado));
        localStorage.setItem("dadosTodosUsers", JSON.stringify(data));

        if (userEncontrado.tipo === 'profissional') {
            navigate('/homeProfissional');
        } else {
            navigate('/homeComum');
        }
        
    }
    return (
        <div >
            <img src={logo} className="Logo" />
            <div className='FlexColumn'>
                <InputTexto placeholder='E-mail' onChange={(event) => setUserInputEmail(event.target.value)}/>
                <InputTexto placeholder='Senha' onChange={(event) => setUserInputSenha(event.target.value)}/>
                <ButtonPreto onClick={handleLogin} texto="Entrar"/>
            </div>

            <div>
                <span>Não possui conta?</span>
                <NavLink to="/cadastro">Fazer Cadastro</NavLink>
            </div>

        </div>
    );

}


