import AutoSugestaoIncluir from "./btnIncluirDados";

async function pegarPlano() {
    try {
        const apiInfos = await fetch(`http://localhost:8080/api/estudar/get-planoALl`, {
            cache: 'force-cache',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://aprendacomeduke.com.br'
            }
        });
        return apiInfos.json()
    } catch (error) {
        return error
    }
}
export default async function IncluirOrganizacao({id}){
    const todosPlanos = await pegarPlano()
    return(
        <AutoSugestaoIncluir data={todosPlanos} id={id}/>
    )
}