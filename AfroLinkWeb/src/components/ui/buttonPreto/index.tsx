import './buttonPreto.css'

export default function ButtonPreto({ texto, onClick }) {
    return (
        <button className='btnBlack' onClick={onClick} style={{
            border: 'none',
            padding: '14px 20px',
            borderRadius: '10px',
            cursor: 'pointer'
        }}>
            {texto}
        </button>
    );
}
