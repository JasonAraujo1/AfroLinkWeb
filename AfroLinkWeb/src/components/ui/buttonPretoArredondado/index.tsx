import './buttonPretoArredondado.css'
export default function ButtonPretoArredondado({ texto, onClick, OnclickLimpar }) {
    return (
        <div>
            <div className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
            </div>

            <div className="collapse" id="collapseExample">
                <div className="card card-body" >
                    <button className='card_btn' data-bs-toggle="collapse" data-bs-target="#collapseExample" onClick={OnclickLimpar}>Limpar filtros</button>
                </div>
            </div>
        </div>
    );
}
