import { useContext } from "react"
import Context from "../../context/Context"

export default function ResultadoBusca() {
    const { profissionalEscohidoInput } = useContext(Context)

    if (!Array.isArray(profissionalEscohidoInput)) {
        return <p>Nenhum dado carregado.</p>
    }

    if (profissionalEscohidoInput.length === 0) {
        return <p>Nenhum profissional encontrado.</p>
    }

    return (
        <div>
            {profissionalEscohidoInput.map((item) => (
                <div key={item.id}>
                    <h1>{item.nome_completo}</h1>
                </div>
            ))}
        </div>
    )
}
