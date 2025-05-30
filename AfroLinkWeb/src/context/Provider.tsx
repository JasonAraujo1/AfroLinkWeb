import { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [dadosUser, setDadosUser] = useState(null);
  const [dadosTodosUsers, setDadosTodosUsers] = useState([]);

  useEffect(() => {
  function onLoad() {
    const userEncontrado = JSON.parse(localStorage.getItem("userEncontrado") || "null");
    const dadosUsers = JSON.parse(localStorage.getItem("dadosTodosUsers") || "[]");
    // const dadosFetchCep = JSON.parse(localStorage.getItem("dadosFetchCep") || "[]");
    setDadosUser(userEncontrado);
    setDadosTodosUsers(dadosUsers);
  }
  onLoad();
}, []);

  const contextValue = {
    dadosUser,
    dadosTodosUsers,
    
  }
  console.log("Context Value:", contextValue);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}


export default Provider;