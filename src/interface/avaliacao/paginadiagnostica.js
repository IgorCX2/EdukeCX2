'use client'

import { usarConteudoQuestao } from "src/contexts/questaoDiagnostica"
import Questoes from "./questoes"

export default function PaginaDiagnostica({infos, id}){
    const {historico} = usarConteudoQuestao()
    return <Questoes infos={infos} dados={historico} id={id}/>
}