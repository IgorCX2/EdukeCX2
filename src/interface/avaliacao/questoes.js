import dynamic from 'next/dynamic'
const Perguntas = dynamic(() => import('./perguntas'), { ssr: false })
import markdownStyles from "../../../markdown-styles.module.css"
import markdownToHtml from "../../../script/markdownToHtml";
import BarraProgresso from "./barraprogresso";
import FinalizarAvaliacao from './telafinalizaravaliacao';
async function getQuestao(idQuestao) {
    try {
        const analisarquestao = await fetch(`https://api.aprendacomeduke.com.br/api/questoes/get-questao/?idQuestao=${idQuestao}`, {
            cache: 'force-cache',
            method: 'GET',
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
export default async function Questoes({dados, infos, id, nome}){
    var BuscarQuestao = infos.questoesAvaliar[0][0][0]
    if(dados.dificuldade != ''){
        if (dados.Validar == "S") {
            return <FinalizarAvaliacao returnInfo={dados} nome={nome}/>
        }
        BuscarQuestao = infos.questoesAvaliar[dados.historicomateria][dados.conteudoLocal][0]
    }
    const responseQuestao = await getQuestao(BuscarQuestao.id)
    const questaoMark = responseQuestao.texto != "N.D.A" && await markdownToHtml(responseQuestao.texto) || ""
    const perguntaMark = await markdownToHtml(responseQuestao.pergunta) || ""
    const materiaLista = ["Matemática", "Português", "Geografia", "História", "Biologia", "Química", "Física", "Literatura", "Artes", "Sociologia", "Filosofia", "Emocional"]
    return(
        <main className="mt-10 w-9/12 flex flex-col justify-center items-center">
            <BarraProgresso materia={materiaLista[BuscarQuestao.materia]}/>
            <section className="mt-20 w-3/4">
                <div className="flex flex-col text-lg w-full">
                    <div className="font-medium">{BuscarQuestao.banca}-{BuscarQuestao.lote}</div>
                    <div className="mt-5">
                        {questaoMark?.split('¨').map((textos) => {
                            const separar_texto = textos?.split('§')
                            if (separar_texto.length > 0) {
                                return (
                                    <div className="flex w-full justify-between gap-6 items-end" key={textos}>
                                        {separar_texto.map((textoseparado) => {
                                            return (
                                                <div key={textoseparado} className={`${markdownStyles['markdown']} text-xl`} dangerouslySetInnerHTML={{ __html: textoseparado }} />
                                            )
                                        })}
                                    </div>
                                )
                            } else {
                                return (
                                    <div className={`${markdownStyles['markdown']} text-xl`} dangerouslySetInnerHTML={{ __html: textos }} />
                                )
                            }
                        })}
                    </div>
                    <div className="md:mt-14 mt-0">
                        <h1 className={`${markdownStyles['markdown']} mt-5 text-2xl font-medium`} dangerouslySetInnerHTML={{ __html: perguntaMark }} />
                    </div>
                </div>
                <Perguntas ResposeAlternativas={responseQuestao.alternativas} dados={dados} infos={infos} id={id}/>
            </section>
        </main>
    )
}