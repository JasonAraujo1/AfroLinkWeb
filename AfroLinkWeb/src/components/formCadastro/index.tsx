import { useState } from 'react'
import { fetchApiUserCep } from '../../services/fetchApi'


export default function FormCadastro() {

    const [nome_completo, setNomeCompleto] = useState('')
    const [tipo, setTipo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cepUsuario, setCepUsuario] = useState('')
    const [cpf, setCpf] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [bairro, setBairro] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')


    async function handleCepUsuario() {
        fetchApiUserCep(cepUsuario)
        const dataCepUser = await fetchApiUserCep(cepUsuario)
        const dataCep = await fetchApiUserCep()

        if (dataCepUser) {
            setCidade(dataCepUser.localidade)
            setEstado(dataCepUser.uf)
            setBairro(dataCepUser.bairro)
            setEndereco(dataCepUser.logradouro)
            setComplemento(dataCepUser.complemento || '')
        } else {
            alert("CEP não encontrado!")
        }
         localStorage.setItem("dadosFetchCep", JSON.stringify(dataCep));
    }


    async function handleCadastro() {
        const data = {
            nome_completo: nome_completo,
            tipo: tipo,
            telefone: telefone,
            cpf: cpf,
            cidade: cidade,
            estado: estado,
            bairro: bairro,
            endereco: endereco,
            complemento: complemento,
            descricao: "",
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

    }
    return (
        <div>
            <input placeholder='Nome completo' onChange={(event) => setNomeCompleto(event.target.value)} />
            <br />
            <select onChange={(event) => setTipo(event.target.value)}>
                <option value="">-- Tipo --</option>
                <option value="comum">Comum</option>
                <option value="profissional">Profissional</option>
            </select>
            <br />
            <input placeholder='Telefone' onChange={(event) => setTelefone(event.target.value)} />
            <br />
            <input placeholder='CEP' onChange={(event) => setCepUsuario(event.target.value)} />
            <button title="Cadastrar" onClick={handleCepUsuario}>🔍</button>
            <br />
            <input placeholder='Cpf' onChange={(event) => setCpf(event.target.value)} />
            <br />
            <input value={cidade} placeholder='Cidade' onChange={(event) => setCidade(event.target.value)} />
            <br />
            <input value={estado} placeholder='Estado' onChange={(event) => setEstado(event.target.value)} />
            <br />
            <input value={bairro} placeholder='Bairro' onChange={(event) => setBairro(event.target.value)} />
            <br />
            <input value={endereco} placeholder='Endereco' onChange={(event) => setEndereco(event.target.value)} />
            <br />
            <input value={complemento} placeholder='Complemento' onChange={(event) => setComplemento(event.target.value)} />

            <button title="Cadastrar" onClick={handleCadastro}>Cadastrar</button>
        </div>
    )
}

