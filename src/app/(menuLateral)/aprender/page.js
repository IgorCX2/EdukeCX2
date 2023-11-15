import PrincipalPlano from '@/components/aprender/planosdestudos';
import dynamic from 'next/dynamic'
var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import { cookieAction } from 'src/app/action';

const AvaliarBloco = dynamic(() => import('@/components/aprender/avaliarbloco'));
const SelecionarNivel = dynamic(() => import('@/components/aprender/selecionarnivel'));
const VideoIntroducao = dynamic(() => import('@/components/aprender/videointroducao'));

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
export default async function Aprender(){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    const responseEnv = await infosPlano(pegarCookieLogin.id)
    return(
        <section className='w-full'>
            <h1 className={`text-4xl font-bold ${(responseEnv.status.stats != 5 && !responseEnv.infosUsuario.plano && responseEnv.infosUsuario.nivel) ? 'mb-16' : 'mb-7'}`}>Meu Plano</h1>
            {responseEnv.status.stats == 5 && <VideoIntroducao id={pegarCookieLogin.id} nome={pegarCookieLogin.nome}/>}
            {(!responseEnv.infosUsuario.nivel) && <SelecionarNivel id={pegarCookieLogin.id}/>}
            {(responseEnv.status.stats != 5 && !responseEnv.infosUsuario.plano && responseEnv.infosUsuario.nivel) && <AvaliarBloco tipo={1}/>}
            {responseEnv.infosUsuario.plano && <PrincipalPlano dados={responseEnv}/>}
        </section>
    )
}