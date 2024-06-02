'use client';
import Link from "next/link"
import Container from "../../containers/container"
import LogoEduke from "../../icones/logo"
import { useSelectedLayoutSegment } from 'next/navigation'
import { useState } from "react";
import VerificaLogin from "./verificarLogin";
export default function MenuTopo(){
    const paramsLink = useSelectedLayoutSegment();
    const [menu, setMenu] = useState(false)
    return(
        <header className={`${paramsLink == undefined && 'text-white'} absolute w-full top-0 z-20`}>
            <div className={menu ? 'flex fixed h-screen w-full bg-black/50 z-10' : undefined} onClick={() => setMenu(!menu)}/>
            <Container configuracao={'flex justify-between items-center py-5'}>
                <section className='flex lg:hidden'>
                    <LogoEduke/>
                </section>
                <section className={`lg:hidden flex flex-col gap-1.5 cursor-pointer ${menu == true && 'hidden'}`}onClick={() => setMenu(!menu)}>
                    <span className={`w-8 h-0.5 ${paramsLink == undefined ? 'bg-white' : 'bg-black'}`}/>
                    <span className={`w-8 h-0.5 ${paramsLink == undefined ? 'bg-white' : 'bg-black'}`}/>
                    <span className={`w-8 h-0.5 ${paramsLink == undefined ? 'bg-white' : 'bg-black'}`}/>
                </section>
                <section className={`fixed lg:relative ${menu == true ? 'flex text-black z-30' : 'hidden'} p-6 lg:p-0 top-0 w-80 lg:w-full lg:items-center max-w-[calc(100%-3rem)] lg:max-w-none flex-col xl:flex-row lg:flex left-0 h-full lg:h-auto gap-5 xl:gap-0 justify-between bg-gray-200 lg:bg-transparent`} onClick={() => setMenu(false)}>
                    <div className='flex gap-10 lg:gap-5 flex-col xl:flex-row xl:gap-44 items-start lg:items-center'>
                        <div className='flex items-center w-full lg:w-auto justify-between'>
                            <LogoEduke/>
                            <div className='relative flex lg:hidden flex-col gap-1.5 items-center cursor-pointer rotate-45'>
                                <span className='w-7 h-0.5 bg-black absolute'/>
                                <span className='w-0.5 h-7 bg-black absolute -mt-3'/>
                            </div>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-5 lg:gap-10 lg:flex-row">
                                <li><Link href={'/aprender'}>Aprender</Link></li>
                                <li><Link href={'/'}>Missão</Link></li>
                                <li><Link href={'/'}>Entre em Contato</Link></li>
                                <li><Link href={'/'}>Professores</Link></li>
                                <li><Link href={'/'}>Minecraft</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <VerificaLogin/>
                </section>
            </Container>
        </header>
    )
}