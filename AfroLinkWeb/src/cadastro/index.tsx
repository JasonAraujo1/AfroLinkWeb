import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import logo from '../assets/logo.svg'



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
    navigate("/login")
  }



  return (
    <div>
      <img src={logo} className="Logo" />

      <div>
        <input placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
        <br />
        <input placeholder='Senha' onChange={(event) => setSenha(event.target.value)} />
        <br />
        <button title="Cadastrar" onClick={handleCadastro}>Cadastrar</button>

      </div>

      <div>
        <span>Ja tem conta?</span>
        <NavLink to="/">Fazer login</NavLink>
      </div>
    </div>
  )
}

