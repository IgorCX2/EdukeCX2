import Link from "next/link";
import Image from 'next/image';
export default function AvaliarBloco({tipo, ativo}){
    return(
        <Link href={tipo == 1 ? '/avaliacao/diagnostica' : ativo == 0 ? '/avaliacao/desafio' : '/aprender'} className='w-full'>
            <div className="flex relative">
                <div className="z-20 -mt-10">
                    <Image
                        src={"/personagens/bosscompleto.png"}
                        alt="chefão do mundo estudo"
                        priority={true}
                        width={160}
                        height={150}	
                    /> 
                </div>
                <div className="border-2 rounded-lg h-full w-full -ml-20 bg-white drop-shadow-[0_0_15px_rgb(0,0,0,0.10)]">
                    <div className="flex justify-between flex-col ml-20 p-2 ">
                        <span className="text-xs font-medium">Avaliação</span>
                        <h1 className="font-bold text-lg">{tipo == 1 ? 'Avaliação Diagnostica' : 'Desafio do Boss'}</h1>
                    </div>
                </div>
            </div> 
        </Link>
    )
}