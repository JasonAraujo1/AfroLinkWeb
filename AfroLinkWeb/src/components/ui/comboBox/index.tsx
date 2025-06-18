import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './comboBox.css'

export default function ComboBox({ dados, texto, onChange, value }) {
  return (
    <Autocomplete
      className="comboBox"
      disablePortal
      options={dados}
      value={value || null} // ← valor selecionado
      onChange={(event, newValue) => onChange && onChange(newValue)}
      sx={{
        width: 210,
        '& .MuiOutlinedInput-root': {
          borderRadius: '0px',
          backgroundColor: 'white',
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiInputBase-input': {
          padding: '10px',
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={texto}
          variant="outlined"
        />
      )}
    />
  );
}
