import { useContext, useState } from "react";
import InputBranco from "../ui/inputBranco";
import './formMinhaConta.css';
import { fetchApiUserCep } from "../../services/fetchApi";
import Context from "../../context/Context";

export default function FormMinhaConta({ handleChange, disabledEdit }) {
    const { profissionalData, setProfissionalData } = useContext(Context);

    const [cepUsuario, setCepUsuario] = useState('')

    async function handleCepUsuario() {
        const dataCepUser = await fetchApiUserCep(cepUsuario);

        if (dataCepUser) {
            setProfissionalData(prev => ({
                ...prev,
                municipio: dataCepUser.localidade,
                estado: dataCepUser.uf,
                bairro: dataCepUser.bairro,
                endereco: dataCepUser.logradouro
            }));
        } else {
            alert("CEP não encontrado!");
        }
    }


    return (
        <div>
            <div className="div-select-tipo">
                <span className="span">Tipo</span>
                <select
                    name="tipo"
                    value={profissionalData.tipo}
                    onChange={handleChange}
                    disabled={disabledEdit}
                    className="select-tipo"
                >
                    <option value="comum">Comum</option>
                    <option value="profissional">Profissional</option>
                </select>
            </div>

            <InputBranco texto='Nome' name="nome_completo" disabled={disabledEdit} valor={profissionalData.nome_completo} onChange={handleChange} />
            <InputBranco texto='Telefone' name="telefone" disabled={disabledEdit} valor={profissionalData.telefone} onChange={handleChange} />
            <InputBranco texto='Email' name="email" disabled={disabledEdit} valor={profissionalData.email} onChange={handleChange} />
            <InputBranco texto='CPF' name="cpf" disabled={disabledEdit} valor={profissionalData.cpf} onChange={handleChange} />

            <div >
                <span>CEP</span>
                <input disabled={disabledEdit} onChange={(event) => setCepUsuario(event.target.value)} />
                <button disabled={disabledEdit} title="Cadastrar" onClick={handleCepUsuario}>🔍</button>
            </div>

            <InputBranco texto='Município' name="municipio" disabled={disabledEdit} valor={profissionalData.municipio} onChange={handleChange} />
            <InputBranco texto='Estado' name="estado" disabled={disabledEdit} valor={profissionalData.estado} onChange={handleChange} />
            <InputBranco texto='Bairro' name="bairro" disabled={disabledEdit} valor={profissionalData.bairro} onChange={handleChange} />
            <InputBranco texto='Endereço' name="endereco" disabled={disabledEdit} valor={profissionalData.endereco} onChange={handleChange} />
            <InputBranco texto='Complemento' name="complemento" disabled={disabledEdit} valor={profissionalData.complemento} onChange={handleChange} />
            <InputBranco texto='Descrição' name="descricao" disabled={disabledEdit} valor={profissionalData.descricao} onChange={handleChange} />
            <InputBranco texto='Profissão' name="profissao" disabled={disabledEdit} valor={profissionalData.profissao} onChange={handleChange} />
        </div>
    );
}
