import './inputBranco.css';

export default function InputBranco({placeholder, texto}) {
  return (
    <div className='divInputBranco'>
        <span className='divInputBranco_span'>{texto}</span>
        <input className='divInputBranco_input' type="text"  disabled placeholder={placeholder}/>
    </div>
  )
}
