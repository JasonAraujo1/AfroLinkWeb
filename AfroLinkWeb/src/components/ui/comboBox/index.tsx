import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ dados, texto, onChange }) {
  return (
    <Autocomplete
      disablePortal
      options={dados}
      sx={{ width: 300 }}
      onInputChange={(event, newValue) => onChange && onChange(newValue)}
      renderInput={(params) => <TextField {...params} label={texto} />}
    />
  );
}
