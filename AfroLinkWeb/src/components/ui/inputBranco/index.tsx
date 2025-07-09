import './inputBranco.css';

export default function InputBranco({ valor, texto, disabled, onChange, name ,type }) {
  return (
    <div className='divInputBranco'>
      <span className='divInputBranco_span'>{texto}</span>
      <input
        className='divInputBranco_input'
        type={type}
        disabled={disabled}
        value={valor || ''}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

