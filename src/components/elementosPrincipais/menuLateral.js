'use client';
import Link from "next/link";

import { useSelectedLayoutSegment } from 'next/navigation';
import Container from '../containers/container';
import LogoEduke from './menuLogo';
import { Suspense, useState } from "react";
import BoxCarregando from "@/components/carregando/boxcarregando";
import Xp from "../jogo/xp";

export default function MenuLateral({nome, skin, id}){
    const paramsLink = useSelectedLayoutSegment();
    const [menu, setMenu] = useState(false)
    return(
        <>
            <div className={menu ? 'flex fixed h-screen w-full bg-black/50 z-10' : undefined} onClick={() => setMenu(!menu)}/>
            <header className={`${menu == true ? 'hidden' : 'flex w-full top-0 left-0 py-5 z-20 absolute'} lg:hidden`}>
                <Container configuracao={'relative flex justify-between items-center'}>
                    <div>
                        <LogoEduke/>
                    </div>
                    <div className={`flex flex-col gap-1.5 cursor-pointer`} onClick={() => setMenu(!menu)}>
                        <span className='w-8 h-0.5 bg-black'/>
                        <span className='w-8 h-0.5 bg-black'/>
                        <span className='w-8 h-0.5 bg-black'/>
                    </div>
                </Container>
            </header>
            <aside className={`lg:relative h-full xl:w-80 lg:w-60 w-80 max-w-[calc(100%-3rem)] lg:flex ${menu == true ? 'flex absolute' : 'hidden'}`}>
                <div className={`fixed h-full xl:w-80 lg:w-60 w-80 max-w-[calc(100%-3rem)] flex flex-col justify-between pb-10 pt-5 px-10 border-r-2 overflow-y-auto bg-white z-30`}>
                    <div className='w-full flex-col flex items-center justify-center gap-16'>
                        <div className='w-full flex items-center justify-between'>
                            <LogoEduke/>
                            <div className={`relative ${menu == true ?  'flex' : 'hidden'} lg:hidden flex-col gap-1.5 items-center cursor-pointer rotate-45`} onClick={() => setMenu(!menu)}>
                                <span className='w-7 h-0.5 bg-black absolute'/>
                                <span className='w-0.5 h-7 bg-black absolute -mt-3'/>
                            </div>
                        </div>
                        <div  className='flex flex-col items-center'>
                            <Suspense fallback={<BoxCarregando tamanhos={'h-20 w-20 rounded-full'}/>}>
                                <Link href={`/perfil/${id}`}>
                                    <h1 className='text-3xl font-bold'>{nome}</h1>
                                </Link>
                            </Suspense>
                        </div>
                    </div>
                    <nav className='mt-10 mb-10'>
                        <ul className='flex flex-col gap-2'>
                            <li className={`${paramsLink == 'aprender' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={'/aprender'}>Plano de Estudos</Link></li>
                            <li className={`${paramsLink == 'recursos' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={'/recursos'}>Recursos</Link></li>
                            <li className={`${paramsLink == 'calendario' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={'/aprender'}>Calendario</Link></li>
                            <li className={`${paramsLink == 'grupos' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={'/aprender'}>Grupos de Estudo</Link></li>
                            <li className={`${paramsLink == 'ranking' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={'/aprender'}>Ranking</Link></li>
                            <li className={`${paramsLink == 'loja' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={'/loja'}>Loja</Link></li>
                            <li className={`${paramsLink == 'perfil' ? 'font-bold bg-gray-100' : 'hover:bg-gray-100'} py-2 px-5 rounded-lg font-semibold`}><Link className='flex items-center gap-5' href={`/perfil/${id}`}>Minha Conta</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <button className='font-bold px-5'>Sair da Conta</button>
                    </div>   
                </div>
            </aside>
        </>

    )
}