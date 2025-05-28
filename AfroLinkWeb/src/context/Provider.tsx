import Context from './Context';

  function Provider({ children }) {

      const dadosUser = JSON.parse(localStorage.getItem("userEncontrado")) 

      const contextValue = {
        dadosUser,
      }


      return (
          <Context.Provider value={contextValue}>
              {children}
          </Context.Provider>
      )
  }


  export default Provider;