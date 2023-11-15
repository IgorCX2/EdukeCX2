import FraseMotivacional from '@/components/aprender/frasemotivacional';
import Infomacoes from '@/components/aprender/informacoes';
import { Suspense } from 'react';
import BoxCarregando from '@/components/carregando/boxcarregando';
export default async function LayoutAprender({children}){
    const diaAtual = new Date()
    return(
        <main className="flex-col w-full">
            <h1 className="text-5xl -mt-10 lg:mt-0 lg:top-10 lg:text-7xl font-black relative lg:absolute">PLANO DE ESTUDO</h1>
            <div className='w-full flex flex-col gap-10 mt-8 lg:mt-0'>
                <Suspense fallback={<BoxCarregando tamanhos={'w-full h-72 rounded-lg'}/>}>
                    <FraseMotivacional data={String(diaAtual.getDate())+"/"+String(diaAtual.getMonth()+1)}/>
                </Suspense>
                <section className={`rounded-lg w-full px-5 lg:px-10 py-3.5 relative ${diaAtual.getDay() == 5 ? "bg-rose-600" : "bg-green-400"} font-semibold text-white`}>
                    {diaAtual.getDay() == 5 ? <p>Infelizmente, o planeta estudo está <strong>sob ataque</strong>, com muitos desafios e obstáculos a serem enfrentados.</p>  : <p>Parece que está tudo <strong>tranquilo</strong> no planeta estudo, sem grandes problemas ou perturbações.</p>}
                </section>
                <Suspense fallback={'carregando'}>
                    {children}
                </Suspense>
            </div>
        </main>
    )
}