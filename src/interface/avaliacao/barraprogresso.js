'use client'
import { useEffect } from "react"
import { usarConteudoQuestao } from "src/contexts/questaoDiagnostica"
export default function BarraProgresso({materia}){
    const porcentagemQuestao = ['0%','5%','10%','15%','20%','25%','30%','35%','40%','45%','50%','55%','60%','65%','70%','75%','80%','85%','90%','95%','100%']
    const { contarQuestao } = usarConteudoQuestao()
    return(
        <section className="flex w-full gap-5 items-center justify-center">
            <div className="font-semibold text-xl -mt-2">{contarQuestao}</div>
            <div className="w-3/4 h-3 bg-gray-200 rounded-lg relative"><div style={{ width: porcentagemQuestao[contarQuestao]}} className={`h-3 bg-blue-500 rounded-lg absolute`}/></div>
            <div className="font-semibold text-xl -mt-2">{materia}</div>
        </section>
    )
}