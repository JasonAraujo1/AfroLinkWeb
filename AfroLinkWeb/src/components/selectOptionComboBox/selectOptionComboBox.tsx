import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectOptionComboBox({ dados, texto, onChange, value, disabled }) {
    return (
        <div className="div-select-tipo">
            <span className="span">{texto}</span>
            <Autocomplete
                disabled={disabled}
                className="autocomplete"
                disablePortal
                options={dados}
                value={value || null}
                onChange={(event, newValue) => onChange && onChange(newValue)}
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '0.8rem',
                        border: '0.13rem solid #f0eeeee0',
                        backgroundColor: 'white',
                        fontWeight: 400,
                        fontSize: '1.3rem',
                        fontFamily: "Darker Grotesque",
                        color: 'black',
                        padding: '0.5rem',
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
                        padding: '1rem',
                    },
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
}
