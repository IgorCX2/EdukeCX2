'use client'

import { useState } from "react"

export default function MudarConteudo({cod_conteudo ,conteudo, meuConteudos, materia}){
    const coresShadow = ["shadow-rose-800", "shadow-blue-800", "shadow-orange-800", "shadow-yellow-800", "shadow-emerald-800", "shadow-lime-800", "shadow-teal-800", "shadow-violet-800", "shadow-pink-800", "shadow-fuchsia-800", "shadow-sky-800"]
    const coresBg = ["bg-rose-500", "bg-blue-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-lime-500", "bg-teal-500", "bg-violet-500", "bg-pink-500", "bg-fuchsia-500", "bg-sky-500"]
    const [verificarConteudo, setVerificarConteudo] =useState(meuConteudos)
    const addConteudo = (conteudoPlano) => {
        console.log(conteudoPlano)
        if (verificarConteudo.includes(conteudoPlano)) {
            setVerificarConteudo(verificarConteudo.filter(item => item !== conteudoPlano));
          } else {
            setVerificarConteudo([...verificarConteudo, conteudoPlano]);
          }
          console.log()
    }
    return(
        <div className="flex flex-col gap-2 mt-10">
            <h2 className="font-bold text-3xl">Personalize o seu Plano de Estudos!</h2>
            <span className="italic ">Aqueles que forem selecionados serão minuciosamente examinados, enquanto os que não forem escolhidos serão sujeitos a uma revisão.</span>

            <div className="flex justify-between mt-10 px-8">
                {cod_conteudo.map(conteudoPlano => {
                    return(
                        <div key={conteudoPlano} onClick={() => addConteudo(conteudoPlano)} className={`flex flex-col gap-5 cursor-pointer justify-center bg-white items-center w-44 h-44 ${!verificarConteudo.includes(conteudoPlano) && coresShadow[materia]} shadow-2xl rounded-lg`}>
                            <strong className="text-lg text-center">{conteudo[0]}</strong>
                        </div>
                    )
                })}
            </div>
            <div className="mt-10 ml-8"><button className={`rounded-lg font-bold py-2.5 px-4 ${coresBg[materia]} text-white`}>SALVAR</button></div>
        </div>
    )
}