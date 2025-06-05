import { Route, Routes } from 'react-router'
import './App.css'
import HomeComum from './pages/homeComum'
import HomeProfissional from './pages/homeProfissional'
import Cadastro from './pages/cadastro'
import Login from './pages/login'
import VerMaisProfissional from './pages/verMaisProfissional'

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
