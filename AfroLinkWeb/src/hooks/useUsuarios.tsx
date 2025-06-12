import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { fetchApiUsers } from "../services/fetchApi";

export function useUsuarios() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("HomeComum deve estar dentro do Provider do Contexto");
    }
    const { dadosTodosUsers, setDadosTodosUsers } = context

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

    return {
        dadosTodosUsers,
        handleNavigate
    }
}