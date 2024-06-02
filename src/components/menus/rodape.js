'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation'
import Container from "../containers/container";
import LogoEduke from "../icones/logo";

export default function Rodape(){
    const paramsLink = useSelectedLayoutSegment();
    if(paramsLink == 'conta'){return null}
    return(
        <footer className="relative bg-white flex py-8">
            <Container>
                <LogoEduke/>
                <div className="flex w-full justify-between	flex-wrap gap-5 mt-5">
                        <div className="flex flex-col gap-1">
                            <strong>Páginas Principais</strong>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Home</Link>
                            <Link href={'/'}>Login</Link>
                            <Link href={'/'}>Cadastro</Link>
                            <Link href={'/'}>Aprender</Link>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong>Social</strong>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Blog</Link>
                            <Link href={'/'}>Facebook</Link> 
                            <Link href={'/'}>Youtube</Link>
                            <Link href={'/'}>Instragram</Link>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong>Termos e privacidade</strong>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Normas da comunidade</Link>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Política de Privacidade</Link>
                            <strong className="mt-2">Contato</strong>
                            <Link href={'/'}>Suporte: igorcortez02@gmail.com</Link>
                            <Link href={'/'}>Contato: igorcortez02@gmail.com</Link>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong>Quem Somos</strong>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Equipe</Link>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Empresa</Link>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Carreiras</Link>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Método</Link>
                        </div>
                        <div className="flex flex-col gap-1">
                            <strong>Outros</strong>
                            <Link href={'/'}>Aprender</Link>
                            <Link href={'/'} className={`${paramsLink == undefined && 'font-medium'}`}>Ensinar</Link>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <div className="w-full h-0.5 bg-gray-300"/>
                        <p className="mt-3 text-lg">Eduke o seu caminho personalizado para o sucesso.</p>
                        <p className="text-sm">Todos os direitos reservados. | </p>
                    </div>
            </Container>
        </footer>
    )
}