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
    const handleRadioChange = (event) => {
        setResposta(event.target.value);
    };
    const SendEnviarQuestao = async e => {
        e.preventDefault()
        if(resposta){
            const bucarAnaliseQuestao = await AnalisarQuestao(dados, infos, id, resposta, 0)
            addContador(bucarAnaliseQuestao)
            setSegundos(0)
        }else{
            setResponse('Você deve assinalar alguma alternativa!')
        }
    }
    return (
        <div className="w-full flex flex-col gap-2">
            {resposta}
            <form className={`flex w-full flex-nowrap justify-between py-10 mt-5`} onSubmit={SendEnviarQuestao}>
                <div className=' flex flex-col gap-5 text-lg'>
                    {ResposeAlternativas.split('¬').map((alternativa) => {
                        contAlternativas++
                        const trafromAlternativas = contAlternativas
                        const dividiAlternativa = alternativa.split('|')
                        if (dividiAlternativa.length == 2) {
                            return(
                                <div className={`flex ${resposta == trafromAlternativas+"|"+dividiAlternativa[1] && 'font-medium'} hover:scale-105`} key={alternativas[trafromAlternativas]}>
                                    <input type="radio" className="appearance-none" id={alternativas[trafromAlternativas]} name="alternativas" value={trafromAlternativas+"|"+dividiAlternativa[1]} onChange={handleRadioChange}/>
                                    <label htmlFor={alternativas[trafromAlternativas]} ><strong>{alternativas[trafromAlternativas]})</strong>{dividiAlternativa[0]}{segundo}</label>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='flex flex-col justify-between gap-5 ml-4'>
                    <button className='rounded-lg bg-blue-500 text-white p-2 font-bold h-full'>Responder</button>
                </div> 
            </form>
            {response}
        </div>
    )
}
export default memo(Perguntas)