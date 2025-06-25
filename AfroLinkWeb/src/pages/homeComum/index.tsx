import './homeComum.css';
import { useUsuarios } from '../../hooks/useUsuarios';
import { useEffect, useState } from 'react';
import CardPerfis from '../../components/cardsPerfis';

export default function HomeComum() {

  const { handleVerMais } = useUsuarios()

  const[profissional , setProfissional] = useState([])



  useEffect(()=>{
   async function onLoad(){
     const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?tipo=profissional`)
     const res = await req.json()
     setProfissional(res)
   }
   onLoad() 
  },[])
   

  return (
    <div className='containerHome fade-in-scale fade-delay-1'>
      <span className='containerHome_span fade-in fade-delay-3'>
        Alguns dos nossos Profissionais pelo Brasil:
      </span>
      <div className='containerTodosPerfis fade-in-scale fade-delay-3'>
        <div className='containerTodosPerfis_div'>
          <CardPerfis dados={profissional} funcaoClick={handleVerMais}/>
        </div>
      </div>
    </div>

  )
}
