import { Suspense } from "react";
import Btn from "../Botoes/btn";
import AvaliarBloco from "./avaliarbloco";
import BuscarPlano from "./buscarplano";
import Link from "next/link";

export default async function PrincipalPlano({dados}){
    var contadorMaterias = -1
    return(
        <div className="flex flex-col gap-5 mt-4">
            <div><Btn configuracao={'bg-blue-500 text-white'} link={'/aprender/personalizar'}>PERSONALIZAR</Btn></div>
            <div className='w-full flex flex-wrap gap-8 mt-8'>
                {dados.infosUsuario.plano?.split(',').map(plano => {
                    contadorMaterias++
                    if (plano[0] != "A") {
                        return (
                            <Suspense fallback={'oooooooooo'}>
                                <BuscarPlano descricao={plano} posicao={contadorMaterias} />
                            </Suspense>
                        )
                    }
                    return (
                        <div className="mt-10 w-full">
                            <AvaliarBloco tipo={0} ativo={contadorMaterias}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}