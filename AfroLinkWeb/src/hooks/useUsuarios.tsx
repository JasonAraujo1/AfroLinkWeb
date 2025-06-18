import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { fetchApiUsers } from "../services/fetchApi";
import { useNavigate } from "react-router";

export function useUsuarios() {
    const navigate = useNavigate();

    const context = useContext(Context);

    if (!context) {
        throw new Error("HomeComum deve estar dentro do Provider do Contexto");
    }
    const { setFiltroIDProfissionalSelecionado, setDadosTodosUsers, dadosUser } = context

    useEffect(() => {
        async function onLoad() {
            const usuarios = await fetchApiUsers();
            setDadosTodosUsers(usuarios)
        }
        onLoad();
    }, []);

    const handleNavigate = async (profissao: string) => {
        const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?profissao=${profissao}`)
        const res = await req.json()

        if (Array.isArray(res)) setDadosTodosUsers(res)
        else setDadosTodosUsers([])
    }

    async function handleVerMais(id: string) {
        setFiltroIDProfissionalSelecionado(id)
        localStorage.setItem("profissionalId", id)
        navigate('/verMais')
    }

    async function handleSolicitar() {

        const dataHora = new Date();
        const dataFormatada = dataHora.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        })

        const data = {
            data_solicitacao: dataFormatada,
            id_usuario_comum: Number(dadosUser.id),
            id_usuario_profissional: Number(filtroIDProfissionalSelecionado.id),
            status: "pendente",
        };

        const url = "https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes"

        const req = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()

        alert("Solicitação feita!")
    }




    return {
        handleNavigate,
        handleVerMais,
        handleSolicitar
    }
}