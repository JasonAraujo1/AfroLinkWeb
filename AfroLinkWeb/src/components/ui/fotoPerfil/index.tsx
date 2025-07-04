import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import Context from '../../../context/Context';
import fotoPadrao from '../../../assets/userfoto.png'; 

export default function FotoPerfil() {
  const { dadosUser } = useContext(Context);

  console.log('dadosUser', dadosUser);

  const temFotoValida = dadosUser?.foto && Object.keys(dadosUser.foto).length > 0;
  const fotoExibir = temFotoValida ? dadosUser.foto : fotoPadrao;

  return (
    <div className='avatar'>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt={dadosUser?.nome_completo}
          src={fotoExibir}
          sx={{ width: 300, height: 300, borderRadius: 5 }}
          className='avatarFoto'
        />
      </Stack>
    </div>
  );
}
