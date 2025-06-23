import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import ButtonPreto from '../../components/ui/buttonPreto'
import InputTexto from '../../components/ui/inputTexto'
import Context from '../../context/Context'


export default function Login() {

    const [userInputEmail, setUserInputEmail] = useState('')
    const [userInputSenha, setUserInputSenha] = useState('')

    const { dadosTodosUsers, setDadosUser, setDadosTodosUsers } = useContext(Context);


    const navigate = useNavigate()

    async function handleLogin() {
        const userEncontrado = dadosTodosUsers.find(user => user.email === userInputEmail && user.senha === userInputSenha)
        if (!userEncontrado) {
            alert('Usuário ou senha incorretos');
            return;
        }
        setDadosTodosUsers(dadosTodosUsers)

        setDadosUser(userEncontrado);

        localStorage.setItem("login", JSON.stringify(userEncontrado.id))

        if (userEncontrado.tipo === 'profissional') {
            navigate('/homeProfissional');
        } else {
            navigate('/');
        }

    }
    return (
        <div >
            <div>
                <h1>Cadastro</h1>
                <span>Preencha com seus dados</span>
            </div>
            <div className='FlexColumn'>
                <InputTexto placeholder='E-mail' onChange={(event) => setUserInputEmail(event.target.value)} />
                <InputTexto placeholder='Senha' onChange={(event) => setUserInputSenha(event.target.value)} />
                <ButtonPreto onClick={handleLogin} texto="Entrar" />
            </div>

            <div>
                <span>Não possui conta?</span>
                <NavLink to="/cadastro">Fazer Cadastro</NavLink>
            </div>

        </div>
    );

}


