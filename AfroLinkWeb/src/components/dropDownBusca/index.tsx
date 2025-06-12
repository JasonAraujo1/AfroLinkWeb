import { useContext, useEffect, useState } from 'react';
import { fetchApiEstados, fetchApiMunicipios, fetchApiProfissoes } from '../../services/fetchApi';
import ComboBox from '../ui/comboBox';
import Context from '../../context/Context';
import './dropDownBusca.css'
import ButtonPretoArredondado from '../ui/buttonPretoArredondado';

export default function DropDownBusca() {

  const [dadosEstados, setDadosEstados] = useState([]);
  const [dadosMunicipios, setDadosMunicipios] = useState([]);
  const [profissoes, setProfissoes] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState('');
  const [profissaoSelecionada, setProfissaoSelecionada] = useState('');

  const { setFiltros } = useContext(Context)

  useEffect(() => {
    async function carregarEstados() {
      const data = await fetchApiEstados();
      setDadosEstados(data);
      console.log(data)
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
    async function carregarProfissoes() {
      const data = await fetchApiProfissoes();
      setProfissoes(data);
    }
    carregarMunicipios()
    carregarEstados()
    carregarProfissoes()
  }, [estadoSelecionado])



  function handleFiltroProfissional() {
     setFiltros({
      estado: estadoSelecionado,
      municipio: municipioSelecionado,
      profissao: profissaoSelecionada,
    })
  }
  function handleLimparFiltro(){
    setFiltros({
      estado: '',
      municipio: '',
      profissao: '',

    })
    setEstadoSelecionado('')
    setProfissaoSelecionada('')
    setMunicipioSelecionado('')
    
  }

  const nomesEstados = dadosEstados.map(item => item.nome);
  const nomesMunicipios = dadosMunicipios.map(item => item.nome);
  const nomesProfissoes = profissoes.map(item => item.nome);

  return (
    <div>

        <div >
          <div className="containerDropDown">         
            <ComboBox dados={nomesProfissoes} texto="Profissão" onChange={setProfissaoSelecionada} />
            <ComboBox dados={nomesEstados} texto="Estado" onChange={setEstadoSelecionado} />
            <ComboBox dados={nomesMunicipios} texto="Município" onChange={setMunicipioSelecionado} />
            <ButtonPretoArredondado texto='Buscar' OnclickLimpar={handleLimparFiltro} onClick={handleFiltroProfissional}/>
            
          </div>
        </div>
    
    </div>
  );
}
