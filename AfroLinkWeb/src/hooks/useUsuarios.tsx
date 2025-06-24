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
    const { setDadosTodosUsers, dadosUser, dadosTodosUsers } = context

    useEffect(() => {
        async function onLoad() {
            const usuarios = await fetchApiUsers();
            setDadosTodosUsers(usuarios)
        }
        onLoad();
    }, []);



    async function handleVerMais(id: string) {
        navigate(`/ver-mais/${id}`)
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

    function handleBuscaPorIcone(profissao: string) {
        const resultados = dadosTodosUsers.filter(user => user.profissao === profissao);

        if (resultados.length > 0) {
            localStorage.setItem("profissionalEscohidoInput", JSON.stringify(resultados));
            navigate("/resultado");
        } else {
            alert("Nenhum profissional encontrado para: " + profissao);
            navigate("/");
        }
    }

    function handleSair() {
        localStorage.removeItem("userEncontrado");
        window.location.reload();
        navigate('/')
    }

    return {
        handleVerMais,
        handleSolicitar,
        handleBuscaPorIcone,
        handleSair
    }
}