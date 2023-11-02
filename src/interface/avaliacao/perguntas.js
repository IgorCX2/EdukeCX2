'use client'
import { useState,useEffect, memo } from "react"
import { usarConteudoQuestao } from "src/contexts/questaoDiagnostica";
async function AnalisarQuestao(dados, config, id, resposta, segundos) {
    try {
        const analisarquestao = await fetch(`http://localhost:8080/api/analisarQuestoes/diagnostico`, {
            method: 'POST',
            body: JSON.stringify({ dados, config, id, resposta, segundos}),
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://aprendacomeduke.com.br'
            }
        });
        return analisarquestao.json()
    } catch (error) {
        return error
    }
}
function Perguntas({ ResposeAlternativas, dados, infos, id }) {
    const {addContador, temporizador} = usarConteudoQuestao()
    const [response, setResponse] = useState('')
    const [resposta, setResposta] = useState('')
    const [segundo, setSegundos] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            if (temporizador !== false) {
                setSegundos(segundo => segundo + 1);
            }
        }, 1000);
        
        return () => clearInterval(timer);
    }, [temporizador]);
    var contAlternativas = -1
    const alternativas = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const SendEnviarQuestao = async e => {
        e.preventDefault()
        if(resposta){
            const bucarAnaliseQuestao = await AnalisarQuestao(dados, infos, id, resposta, 0)
            addContador(bucarAnaliseQuestao)
            setSegundos(0)
            setResposta('')
        }else{
            setResponse('Você deve assinalar alguma alternativa!')
        }
    }
    return (
        <div className="w-full flex flex-col gap-2">
            {resposta}
            <form className={`flex w-full md:flex-nowrap flex-wrap justify-between py-10 mt-5`} onSubmit={SendEnviarQuestao}>
                <div className=' flex flex-col gap-5 text-lg'>
                    {ResposeAlternativas.split('¬').map((alternativa) => {
                        contAlternativas++
                        const trafromAlternativas = contAlternativas
                        const dividiAlternativa = alternativa.split('|')
                        if (dividiAlternativa.length == 2) {
                            return(
                            <div onClick={() => setResposta(`${trafromAlternativas}|${dividiAlternativa[1]}`)}  key={alternativas[trafromAlternativas]} className={`flex ${resposta == trafromAlternativas+"|"+dividiAlternativa[1] && 'font-medium'} hover:scale-105`}>
                                <p><strong>{alternativas[trafromAlternativas]})</strong>{dividiAlternativa[0]}{segundo}</p>
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
export default memo(Perguntas)