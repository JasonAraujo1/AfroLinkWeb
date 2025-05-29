import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { fetchApiUsers } from '../services/fetchApi'
import logo from '../assets/logo.svg'


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
                <input placeholder='E-mail' onChange={(event) => setUserInputEmail(event.target.value)} />
                <input placeholder='Senha' onChange={(event) => setUserInputSenha(event.target.value)} />
                <button onClick={handleLogin}>Entrar</button>
            </div>

            <div>
                <span>Não possui conta?</span>
                <NavLink to="/cadastro">Fazer Cadastro</NavLink>
            </div>

        </div>
    );

}


