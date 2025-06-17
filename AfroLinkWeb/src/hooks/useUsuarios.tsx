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
    const { setFiltroIDProfissionalSelecionado, dadosTodosUsers, setDadosTodosUsers } = context

    useEffect(() => {
        async function onLoad() {
            const usuarios = await fetchApiUsers();
            console.log(usuarios)
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
        navigate('/verMais')

    }

    return {
        dadosTodosUsers,
        handleNavigate,
        handleVerMais
    }
}