import Image from 'next/image';
import Btn from '@/components/Botoes/btn';
export default function NotFound(){
    return(
        <div className="absolute top-0 left-0 h-full w-full bg-white flex items-center justify-center gap-10">
            <div className='absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-bluelight to-blue-500 '></div>
            <div>
                <Image
                    src="/icones/portal.png"
                    alt="ilha flutuante"
                    placeholder ='blur'
                    blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                    width={500}
                    height={507}
                />
            </div>
            <div className='max-w-lg -mt-5'>
                <h1 className='font-black text-gray-400 text-8xl'>ERRO 404</h1>
                <p className='mt-5'>Parece que você se perdeu em um mundo desconhecido. Mas não se preocupe, há uma maneira de voltar para o mundo normal. Há um portal próximo que pode levá-lo de volta ao lugar conhecido e seguro. Embora possa ser tentador explorar este novo mundo, a segurança e a estabilidade do mundo conhecido são importantes. </p>
                <div className='relative mt-10'>
                    <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'} link={'/'}>
                        VOLTAR AO MUNDO NORMAL
                    </Btn>
                </div>
            </div>
        </div>
    )
} 