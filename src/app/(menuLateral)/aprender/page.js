import dynamic from 'next/dynamic'
var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import { cookieAction } from 'src/app/action';

const AvaliarBloco = dynamic(() => import('@/components/aprender/avaliarbloco'));
const SelecionarNivel = dynamic(() => import('@/components/aprender/selecionarnivel'));
const VideoIntroducao = dynamic(() => import('@/components/aprender/videointroducao'));

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
export default async function Aprender(){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var decode = await promisify(jwt.verify)(pegarCookieLogin.value, "OD2DS8S21DSA4SD4SS3A");
    const responseEnv = await infosPlano(decode.id)
    console.log(responseEnv)
    var contadorMateria = -1
    return(
        <section className='w-full'>
            <h1 className={`text-4xl font-bold ${(responseEnv.status.stats != 5 && !responseEnv.infosUsuario.plano && responseEnv.infosUsuario.nivel) ? 'mb-16' : 'mb-7'}`}>Meu Plano</h1>
            {responseEnv.status.stats == 5 && <VideoIntroducao id={decode.id} nome={decode.nome}/>}
            {(!responseEnv.infosUsuario.nivel) && <SelecionarNivel id={decode.id}/>}
            {(responseEnv.status.stats != 5 && !responseEnv.infosUsuario.plano && responseEnv.infosUsuario.nivel) && <AvaliarBloco tipo={1}/>}

        </section>
    )
}