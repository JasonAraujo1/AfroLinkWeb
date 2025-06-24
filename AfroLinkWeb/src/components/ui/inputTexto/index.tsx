import './inputTexto.css'

export default function InputTexto({ onChange, placeholder, onClick, src }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minWidth: '300px',  
      }}
    >
      <input
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          backgroundColor: ' #F7F6F6',
          color: 'black',
          border: 'none',
          padding: '14px 20px 14px 40px',
          borderRadius: '10px',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom:'10px',
     
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
