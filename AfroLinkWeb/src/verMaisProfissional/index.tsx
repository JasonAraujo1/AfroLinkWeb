import { useContext } from 'react';
import SizeAvatars from '../components/ui/sizeAvatars';
import Context from '../context/Context';

export default function VerMaisProfissional() {
   const {filtroIDProfissionalSelecionado } = useContext(Context);

   return (
    <div className='FlexColumn'>
      <SizeAvatars/>
      <span>{filtroIDProfissionalSelecionado.nome_completo}</span>
      <span>{filtroIDProfissionalSelecionado.profissao}</span>
      <span>{filtroIDProfissionalSelecionado.avaliacoes}</span>

      <span>Sobre</span>
      <span>{filtroIDProfissionalSelecionado.descricao}</span>
      
    </div>
  )
}
