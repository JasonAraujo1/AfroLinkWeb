import './homeComum.css';
import foto from "../../assets/userfoto.png"
import star from '../../assets/star.svg'
import { useUsuarios } from '../../hooks/useUsuarios';
import { useEffect, useState } from 'react';

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
          {profissional.map(e => (
              <div key={e.id}
                className={`containerPerfis fade-in-scale fade-delay-1`}
                onClick={() => handleVerMais(e.id)}           
              >
                <img src={foto} alt="fotoUser" className='containerPerfil_fotoUser fade-in-scale' />
                <div className='containerPerfil_div fade-in'>
                  <h4 className='containerPerfil_div_h4'>{e.nome_completo}</h4>
                  <span className='containerPerfil_div_span1'>{e.profissao}</span>
                  <span className='containerPerfil_div_span2'>
                    <img className='containerPerfil_div_star' src={star} alt="" />
                    <span> {e.avaliacoes} Avaliações</span>
                  </span>
                  <p className='containerPerfil_div_p'>{e.descricao}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
   
       
    </div>

  )
}
