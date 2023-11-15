import Image from 'next/image';
import Btn from '@/components/Botoes/btn';
export default function SairConta(){
    return(
        <main className="absolute top-0 left-0 h-full w-full bg-white flex items-center justify-center gap-10">
            <div className='absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-bluelight to-blue-500 '/>
            <section>
                <Image
                    src="https://imgs.aprendacomeduke.com.br/icones/portal.png"
                    alt="ilha flutuante"
                    placeholder ='blur'
                    blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                    width={500}
                    height={507}
                />
            </section>
            <section className='max-w-lg -mt-5'>
                <h1 className='font-black text-gray-400 text-8xl'>SAIDA CONCLUÍDA</h1>
                <p className='mt-5'>Você fez um ótimo trabalho! Sua conta foi desconectada com sucesso. Agradecemos por escolher nossos serviços para sua jornada de estudos personalizados. Lembre-se, o conhecimento é uma jornada contínua. Se desejar retornar ao seu mundo de estudos personalizados, sinta-se à vontade para se reconectar a qualquer momento.Até breve! E lembre-se, a busca pelo conhecimento nunca termina.</p>
                <div className='relative mt-10'>
                    <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'} link={'/conta/entrar'}>
                        ENTRAR
                    </Btn>
                </div>
            </section>
        </main>
    )
}