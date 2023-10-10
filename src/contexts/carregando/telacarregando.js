import Image from 'next/image';
const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
export default function TelaCarregando({imageLoader}){
    const mensagem = ["Você sabia que o criador deste site tinha apenas 18 anos?", "A ideia do site surgiu em 22/02/2022, no meu aniversario =)", "o mascote do site foi uma referência ao jogo Minecraft"]
    return(
        <div className='absolute top-0 left-0 h-screen w-full z-40 bg-white flex flex-col items-center justify-center gap-8'>
            <div className='relative'>
                <div>
                    <Image
                        loader={imageLoader}
                        src="/carregando/ilhascarregamento.svg"
                        alt="ilha flutuante"
                        placeholder ='blur'
                        blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                        width={181}
                        height={137}
                    />
                </div>
                <div className='absolute bottom-24 left-14'>
                    <div className='animate-bounce'>
                        <Image
                            loader={imageLoader}
                            src="/carregando/skin.png"
                            alt="mascote do site"
                            placeholder ='blur'
                            blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                            width={60}
                            height={75}
                            style={{ objectFit: 'contain', width: "auto"}}
                        />
                    </div>
                    <div className='bg-black w-full h-5 rounded-full -mt-2 absolute animate-newpulse'></div>
                </div>
            </div>
            <div className="flex flex-col text-center gap-1">
                <h1 className="font-bold text-gray-400 text-xl">AGUARDE...</h1>
                <p>{mensagem[Math.floor(Math.random() * mensagem.length)]}</p>
            </div>
        </div>
    )
}