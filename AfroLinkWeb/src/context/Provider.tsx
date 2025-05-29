import { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [dadosUser, setDadosUser] = useState(null);
  const [dadosTodosUsers, setDadosTodosUsers] = useState([]);
  const [dadosCepApi, setDadosCepApi] = useState([]);

  useEffect(() => {
  function onLoad() {
    const userEncontrado = JSON.parse(localStorage.getItem("userEncontrado") || "null");
    const dadosUsers = JSON.parse(localStorage.getItem("dadosTodosUsers") || "[]");
    const dadosFetchCep = JSON.parse(localStorage.getItem("dadosFetchCep") || "[]");
    setDadosUser(userEncontrado);
    setDadosTodosUsers(dadosUsers);
    setDadosCepApi(dadosFetchCep);
  }
  onLoad();
}, []);

  const contextValue = {
    dadosUser,
    dadosTodosUsers,
    dadosCepApi
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}


export default Provider;