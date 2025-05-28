import Context from './Context';

  function Provider({ children }) {

      const dadosUser = JSON.parse(localStorage.getItem("userEncontrado")) 
      const dadosTodosUsers = JSON.parse(localStorage.getItem("dadosTodosUsers")) 

      const contextValue = {
        dadosUser,
        dadosTodosUsers
      }


      return (
          <Context.Provider value={contextValue}>
              {children}
          </Context.Provider>
      )
  }


  export default Provider;