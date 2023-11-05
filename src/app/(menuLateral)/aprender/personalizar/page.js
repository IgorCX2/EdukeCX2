import ListaOrganizar from '@/components/aprender/organizar/listaOrganizar';
import { Suspense } from 'react';
import { cookieAction } from 'src/app/action';
var jwt = require('jsonwebtoken');
const { promisify } = require('util');
async function infosPlano(id) {
    try {
        const apiInfos = await fetch(`http://localhost:8080/api/usuariosInfos/pegar-informacoes/?id=${Number(id)}`, {
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
async function pegarPlano() {
    try {
        const apiInfos = await fetch(`http://localhost:8080/api/estudar/get-planoALL`, {
            method: 'GET',
            cache: 'force-cache',
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
export default async function PersonalizarEstudo(){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var decode = await promisify(jwt.verify)(pegarCookieLogin.value, "OD2DS8S21DSA4SD4SS3A");
    const resonseEnv = await infosPlano(decode.id)
    const todosPlanos = await pegarPlano()
    return(
        <section className='w-full'>
            <h1 className={`text-4xl font-bold mb-7`}>Personalizar Meu Plano</h1>
            <Suspense fallback={'teste'}>
                <ListaOrganizar data={resonseEnv.infosUsuario.plano.split(',')} planos={todosPlanos} id={decode.id}/>
            </Suspense>
        </section>
    )
}