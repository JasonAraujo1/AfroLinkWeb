import { Route, Routes } from 'react-router'
import './App.css'
import HomeComum from './pages/homeComum'
import Solicitacoes from './pages/solicitacoes'
import Cadastro from './pages/cadastro'
import Login from './pages/login'
import VerMaisProfissional from './pages/verMaisProfissional'
import AppLayout from './layout/layout'
import LayoutHeaderSimples from './layout/layoutHeaderSimpes'
import ResultadoBusca from './pages/resultadoBusca'
import MinhaConta from './pages/minhaConta'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomeComum />} />
      </Route>
      <Route path='/' element={<LayoutHeaderSimples />}>
        <Route path="/solicitacoes/:id" element={<Solicitacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ver-mais/:id" element={<VerMaisProfissional />} />
        <Route path="/resultado" element={<ResultadoBusca />} />
        <Route path="/minha-conta/:id" element={<MinhaConta />} />
      </Route>
    </Routes>
  )
}

export default App
