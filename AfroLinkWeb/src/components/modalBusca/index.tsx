import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { fetchApiEstados, fetchApiMunicipios } from '../../services/fetchApi';
import ComboBox from '../ui/comboBox';
import InputTexto from '../ui/inputTexto';
import search from '../../assets/search.png'

export default function ModalBusca() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosEstados, setDadosEstados] = useState([]);
  const [dadosMunicipios, setDadosMunicipios] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  useEffect(() => {
    async function carregarEstados() {
      const data = await fetchApiEstados();
      setDadosEstados(data);
    }
    carregarEstados();
  }, []);

  useEffect(() => {
    async function carregarMunicipios() {
      if (estadoSelecionado) {
        const estado = dadosEstados.find(item => item.nome === estadoSelecionado);
        if (estado) {
          const municipios = await fetchApiMunicipios({ UF_ID: estado.id });
          setDadosMunicipios(municipios);
        }
      }
    }
    carregarMunicipios();
  }, [estadoSelecionado]);

  function abrirModal() {
    setIsModalOpen(true);
  }

  function fecharModal() {
    setIsModalOpen(false);
  }

  const nomesEstados = dadosEstados.map(estado => estado.nome);
  const nomesMunicipios = dadosMunicipios.map(cidade => cidade.nome);
 

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
            <ComboBox dados={nomesEstados} texto="Estado" onChange={setEstadoSelecionado} />
            <ComboBox dados={nomesMunicipios} texto="Município" />
            <button>Aplicar</button>
          </div>
        </div>
      )}
    </div>
  );
}
