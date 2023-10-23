var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import BoxCarregando from "@/components/carregando/boxcarregando";
import { Suspense } from "react";
import { cookieAction } from "src/app/action";
import { TratarQuestao } from "src/contexts/questaoDiagnostica";
import BoasVindasAvaliacao from "src/interface/avaliacao/telavaliar";

export default async function LayoutProvas({children}){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var decode = await promisify(jwt.verify)(pegarCookieLogin.value, "OD2DS8S21DSA4SD4SS3A");
    return(
        <TratarQuestao>
            <body className="w-full h-full flex justify-center overflow-x-hidden">
                <BoasVindasAvaliacao nome={decode.nome}/>
                <Suspense fallback={<BoxCarregando tamanhos={'h-8 w-48 | mt-5 h-56 w-full | mt-10 h-14 w-full | mt-8 h-8 w-full | mt-4 h-8 w-9/12 | mt-4 h-8 w-4/12 | mt-4 h-8 w-2/4 | mt-4 h-8 w-10/12'} global={'w-7/12 mt-20'}/>}>
                    {children}
                </Suspense>
            </body>
        </TratarQuestao>

    )
}