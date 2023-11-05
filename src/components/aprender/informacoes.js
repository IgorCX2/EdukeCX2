import Image from 'next/image';
import { Suspense } from 'react';
async function CardsStatus({situacao}){
    const tituloCard = ['Mando Bem', 'Preciso Melhorar']
    const imagemCard = ['coroa.png', 'hard.png']
    return(
        <div className="w-full h-40 lg:h-60 rounded-lg border-2 py-3.5 relative flex flex-col justify-center items-center text-center">
            <Image
                src={`/icones/${imagemCard[situacao]}`}
                alt={tituloCard[situacao]}
                width={75}
                height={75}	
            />
            <span className="xl:text-xl text-lg text-gray-300 font-medium">{tituloCard[situacao]}</span>
            <h1 className="xl:text-3xl text-xl font-bold">BIOLOGIA</h1>
        </div>
    )
}
async function MissaoDiaria({dia}){
    return(
        <div className="w-full flex flex-col gap-7">
            <h1 className="text-4xl font-bold">Missão do dia</h1>
            <div className="w-full h-60 gap-3 rounded-lg bg-white drop-shadow-xl pl-7 relative flex justify-between items-center overflow-hidden">
                <div className='flex flex-col h-full justify-between py-8'>
                    <div>
                        <h1 className='text-xl font-medium text-gray-300'>Missão Diaria</h1>
                        <h2 className='text-2xl mt-1 max-w-xs'>fazer 10 planos de estudos e nao errar</h2>
                    </div>
                    <div className='bg-blue-500 py-1 text-white rounded-lg flex items-center justify-center gap-5'>
                        <p>100 moedas</p>
                        <Image
                            src={`/icones/coin.png`}
                            alt={'logo das moedas'}
                            width={20}
                            height={20}	
                        />
                    </div>
                </div>
                <div className='bg-white h-[100%] w-2/4 -mr-[30%] rounded-full absolute right-0 z-10'/>
                <div className='bg-gray-300 h-[110%] w-2/4 -mr-[25%] rounded-full overflow-hidden'>
                    <div style={{ height: '20%'}} className='bg-blue-500 w-full'/>
                </div>
            </div>
        </div>
    )
}
export default function Infomacoes({imageLoader, dia}){
    return(
        <section className='w-full lg:flex-row flex-col flex gap-10 justify-between'>
            <div className="w-full flex flex-col gap-7">
                <h1 className="text-4xl font-bold">Infomações</h1>
                <div className="w-full flex lg:gap-10 gap-5">
                    <Suspense fallback={'carer'}>
                        <CardsStatus situacao={0}/>
                    </Suspense>                    
                    <Suspense fallback={'carer'}>
                        <CardsStatus situacao={1}/>
                    </Suspense>
                </div>
            </div>
            <MissaoDiaria/> 
        </section>
    )
}