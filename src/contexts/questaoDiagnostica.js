'use client'

import { createContext, useContext, useState } from "react"

export const conteudoQuestao = createContext({})
export const TratarQuestao = ({children}) => {
    const [contarQuestao, setContarQuestao] = useState(0)
    const [temporizador, setTemporizador] = useState(false)
    const [historico, setHistorico] = useState({
        Validar: '',
        historicomateria: [],
        conteudoLocal: [],
        respostasHistorico: [],
        dificuldade: [],
        historicoPosicao: [],
    })
    const addContador = async (response) => {
        console.log(response)
        if(response.Validar == "N"){
            setHistorico({...historico, Validar: response.Validar, historicomateria: response.materiaLocal, conteudoLocal: response.conteudoLocal, respostasHistorico: response.historico, dificuldade:response.dificuldade, historicoPosicao: response.historicoPosicao})
        }else{
            setHistorico({...historico})
        }
        setContarQuestao(Number(contarQuestao)+1)
    }
    return(
        <conteudoQuestao.Provider value={{contarQuestao, addContador, historico, temporizador, setTemporizador}}>
            {children}
        </conteudoQuestao.Provider>
    )
}
export const usarConteudoQuestao = () => {
    const context = useContext(conteudoQuestao)
    return context
}