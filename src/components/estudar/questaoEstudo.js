import markdownStyles from "../../../markdown-styles.module.css"
import markdownToHtml from "../../../script/markdownToHtml";
import PerguntasEstudo from "./perguntasEstudo.js"
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
export default async function QuestaoEstudae({id}){
    const responseQuestao = await getQuestao(id)
    const questaoMark = responseQuestao.texto != "N.D.A" && await markdownToHtml(responseQuestao.texto) || ""
    const perguntaMark = await markdownToHtml(responseQuestao.pergunta) || ""
    return(
        <main className="mt-10  flex flex-col justify-center items-center">
        <section className="mt-20">
            <div className="flex flex-col text-lg w-full">
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
            <PerguntasEstudo ResposeAlternativas={responseQuestao.alternativas} id={id}/>
        </section>
    </main>
    )
}