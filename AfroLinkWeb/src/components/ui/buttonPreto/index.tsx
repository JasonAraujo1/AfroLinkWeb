import './buttonPreto.css'

export default function ButtonPreto({ texto, onClick }) {
    return (
        <button onClick={onClick} style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '14px 20px',
            borderRadius: '10px',
            cursor: 'pointer'
        }}>
            {texto}
        </button>
    );
}
