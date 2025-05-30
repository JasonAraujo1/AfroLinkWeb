export default function InputTexto({ onChange, placeholder, onClick, src }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
      }}
    >

      <input
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid rgba(124, 120, 120, 0.63)',
          padding: '14px 20px 14px 40px', // espaço para o ícone
          borderRadius: '10px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
       {src && (
        <img
          src={src}
          alt="Ícone"
          style={{
            position: 'absolute',
            right: '12px',
            width: '28px',
            height: '28px',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}
