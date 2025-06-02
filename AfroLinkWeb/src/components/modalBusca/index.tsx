import { useContext, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { fetchApiEstados, fetchApiMunicipios, fetchApiProfissoes } from '../../services/fetchApi';
import ComboBox from '../ui/comboBox';
import InputTexto from '../ui/inputTexto';
import search from '../../assets/search.png'
import Context from '../../context/Context';

export default function ModalBusca() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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


  function abrirModal() {
    setIsModalOpen(true)
  }

  function fecharModal() {
    setIsModalOpen(false)
  }

  function handleFiltroProfissional() {
     setFiltros({
      estado: estadoSelecionado,
      municipio: municipioSelecionado,
      profissao: profissaoSelecionada,
    })
    fecharModal()

  }

  const nomesEstados = dadosEstados.map(item => item.nome);
  const nomesMunicipios = dadosMunicipios.map(item => item.nome);
  const nomesProfissoes = profissoes.map(item => item.nome);


  return (
    <div>

      <InputTexto
        onClick={abrirModal}
        placeholder="Qual profissional deseja?"
        src={search}

      />

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent FlexColumn">
            <CloseIcon onClick={fecharModal} />
            <ComboBox dados={nomesProfissoes} texto="Profissão" onChange={setProfissaoSelecionada} />
            <ComboBox dados={nomesEstados} texto="Estado" onChange={setEstadoSelecionado} />
            <ComboBox dados={nomesMunicipios} texto="Município" onChange={setMunicipioSelecionado} />
            <button onClick={handleFiltroProfissional}>Aplicar</button>
          </div>
        </div>
      )}
    </div>
  );
}
