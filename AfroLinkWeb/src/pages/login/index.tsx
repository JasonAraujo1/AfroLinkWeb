import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import ButtonPreto from '../../components/ui/buttonPreto'
import InputTexto from '../../components/ui/inputTexto'
import Context from '../../context/Context'
import './login.css'


export default function Login() {

    const [userInputEmail, setUserInputEmail] = useState('')
    const [userInputSenha, setUserInputSenha] = useState('')

    const { dadosTodosUsers, setDadosTodosUsers } = useContext(Context);


    const navigate = useNavigate()

    async function handleLogin() {
        const userEncontrado = dadosTodosUsers.find(user => user.email === userInputEmail && user.senha === userInputSenha)
        if (!userEncontrado) {
            alert('Usuário ou senha incorretos');
            return;
        }
        setDadosTodosUsers(dadosTodosUsers)

        localStorage.setItem("login", JSON.stringify(userEncontrado.id))
        localStorage.setItem("userEncontrado", JSON.stringify(userEncontrado))

        navigate('/');

    }
    return (
        <div >
            <div className='container_header'>
                <h1>Login</h1>
                <span>Preencha os campos</span>
            </div>
            <div className='container_body'>
                <div className='divInputs'>
                    <InputTexto placeholder='E-mail' onChange={(event) => setUserInputEmail(event.target.value)} />
                    <InputTexto placeholder='Senha' onChange={(event) => setUserInputSenha(event.target.value)} />
                    <ButtonPreto onClick={handleLogin} texto="Entrar" />
                </div>

                <div className='containerCadastro'>
                    <span className='spanCadastro'>Não possui conta?</span>
                    <NavLink className='linkCadastro' to="/cadastro">Fazer Cadastro</NavLink>
                </div>
            </div>

        </div>
    );

}


