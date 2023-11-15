import ListaOrganizar from '@/components/aprender/organizar/listaOrganizar';
import { Suspense } from 'react';
import { cookieAction } from 'src/app/action';
var jwt = require('jsonwebtoken');
const { promisify } = require('util');
async function infosPlano(id) {
    try {
        const apiInfos = await fetch(`https://api.aprendacomeduke.com.br/api/usuariosInfos/pegar-informacoes/?id=${Number(id)}`, {
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
        const apiInfos = await fetch(`https://api.aprendacomeduke.com.br/api/estudar/get-planoALL`, {
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
    const resonseEnv = await infosPlano(pegarCookieLogin.id)
    const todosPlanos = await pegarPlano()
    return(
        <section className='w-full'>
            <h1 className={`text-4xl font-bold mb-7`}>Personalizar Meu Plano</h1>
            <ListaOrganizar data={resonseEnv.infosUsuario.plano.split(',')} planos={todosPlanos} id={pegarCookieLogin.id}/>
        </section>
    )
}