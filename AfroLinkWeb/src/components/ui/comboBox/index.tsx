import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({dados,texto}) {

  return (
    <Autocomplete
      disablePortal
      options={dados}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={texto} />}
    />
  );
}
