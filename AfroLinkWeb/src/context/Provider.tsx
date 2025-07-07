import { useState } from 'react';
import Context from './Context';
import type { UserType } from "../types/userType";
import type { AppContextType } from "../types/contextType";


function Provider({ children }: { children: React.ReactNode }) {
  const [dadosTodosUsers, setDadosTodosUsers] = useState<UserType[]>([]);
  const [filtros, setFiltros] = useState<UserType | null>(null);
  const [filtroIDProfissionalSelecionado, setFiltroIDProfissionalSelecionado] = useState<UserType | null>(null);
  
  const profissionalId = localStorage.getItem('profissionalId')
  const profissionalEscohidoInput = JSON.parse(localStorage.getItem('profissionalEscohidoInput') || '[]');
  const userSalvo = localStorage.getItem('userEncontrado');
  const dadosUser = userSalvo ? JSON.parse(userSalvo) : null;


  const contextValue: AppContextType = {
    dadosUser,
    dadosTodosUsers,
    setDadosTodosUsers,
    filtros,
    setFiltros,
    filtroIDProfissionalSelecionado,
    setFiltroIDProfissionalSelecionado,
    profissionalId,
    profissionalEscohidoInput,


  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Provider;