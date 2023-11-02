var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import { cookieAction } from "src/app/action";
import PaginaDiagnostica from "src/interface/avaliacao/paginadiagnostica";
async function getDiagnostico(id){
    try{
        const questaoDiagnostica = await fetch(`http://localhost:8080/api/selecionarQuestoes/diagnostico`,{
            method: 'POST',
            body: JSON.stringify({id}),
            headers: { 'Content-Type': 'application/json',
            'Origin': 'http://aprendacomeduke.com.br'}
        })
        return questaoDiagnostica.json()
    }catch(error) {
        return error
    }
}
export default async function Diagnostica(){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var decode = await promisify(jwt.verify)(pegarCookieLogin.value, "OD2DS8S21DSA4SD4SS3A");
    const questaoData = await getDiagnostico(decode.id);
    console.log(questaoData)
    return <PaginaDiagnostica infos={questaoData} id={decode.id} nome={decode.nome}/>
}