import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useContext, useEffect, useState } from 'react';
import Context from '../../../context/Context';

export default function LetterAvatars() {
  const { dadosUser } = useContext(Context);
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (dadosUser && dadosUser.nome_completo) {
      setLetra(dadosUser.nome_completo.charAt(0).toUpperCase());
    }
  }, [dadosUser]);

  if (!dadosUser) return null;

  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end', width: '100%' }}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
        {letra}
      </Avatar>
    </Stack>

  );
}
