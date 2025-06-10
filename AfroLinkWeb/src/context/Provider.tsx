import { useEffect, useState } from 'react';
import Context from './Context';
import type { UserType } from "../types/userType";
import type { AppContextType } from "../types/contextType";
import { fetchApiSolicitacoes } from '../services/fetchApi';

function Provider({ children }: { children: React.ReactNode }) {
  const [dadosUser, setDadosUser] = useState<UserType | null>(null);
  const [dadosTodosUsers, setDadosTodosUsers] = useState<UserType[]>([]);
  const [filtros, setFiltros] = useState<UserType | null>(null);
  const [filtroIDProfissionalSelecionado, setFiltroIDProfissionalSelecionado] = useState<UserType | null>(null);
  const [dadosSolicitacoes, setDadosSolicitacoes] = useState([]);

useEffect(() => {
  async function onLoad() {
    const dataSolicitacoesApi = await fetchApiSolicitacoes();
    setDadosSolicitacoes(dataSolicitacoesApi);
    dadosUser
  }
  onLoad();
}, []);


  const contextValue: AppContextType = {
    dadosUser,
    setDadosUser,
    dadosTodosUsers,
    setDadosTodosUsers,
    filtros,
    setFiltros,
    filtroIDProfissionalSelecionado,
    setFiltroIDProfissionalSelecionado,
    dadosSolicitacoes,
    setDadosSolicitacoes,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Provider;