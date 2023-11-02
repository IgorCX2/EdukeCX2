import Btn from "@/components/Botoes/btn";
import Link from "next/link";
export default function FinalizarAvaliacao({ returnInfo, nome }) {
    console.log(returnInfo.DificuldadesEncointradas)
    const materiasEscolares = ["Matemática", "Português", "Geografia", "História", "Biologia", "Química", "Física", "Literatura", "Artes", "Sociologia", "Filosofia"];
    const coresMaterias = ["bg-rose-500", "bg-blue-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-lime-500", "bg-teal-500", "bg-violet-500", "bg-pink-500", "bg-fuchsia-500", "bg-sky-500"]
    return (
        <main className="mt-10 w-9/12 flex flex-col justify-center items-center">
            <section className="w-8/12">
                <h1 className="text-center text-7xl font-extrabold">Olá {nome}!</h1>
                <h2 className="text-center text-xl mt-8">Você acaba de finalizar este desafio com sucesso, e agora é hora de você ver seu incrível relatório de batalha!!! </h2>
            </section>
            <section className="w-8/12 mt-16 text-xl mb-7">
                <h1 className="text-2xl mb-5 font-medium">Nivelamento</h1>
                <p>Avaliamos diversas matérias, portanto aqui está o seu novo nivelamento <span className="text-base">(as outras matérias mantiveram o mesmo nivelamento.)</span></p>
                <div className="my-12 flex flex-col gap-2 w-full">
                    <div className="w-full flex justify-around">
                        {returnInfo.materiaAvaliada.map(materia => {
                            if (returnInfo.nivelNovo[materia] != returnInfo.nivelAntigo[materia]) {
                                return (
                                    <div className="flex flex-col items-center w-40">
                                        <div className={`relative h-40 w-28 ${coresMaterias[materia]} rounded-full flex justify-center items-center`}>
                                            <div className="h-32 w-32 rounded-full bg-white flex flex-col justify-center items-center">
                                                <h1>Nível</h1>
                                                <h2 className="font-medium text-5xl">{returnInfo.nivelNovo[materia]}</h2>
                                            </div>
                                        </div>
                                        <h1 className="text-center font-semibold mt-2">{materiasEscolares[materia]}</h1>
                                        <p className="text-base text-center">Você estava no nível {returnInfo.nivelAntigo[materia]} e foi para o nível {returnInfo.nivelNovo[materia]}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </section>
            {returnInfo.DificuldadesEncointradas &&
                <section className="w-8/12 mt-8 text-xl mb-7">
                    <h1 className="text-2xl font-medium">Descrição</h1>
                    <p className="mt-5">
                        Também notamos que a sua dificuldade está concentrada nos conteúdos que exigem conhecimento sobre<br />
                        {returnInfo.DificuldadesEncointradas.map(titulo => {
                            if (titulo.conteudo == returnInfo.DificuldadesEncointradas[returnInfo.DificuldadesEncointradas.length - 1].conteudo) {
                                return ' e ' + titulo.conteudo
                            } else {
                                if (titulo.conteudo == returnInfo.DificuldadesEncointradas[returnInfo.DificuldadesEncointradas.length - 2].conteudo) {
                                    return titulo.conteudo + ' '
                                } else {
                                    return titulo.conteudo + ', '
                                }

                            }
                        })}
                        .Por isso, recomendamos que você estude um pouco mais sobre esses conteúdos.
                    </p>
                </section>
            }
            <section className="w-8/12 mt-16 text-xl mb-7">
                <p className="text-center text-base font-medium text-gray-400">Isso se trata de uma avaliação diagnóstica, portanto não mostraremos quais questões você acertou ou errou, já que as usaremos novamente para avaliá-lo no futuro. =)</p>
                <p className="text-center mt-7 font-medium">Agora é a hora de iniciar a sua aventura!!</p>
                <div className="w-full flex justify-center mt-5">
                    <Btn link='/' configuracao={'bg-blue-500 text-white'}>Iniciar Aventura</Btn>
                </div>
            </section>
        </main>
    )
}