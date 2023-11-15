'use client'
import { useState,useEffect, memo } from "react"
function PerguntasEstudo({ ResposeAlternativas, id }) {
    const alternativas = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    var contAlternativas = -1
    const [response, setResponse] = useState('')
    const [resposta, setResposta] = useState('')
    return (
        <div className="w-full flex flex-col gap-2">
            {resposta}
            <form className={`flex w-full md:flex-nowrap flex-wrap justify-between py-10 mt-5`}>
                <div className=' flex flex-col gap-5 text-lg'>
                    {ResposeAlternativas.split('¬').map((alternativa) => {
                        contAlternativas++
                        const trafromAlternativas = contAlternativas
                        const dividiAlternativa = alternativa.split('|')
                        if (dividiAlternativa.length == 2) {
                            return(
                            <div key={alternativas[trafromAlternativas]} className={`flex ${resposta == trafromAlternativas+"|"+dividiAlternativa[1] && 'font-medium'} hover:scale-105`}>
                                <p><strong>{alternativas[trafromAlternativas]})</strong>{dividiAlternativa[0]}</p>
                            </div>
                            )
                        }
                    })}
                </div>
                <div className='flex flex-col justify-between gap-5 md:ml-4 ml-0 md:w-auto w-full md:mt-0 mt-8'>
                    <button className='rounded-lg bg-blue-500 text-white p-2 font-bold h-full md:w-auto w-full'>Responder</button>
                </div> 
            </form>
            {response}
        </div>
    )
}
export default memo(PerguntasEstudo)