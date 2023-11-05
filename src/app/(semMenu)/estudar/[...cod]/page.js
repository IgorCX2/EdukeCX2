import { getContents } from "script/getContent"
import markdownStyles from '../../../../../markdown-styles.module.css'
import markdownToHtml from "script/markdownToHtml"
import NavegarEstudo from "@/components/estudar/navegar"
import Container from "@/components/containers/container"
import MudarConteudo from "@/components/estudar/mudarConteudo"
export default async function EstudarTela({ params }){
    const coresTo = ["to-rose-800", "to-blue-800", "to-orange-800", "to-yellow-800", "to-emerald-800", "to-lime-800", "to-teal-800", "to-violet-800", "to-pink-800", "to-fuchsia-800", "to-sky-800"]
    const coresFrom = ["from-rose-500", "from-blue-500", "from-orange-500", "from-yellow-500", "from-emerald-500", "from-lime-500", "from-teal-500", "from-violet-500", "from-pink-500", "from-fuchsia-500", "from-sky-500"]
    const planoCodigo = params.cod[1].split('%7C')
    var carregarArquivo = getContents(params.cod[0],planoCodigo)
    carregarArquivo.conteudo = await markdownToHtml(carregarArquivo.conteudo)
    return(
        <div className="fixed w-full h-full left-0 top-0 justify-between flex bg-white">
            <aside className="lg:relative h-full xl:w-80 lg:w-60 w-80 max-w-[calc(100%-3rem)] lg:flex flex absolute">
                <div className={`fixed h-full xl:w-80 lg:w-60 w-80 max-w-[calc(100%-3rem)] flex flex-col drop-shadow-2xl bg-white `}>
                    <div className="bg-gray-200	py-10 px-8">
                        <h1 className="font-bold text-3xl">{carregarArquivo.metaData.titulo}</h1>
                        <p className="mt-2">EM ABERTO</p>
                    </div>
                    <NavegarEstudo id={carregarArquivo.metaData.cod} paginas={carregarArquivo.metaData.paginaInfo} titulo={carregarArquivo.metaData.paginas}/>
                </div>
            </aside>
            <Container configuracao={'flex justify-center'}>
                <main className="w-4/5 flex flex-col items-center justify-end overflow-hidden">
                    <section className='h-screen w-full mt-10'>
                        <div className='relative w-full h-full overflow-y-scroll notScroll' id="introdução">
                            <h1 className={`text-center font-extrabold uppercase text-transparent text-6xl bg-clip-text bg-gradient-to-r ${coresFrom[carregarArquivo.metaData.materia]} ${coresTo[carregarArquivo.metaData.materia]} `}>{carregarArquivo.metaData.titulo}</h1>
                            <div className={`${markdownStyles['markdown']} mt-10`} dangerouslySetInnerHTML={{ __html:carregarArquivo.conteudo.split('£')[0]}}/>
                            <MudarConteudo meuConteudos={planoCodigo[1].split(',')} materia={carregarArquivo.metaData.materia} conteudo={carregarArquivo.metaData.conteudoTexto.split(',')} cod_conteudo={carregarArquivo.metaData.conteudo.split(',')}/>
                        </div>
                    </section>
                </main>
            </Container>

        </div>

    )
}
