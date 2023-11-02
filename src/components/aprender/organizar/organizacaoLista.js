import { Suspense } from "react";
import BuscarPlanoOrganizacao from "./buscarplanoOrganizacao";

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
export default async function OrganizarLista({id}){
    const resonseEnv = await infosPlano(id)
    return(
        <div className="flex flex-col gap-10 mt-10">
            {resonseEnv.infosUsuario.plano.split(',').map(plano => {
                if(plano != 'A'){
                    return(
                        <Suspense fallback={'carregando'}>
                            <BuscarPlanoOrganizacao descricao={plano}/>
                        </Suspense>
                    )
                }
            })}
        </div>
    )
}