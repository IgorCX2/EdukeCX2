
import Btn from "@/components/botoes/btn";
import BoxDescricao from "@/components/containers/boxDescricoes";
import ContainerDoisSection from "@/components/containers/containerDoisSection";
import Image from "next/image";
export const metadata = {
    title: 'Home | EdukeCX2',
    openGraph: {
      title: 'Home | EdukeCX2',
    },
}
export default function Home(){
    return(
        <main className="relative top-0 left-0">
            <section className="relative w-screen h-screen flex justify-center">
                <div className="absolute w-full h-full left-0 flex justify-center z-10 bg-gradient-to-b from-black/30 from-10% to-black/25 to-20% backdrop-blur-[1px]">
                    <div className="flex flex-col items-center max-w-4xl w-full justify-center gap-8 text-center text-white p-10 md:p-5 lg:p-0 lg:mt-0 mt-10">
                        <h1 className="font-black text-5xl md:text-6xl">VOCÊ ESTÁ NO LUGAR CERTO PARA APRENDER! [BETA]</h1>
                        <h2 className="font-medium text-lg">A nossa plataforma de estudos identifica os pontos fortes e fracos de cada pessoa, traçando um plano de estudos personalizado e eficiente para alcançar o seu sucesso. Junte-se a nós e maximize seu potencial!</h2>
                        <div className="flex gap-12 mt-2">
                            <Btn link='https://www.youtube.com/' configuracao={'border-2'}>Tutorial</Btn>
                            <Btn link='/conta/entrar' configuracao={'bg-blue-500 text-white'}>COMEÇAR</Btn>
                        </div>
                    </div>
                </div>
                <div className="fixed w-screen h-screen">
                    <Image
                        src={"http://imgs.aprendacomeduke.com.br/telaInicial/slidemain.png"}
                        alt="slide inicial do site"
                        priority
                        placeholder="blur"
                        blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>
            <ContainerDoisSection config={"bg-white py-10"}>
                <div>
                    <Image
                        src="http://imgs.aprendacomeduke.com.br/ilhas/ilhas.png"
                        alt="desenho de ilhas voadoras"
                        width={350}
                        height={350}
                        className="w-full h-auto"
                    />
                </div>
                <div className="max-w-md xl:max-w-xl 2xl:max-w-3xl w-full">
                    <h1 className="font-black text-4xl md:text-5xl">CONHEÇA O NOSSO MÉTODO</h1>
                    <h2 className="mt-6">Pensando em estudantes de todas as idades, Nossa plataforma revolucionária de estudos utiliza tecnologia avançada para identificar pontos fortes e fracos de cada aluno. Com base nessas informações, traçamos um plano de estudos personalizado e eficiente, para assim, poder passar por todos os seus obstáculos. Acreditamos que para evoluir é necessario pratica, treinos, e não somente escutar e escrever, com isso, iremos proporcionar um ensino totalmente personalizado para você. Junte-se a nós e transforme seu aprendizado!</h2>
                    <div className="mt-10"><Btn link='/conta/entrar' configuracao={'bg-blue-500 text-white'}>COMEÇAR</Btn></div>
                </div>
            </ContainerDoisSection>
            <ContainerDoisSection config={"bg-gray-200 py-5"}>
                <div>
                    <Image
                        src="http://imgs.aprendacomeduke.com.br/telaInicial/pix.jpeg"
                        alt="QrCode do pix"
                        width={180}
                        height={180}
                        className="w-full h-auto"
                    />
                </div>
                <div className="flex flex-col max-w-md xl:max-w-xl 2xl:max-w-3xl w-full">
                    <h1 className="font-black text-4xl md:text-5xl">NOS AJUDE A TE AJUDAR =)</h1>
                    <p className="mt-6">Somos uma empresa idependende, entretando, temos muitos gastos para manter esta plataforma no ar e de forma gratuita para muitos. Com isso, pedimos humildemente que nos ajude com qualquer valor, para conseguirmos manter a plataforma no ar com extrema qualidade.</p>
                    <div className="w-full h-5 mt-10">propaganda</div>
                </div>
            </ContainerDoisSection>
            <ContainerDoisSection config={"bg-white pt-16 pb-32"}>
                <div className="w-full flex-col items-center">
                    <h1 className="font-black text-4xl md:text-5xl text-center">NOSSOS PLANOS</h1>
                    <div className="flex justify-center md:justify-between mt-20 gap-5 md:gap-0 w-full flex-wrap">
                        <BoxDescricao type={true} btnltexto={'Saiba Mais'} style="bg-white md:mt-14 drop-shadow-2xl max-w-xs w-full h-96 items-center py-7" title="10 moedas" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="/icones/coin.png" />
                        <BoxDescricao type={true} btnltexto={'Saiba Mais'} style="bg-blue-500 text-white drop-shadow-2xl max-w-xs w-full h-96 items-center py-7" title="50 moedas" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="/icones/coin.png" />
                        <BoxDescricao type={true} btnltexto={'Saiba Mais'} style="bg-blue-500 md:mt-28 xl:mt-0 text-white drop-shadow-2xl max-w-xs w-full h-96 items-center py-7" title="Vip" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="/icones/coin.png" />
                        <BoxDescricao type={true} btnltexto={'Saiba Mais'} style="bg-white md:mt-14 drop-shadow-2xl max-w-xs w-full h-96 items-center py-7" title="100 moedas" text="Comprando moedas você consegue trocar por itens incriveis em nossa loja!" img="/icones/coin.png" />
                    </div>
                </div>
            </ContainerDoisSection>
            <ContainerDoisSection config={"bg-white pb-40"}>
                <h1 className="max-w-md w-full font-black text-4xl md:text-5xl text-center">Informações da Nossa Plataforma</h1>
                <div className="bg-blue-500 md:w-auto w-full flex-wrap flex justify-between gap-16 rounded-l-xl px-10 py-8 text-white">
                    <div className="items-center flex flex-col gap-3">
                        <h1 className="text-5xl font-bold">+2mil</h1>
                        <h2 className="text-lg font-medium">CADASTRADOS</h2>
                    </div>
                    <div className="items-center flex flex-col gap-3">
                        <h1 className="text-5xl font-bold">+300</h1>
                        <h2 className="text-lg font-medium">PLANOS DE ESTUDOS</h2>
                    </div>
                    <div className="items-center flex flex-col gap-3">
                        <h1 className="text-5xl font-bold">+300</h1>
                        <h2 className="text-lg font-medium">ARTIGOS</h2>
                    </div>
                    <div className="items-center flex flex-col gap-3">
                        <h1 className="text-5xl font-bold">+7mil</h1>
                        <h2 className="text-lg font-medium">EXERCICIOS</h2>
                    </div>
                </div>
            </ContainerDoisSection>
            <ContainerDoisSection config={"py-10 bg-gray-200 "}>
                <div className='w-full flex gap-5 lg:flex-nowrap flex-wrap'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className="font-black text-4xl">VOCÊ ESTÁ NO LUGAR CERTO PARA APRENDER! !</h1>
                        <h2 className="font-medium text-lg mt-10">Na plataforma EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. Com isso, oferecemos alguns serviços que são de extrema importância para complementar os seus estudos.</h2>
                    </div>
                    <BoxDescricao btnltexto={'COMEÇAR'} style="w-full lg:w-1/2 bg-white px-12 py-10" title="PLANO DE ESTUDO" img="/icones/booknotsmoke.png" text="Faremos um plano de estudo totalmente personalizado para você, baseado em suas dificuldades, para assim, poder estudar aquilo que você realmente precisa" />
                </div>
                <div className='w-full flex gap-5 lg:flex-nowrap flex-wrap'>
                    <BoxDescricao btnltexto={'COMEÇAR'} style="w-full lg:w-1/2 bg-white px-12 py-10" img="/icones/booknotsmoke.png" text="Em nossa plataforma temos diversos tipos de simulados, com eles é possivel adquirir técnicas, para assim, poder resolver com mais facilidades os desafios propostos pelos vestibulares" title="SIMULADOS" />
                    <BoxDescricao btnltexto={'COMEÇAR'} style="w-full lg:w-1/2 bg-white px-12 py-10" img="/icones/booknotsmoke.png" text="Aqui você encotra os mais variados tipos de exercícios, podendo ser de vestibulares ou até mesmo feito por nossos especialistas. Os exercícios colocam em prática tudo aquilo que você aprendeu" title="EXERCÍCIOS" />
                </div>
            </ContainerDoisSection>
        </main>
    )
}