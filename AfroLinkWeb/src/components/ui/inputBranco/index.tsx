import './inputBranco.css';

export default function InputBranco({valor, texto, disabled }) {
  return (
    <div className='divInputBranco'>
        <span className='divInputBranco_span'>{texto}</span>
        <input className='divInputBranco_input' type="text"  disabled={disabled} value={valor}/>
    </div>
  )
}
