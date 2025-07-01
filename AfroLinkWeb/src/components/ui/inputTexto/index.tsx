import { useState } from 'react';
import './inputTexto.css';
import eye from '../../../assets/eye.svg';
import eyeOff from '../../../assets/eye-off.svg';

export default function InputTexto({ onChange, placeholder, onClick, src, type }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

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
        type={inputType}
        style={{
          backgroundColor: '#F7F6F6',
          color: 'black',
          border: 'none',
          padding: '14px 20px 14px 40px',
          borderRadius: '10px',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '10px',
        }}
      />

      {isPassword ? (
        <img
          src={showPassword ? eyeOff : eye}
          alt="Mostrar senha"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '12px',
            width: '24px',
            height: '24px',
            cursor: 'pointer',
          }}
        />
      ) : (
        src && (
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
        )
      )}
    </div>
  );
}
