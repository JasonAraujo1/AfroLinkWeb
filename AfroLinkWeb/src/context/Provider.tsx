import { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [dadosUser, setDadosUser] = useState(null);
  const [dadosTodosUsers, setDadosTodosUsers] = useState([]);
  const [filtros, setFiltros] = useState(null);


  useEffect(() => {
    function onLoad() {
      const userEncontrado = JSON.parse(localStorage.getItem("userEncontrado") || "null");
      const dadosUsers = JSON.parse(localStorage.getItem("dadosTodosUsers") || "[]");
      setDadosUser(userEncontrado);
      setDadosTodosUsers(dadosUsers);
      console.log("filtrosProvider atualizado:", filtros);
    }
    onLoad();
  }, [filtros]);



  const contextValue = {
    dadosUser,
    dadosTodosUsers,
    filtros,
    setFiltros,
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
 

}


export default Provider;