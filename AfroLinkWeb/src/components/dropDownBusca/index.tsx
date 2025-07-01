import { useContext, useEffect, useState } from 'react';
import { fetchApiEstados, fetchApiMunicipios, fetchApiProfissoes } from '../../services/fetchApi';
import ComboBox from '../ui/comboBox';
import Context from '../../context/Context';
import './dropDownBusca.css';
import ButtonPretoArredondado from '../ui/buttonPretoArredondado';
import { useNavigate } from 'react-router';

export default function DropDownBusca() {
  const [dadosEstados, setDadosEstados] = useState([]);
  const [dadosMunicipios, setDadosMunicipios] = useState([]);
  const [profissoes, setProfissoes] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState('');
  const [profissaoSelecionada, setProfissaoSelecionada] = useState('');

  // const { setFiltros, dadosTodosUsers } = useContext(Context);
  const navigate = useNavigate();

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
    async function carregarProfissoes() {
      const data = await fetchApiProfissoes();
      setProfissoes(data);
    }

    carregarEstados();
    carregarMunicipios();
    carregarProfissoes();
  }, [estadoSelecionado]);

  function handleFiltroProfissional() {
    // const filtrosAtivos = {
    //   estado: estadoSelecionado,
    //   municipio: municipioSelecionado,
    //   profissao: profissaoSelecionada,
    // };

    // setFiltros(filtrosAtivos);

    // Filtra localmente os dados disponíveis
    // const resultados = dadosTodosUsers.filter(user => {
    //   const matchEstado = !estadoSelecionado || user.estado === estadoSelecionado;
    //   const matchMunicipio = !municipioSelecionado || user.municipio === municipioSelecionado;
    //   const matchProfissao = !profissaoSelecionada || user.profissao === profissaoSelecionada;
    //   return matchEstado && matchMunicipio && matchProfissao;
    // });

    // if (resultados.length > 0) {
    //   localStorage.setItem("profissionalEscohidoInput", JSON.stringify(resultados));
    //   navigate('/resultado')
    // }else{
    //   alert('Nenhum profissional encontrado com os filtros selecionados.');
     

    // }
    if (!estadoSelecionado && !municipioSelecionado && !profissaoSelecionada) {
      alert('Selecione um estado, um município e uma profissão para buscar um profissional.');
    } 

    if (estadoSelecionado && !municipioSelecionado) {
      navigate(`/resultado?estado=${estadoSelecionado}`)
    }

    if (municipioSelecionado) {
      navigate(`/resultado?municipio=${municipioSelecionado}?estado=${estadoSelecionado}`)
    }

    if (profissaoSelecionada) {
      navigate(`/resultado?profissao=${profissaoSelecionada}`)
    }

  }

  function handleLimparFiltro() {
    setFiltros({
      estado: '',
      municipio: '',
      profissao: '',
    });
    setEstadoSelecionado('');
    setProfissaoSelecionada('');
    setMunicipioSelecionado('');
  }

  const nomesEstados = dadosEstados.map(item => item.nome);
  const nomesMunicipios = dadosMunicipios.map(item => item.nome);
  const nomesProfissoes = profissoes.map(item => item.nome);

  return (
    <div>
      <div className="containerDropDown">
        <ComboBox dados={nomesProfissoes} texto="Profissão" onChange={setProfissaoSelecionada} value={profissaoSelecionada} />
        <ComboBox dados={nomesEstados} texto="Estado" onChange={setEstadoSelecionado} value={estadoSelecionado} />
        <ComboBox dados={nomesMunicipios} texto="Município" onChange={setMunicipioSelecionado} value={municipioSelecionado} />
        <ButtonPretoArredondado texto='Buscar' onClick={handleFiltroProfissional} OnclickLimpar={handleLimparFiltro} />
      </div>
    </div>
  );
}
