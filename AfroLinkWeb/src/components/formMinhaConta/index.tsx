import { useContext, useEffect, useState } from "react";
import InputBranco from "../ui/inputBranco";
import './formMinhaConta.css';
import Context from "../../context/Context";
import { fetchApiEstados, fetchApiMunicipios } from "../../services/fetchApi";
import SelectOptionComboBox from "../selectOptionComboBox/selectOptionComboBox";

export default function FormMinhaConta({ handleChange, disabledEdit }) {
    const { profissionalData, setProfissionalData } = useContext(Context);

    const [dadosEstados, setDadosEstados] = useState([]);
    const [dadosMunicipios, setDadosMunicipios] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [municipioSelecionado, setMunicipioSelecionado] = useState('');


    useEffect(() => {
        async function carregarEstados() {
            const data = await fetchApiEstados();
            setDadosEstados(data);
        }
        async function carregarMunicipios() {
            if (estadoSelecionado) {
                const estado = dadosEstados.find(item => item.nome === estadoSelecionado);
                if (estado) {
                    const municipios = await fetchApiMunicipios({ UF_ID: estado.id });
                    setDadosMunicipios(municipios);
                }
            }
        }


        carregarEstados();
        carregarMunicipios();
    }, [estadoSelecionado]);




    const nomesEstados = dadosEstados.map(item => item.nome);
    const nomesMunicipios = dadosMunicipios.map(item => item.nome);



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
            <InputBranco texto='Profissão' name="profissao" disabled={disabledEdit} valor={profissionalData.profissao} onChange={handleChange} />
            <InputBranco texto='Descrição' name="descricao" disabled={disabledEdit} valor={profissionalData.descricao} onChange={handleChange} />
            <InputBranco texto='Telefone' name="telefone" disabled={disabledEdit} valor={profissionalData.telefone} onChange={handleChange} />
            <InputBranco texto='Email' name="email" disabled={disabledEdit} valor={profissionalData.email} onChange={handleChange} />
            <InputBranco texto='CPF' name="cpf" disabled={disabledEdit} valor={profissionalData.cpf} onChange={handleChange} />

            <SelectOptionComboBox disabled={disabledEdit} dados={nomesEstados} texto="Estado" onChange={setEstadoSelecionado} value={profissionalData.estado} />
            <SelectOptionComboBox disabled={disabledEdit} dados={nomesMunicipios} texto="Município" onChange={setMunicipioSelecionado} value={profissionalData.municipio} />

            <InputBranco texto='Bairro' name="bairro" disabled={disabledEdit} valor={profissionalData.bairro} onChange={handleChange} />
            <InputBranco texto='Endereço' name="endereco" disabled={disabledEdit} valor={profissionalData.endereco} onChange={handleChange} />
            <InputBranco texto='Complemento' name="complemento" disabled={disabledEdit} valor={profissionalData.complemento} onChange={handleChange} />


        </div>
    );
}
