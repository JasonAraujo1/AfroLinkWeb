import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function InputBusca({onClick}) {

 
  return (
    <TextField
      
      placeholder="Buscar Profissional..."
      variant="outlined"
      size="small"
      onClick={onClick}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
