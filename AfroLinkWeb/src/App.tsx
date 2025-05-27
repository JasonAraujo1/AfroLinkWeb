import { Route, Routes } from 'react-router'
import './App.css'
import Home from './home'
import Cadastro from './cadastro'
import Login from './login'


function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
  )
}

export default App
