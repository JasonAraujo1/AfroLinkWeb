import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import Context from '../../../context/Context';
import './sizeAvatars.css'

export default function SizeAvatars() {
  const { filtroIDProfissionalSelecionado } = useContext(Context);
  return (
    <div className='avatar'>
      <Stack direction="row" spacing={2} >
        <Avatar
          alt={filtroIDProfissionalSelecionado?.nome_completo}
          src={filtroIDProfissionalSelecionado?.foto || undefined}
          sx={{ width: 300, height: 300, borderRadius: 11 }}
          className='avatarFoto'
        />
      </Stack>
    </div>
  );

}


