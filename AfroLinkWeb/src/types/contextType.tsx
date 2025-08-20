import type { UserType } from "./userType";

export type AppContextType = {
    dadosUser: UserType | null;
    dadosTodosUsers: UserType[];
    setDadosTodosUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
    filtros: UserType | null;
    setFiltros: React.Dispatch<React.SetStateAction<UserType | null>>;
    filtroIDProfissionalSelecionado: UserType | null; 
    setFiltroIDProfissionalSelecionado: React.Dispatch<React.SetStateAction<UserType | null>>; 
    
};
