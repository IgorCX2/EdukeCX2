import IncluirOrganizacao from '@/components/aprender/organizar/incluirBtns';
import OrganizarLista from '@/components/aprender/organizar/organizacaoLista';
import { Suspense } from 'react';
import { cookieAction } from 'src/app/action';
var jwt = require('jsonwebtoken');
const { promisify } = require('util');

export default async function PersonalizarEstudo(){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var decode = await promisify(jwt.verify)(pegarCookieLogin.value, "OD2DS8S21DSA4SD4SS3A");
    return(
        <section className='w-full'>
            <h1 className={`text-4xl font-bold mb-7`}>Personalizar Meu Plano</h1>
            <IncluirOrganizacao id={decode.id}/>
            <Suspense fallback={'carregando'}>
                <OrganizarLista id={decode.id}/>
            </Suspense>
        </section>
    )
}