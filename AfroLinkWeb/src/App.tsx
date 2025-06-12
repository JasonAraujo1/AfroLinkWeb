import { Route, Routes } from 'react-router'
import './App.css'
import HomeComum from './pages/homeComum'
import HomeProfissional from './pages/homeProfissional'
import Cadastro from './pages/cadastro'
import Login from './pages/login'
import VerMaisProfissional from './pages/verMaisProfissional'
import AppLayout from './layout/layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<HomeComum />} />
        <Route path="/homeProfissional" element={<HomeProfissional />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/verMais" element={<VerMaisProfissional />} />
      </Route>
    </Routes>
  )
}

export default App
