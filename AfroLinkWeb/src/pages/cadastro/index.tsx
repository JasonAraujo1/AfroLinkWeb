import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import logo from '../../assets/logo.svg'
import InputTexto from "../../components/ui/inputTexto"
import ButtonPreto from "../../components/ui/buttonPreto"
import './cadastro.css'

export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  async function handleCadastro() {
    const data = {
      email: email,
      senha: senha,
    }
    const url = "https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users"

    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await req.json()

    alert("Usuário cadastrado!")
    navigate("/")
  }

  return (
    <div >
      <div className='container_header'>
        <h1>Cadastro</h1>
        <span>Preencha os campos para cadastrar</span>
      </div>

      <div className='container_body'>
        <div className='divInputs'>
          <InputTexto placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
          <InputTexto placeholder='Senha' onChange={(event) => setSenha(event.target.value)} />
          <ButtonPreto texto="Cadastrar" onClick={handleCadastro} />
        </div>

        <div className='containerLogin'>
          <span className='spanLogin'>Ja tem conta?</span>
          <NavLink  className='linklogin' to="/login">Fazer login</NavLink>
        </div>
      </div>
    </div>
  )
}

