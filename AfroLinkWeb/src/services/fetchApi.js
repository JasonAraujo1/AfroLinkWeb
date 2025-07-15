
export async function fetchApiUsers() {
  try {
    const response = await fetch("https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users")
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}

export async function fetchApiUsersComum() {
  try {
    const response = await fetch("https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?tipo=comum")
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}

export async function fetchProfissao(profissao) {
  try {
    const response = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users?profissao=${profissao}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}


export async function fetchApiEstados() {
  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}
export async function fetchApiMunicipios({UF_ID}) {
  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF_ID}/municipios`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}
export async function fetchApiProfissoes() {
  try {
    const response = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/profissoes`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}
export async function fetchApiSolicitacoes() {
  try {
    const response = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/solicitacoes`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("erro no fetch", error)
  }
}
