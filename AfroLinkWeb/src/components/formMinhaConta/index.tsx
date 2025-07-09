import InputBranco from "../ui/inputBranco";
import { fetchApiUserCep } from "../../services/fetchApi";
import { useState } from "react";

export default function FormMinhaConta({ handleChange, profissionalData, setProfissionalData, disabledEdit }) {

    return (
        <div>
            <label>Tipo</label>
            <select
                name="tipo"
                value={profissionalData.tipo}
                onChange={handleChange}
                disabled={disabledEdit}
            >
                <option value="comum">Comum</option>
                <option value="profissional">Profissional</option>
            </select>

            <InputBranco texto='Nome' name="nome_completo" disabled={disabledEdit} valor={profissionalData.nome_completo} onChange={handleChange} />
            <InputBranco texto='Telefone' name="telefone" disabled={disabledEdit} valor={profissionalData.telefone} onChange={handleChange} />
            <InputBranco texto='Email' name="email" disabled={disabledEdit} valor={profissionalData.email} onChange={handleChange} />
            <InputBranco texto='CPF' name="cpf" disabled={disabledEdit} valor={profissionalData.cpf} onChange={handleChange} />
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
