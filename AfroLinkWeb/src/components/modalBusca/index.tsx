import { useState } from 'react'

export default function ModalBusca() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function abrirModal() {
        setIsModalOpen(true);
    }

    function fecharModal() {
        setIsModalOpen(false);
    }
    return (
        <div>
            <span onClick={abrirModal}><input placeholder='Buscar Profissional'/>🔍</span>
            {isModalOpen && (
                <div className='modalOverlay'>
                    <div className='modalContent FlexColumn'>
                        <button onClick={fecharModal}>❌</button>
                        <input placeholder='Buscar profissional...' type="text" />
                        <h2>Filtrar Busca</h2>

                        <span>Profissão</span>
                        <select onChange={(event) => setTipo(event.target.value)}>
                            <option value="" >-- Profissão --</option>
                            <option value="" >1</option>
                        </select>

                        <span>Estado</span>
                        <select onChange={(event) => setTipo(event.target.value)}>
                            <option value="" >-- Estado --</option>
                            <option value="" >2</option>
                        </select>

                        <span>Cidade</span>
                        <select onChange={(event) => setTipo(event.target.value)}>
                            <option value="" >-- Cidade --</option>
                            <option value="" >3</option>
                        </select>
                        <button>Aplicar</button>

                    </div>
                </div>
            )}
        </div>
    )
}
