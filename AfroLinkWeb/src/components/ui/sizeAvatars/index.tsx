import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import Context from '../../../context/Context';

export default function SizeAvatars() {
    const {filtroIDProfissionalSelecionado } = useContext(Context);
  return (
    <Stack direction="row" spacing={2} >

      <Avatar
        alt={filtroIDProfissionalSelecionado?.nome_completo}
        src={filtroIDProfissionalSelecionado?.foto || undefined}
        sx={{ width: 200, height: 200}}
      />
    </Stack>
  );

}


