export default function ButtonPretoArredondado({ texto, onClick }) {
    return (
        <button onClick={onClick} style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '20px 30px',
            borderRadius: '50px',
            cursor: 'pointer'
        }}>
            {texto}
        </button>
    );
}
