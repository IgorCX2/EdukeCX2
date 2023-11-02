'use client'
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { usarConteudoQuestao } from 'src/contexts/questaoDiagnostica';

export default function BoasVindasAvaliacao({nome, imageLoader}){
    const paramsLink = useSelectedLayoutSegment()
    const [telaAtiva, setTelaAtiva] = useState(true)
    const { setTemporizador } = usarConteudoQuestao()
    if(!telaAtiva){
        return null
    }
    const fecharAbertura = async () => {
        setTelaAtiva(false)
        setTemporizador(true)
    }
    return(
        <div className="absolute z-50 top-0 left-0 w-screen h-full bg-white flex flex-col items-center">
            <div className="mt-10 w-9/12 flex flex-col bg-white justify-center items-center">
                <section className="w-8/12">
                    <h1 className="text-center text-7xl font-extrabold">Boa Prova, {nome}!</h1>
                    <h2 className="text-center text-xl mt-8">Você irá dar início a uma avaliação {paramsLink}.</h2>
                    <h3 className="text-center mt-2 font-medium text-gray-400">Lembre-se: Uma avaliação {paramsLink} não tem como objetivo reprovar o aluno, mas sim identificar seus pontos fortes e fracos para que possam ser trabalhados.</h3>
                    <ol className="mt-16">
                        <li><strong>Regras:</strong></li>
                        <li>Leia com atenção as instruções da prova;</li>
                        <li>Procure entender o que cada questão está pedindo antes de responder;</li>
                        <li>Tente responder todas as questões mesmo que não saiba a resposta completa, pois isso pode ajudar a identificar seus pontos fortes e fracos;</li>
                        <li>Não copie as respostas, pois isso pode comprometer a avaliação;</li>
                        <li>Mantenha a calma e a concentração durante a prova;</li>
                    </ol>
                    <div className="flex justify-center w-full my-20">
                        <div className="bg-blue-500/10 py-10 px-5 rounded-full">
                            <Image
                            loader={imageLoader}
                            src={"/personagens/user.png"}
                            alt="imagem do seu personagem"
                            priority={true}
                            width={170}
                            height={200}	
                            />
                        </div>
                    </div>
                </section>
                <button className= "rounded-lg bg-blue-500 text-white p-2 drop-shadow-n2xl font-bold py-2.5 px-4" onClick={fecharAbertura}>Iniciar Avaliação</button>
                <p className="text-center mt-2 font-medium text-gray-400 mb-10 max-w-md">Ao clicar no botão acima, você estará dando início à avaliação. Caso feche a aba antes de finalizar a prova, você irá perder o seu progresso e terá que voltar ao início.</p>
            </div>
        </div>
    )
}