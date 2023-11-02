'use client'
import { useEffect } from "react"
import { usarConteudoQuestao } from "src/contexts/questaoDiagnostica"
export default function BarraProgresso({materia}){
    const porcentagemQuestao = ['7%','14%','21%','28%','35%','42%','56%','63%','70%','77%','84%','91%','100%']
    const { contarQuestao } = usarConteudoQuestao()
    return(
        <section className="flex w-full gap-5 items-center justify-center">
            <div className="font-semibold text-xl -mt-2">{contarQuestao+1}</div>
            <div className="w-3/4 h-3 bg-gray-200 rounded-lg relative"><div style={{ width: porcentagemQuestao[contarQuestao]}} className={`h-3 bg-blue-500 rounded-lg absolute`}/></div>
            <div className="font-semibold text-xl -mt-2">{materia}</div>
        </section>
    )
}