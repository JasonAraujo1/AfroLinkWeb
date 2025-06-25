import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import Context from '../../../context/Context';
import fotoPadrao from '../../../assets/userfoto.png'; // <- sua imagem local
import './sizeAvatars.css';

export default function SizeAvatars() {
  const { filtroIDProfissionalSelecionado } = useContext(Context);

  const temFotoValida = filtroIDProfissionalSelecionado?.foto && Object.keys(filtroIDProfissionalSelecionado.foto).length > 0;
  const fotoExibir = temFotoValida ? filtroIDProfissionalSelecionado.foto : fotoPadrao;

  return (
    <div className='avatar'>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt={filtroIDProfissionalSelecionado?.nome_completo}
          src={fotoExibir}
          sx={{ width: 300, height: 300, borderRadius: 11 }}
          className='avatarFoto'
        />
      </Stack>
    </div>
  );
}
