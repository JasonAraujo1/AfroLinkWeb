import { Route, Routes } from 'react-router'
import './App.css'
import HomeComum from './homeComum'
import HomeProfissional from './homeProfissional'
import Cadastro from './cadastro'
import Login from './login'
import VerMaisProfissional from './verMaisProfissional'

function App() {
  return (
    <Routes>
      <Route path="/homeComum" element={<HomeComum/>}/>
      <Route path="/homeProfissional" element={<HomeProfissional/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/verMais" element={<VerMaisProfissional/>}/>
    </Routes>
  )
}

export default App
