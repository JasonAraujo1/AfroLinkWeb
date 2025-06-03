import { useContext } from 'react';
import SizeAvatars from '../components/ui/sizeAvatars';
import Context from '../context/Context';

export default function VerMaisProfissional() {
   const {filtroIDProfissionalSelecionado } = useContext(Context);
      console.log(filtroIDProfissionalSelecionado);
  return (
    <div>
      <h1>{filtroIDProfissionalSelecionado.nome_completo}</h1>
      <SizeAvatars/>
      
    </div>
  )
}
