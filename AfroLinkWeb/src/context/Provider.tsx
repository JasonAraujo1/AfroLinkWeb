import {useState } from 'react';
import Context from './Context';
import type { UserType } from "../types/userType";
import type { AppContextType } from "../types/contextType";


function Provider({ children }: { children: React.ReactNode }) {
  const [dadosUser, setDadosUser] = useState<UserType | null>(null);
  const [dadosTodosUsers, setDadosTodosUsers] = useState<UserType[]>([]);
  const [filtros, setFiltros] = useState<UserType | null>(null);
  const [filtroIDProfissionalSelecionado, setFiltroIDProfissionalSelecionado] = useState<UserType | null>(null);
  const [dadosSolicitacoes, setDadosSolicitacoes] = useState([]);
  const profissionalId = localStorage.getItem('profissionalId')

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
    profissionalId
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Provider;