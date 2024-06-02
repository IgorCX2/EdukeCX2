import BoxCarregando from "@/components/carregando/boxcarregando"
import Container from "@/components/containers/container"
import Image from "next/image"
import { Suspense } from "react"
export const metadata = {
    title: {
        default: 'EdukeCX2',
    },
    description: 'O EDUKE oferece um plano de estudos personalizado e adaptativo, com base nas necessidades e objetivos de cada usuário. Ao fazer login ou se cadastrar, ira fazer parte de nossa comunidade, onde poderá desfrutar de vantagens incríveis',
    keywords: ["login", "cadastro", "acesso", "plano de estudos personalizado", "perfil de usuário", "configurações", "histórico de aprendizagem", "desempenho", "progresso", "recomendações", "currículo personalizado", "disciplinas", "cursos", "aprendizado online", "educação a distância", "plataforma de ensino", "tecnologia educacional", "ferramentas de aprendizagem", "recursos educacionais", "autoaperfeiçoamento"],
    creator: 'Igor Cortez',
    icons: {
        icon: '/iconeduke.ico',
        shortcut: '/iconeduke.ico',
        apple: '/iconeduke.ico',
        other: {
            rel: '/iconeduke.ico',
            url: '/iconeduke.ico',
        },
    },
    openGraph: {
        title: 'EDUKE CX2',
        description: 'EDUKE oferece um plano de estudo intuitivo, divertido e totalmente personalizado, que se adapta ao ritmo de aprendizagem de cada usuário.',
        url: 'https://edukecx2.com.br',
        siteName: 'EDUKE CX2',
        images: [
            {
                url: 'https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg',
                width: 800,
                height: 600,
            },
        ],
        authors: ['Igor'],
        locale: 'pt-br',
        type: 'website',
    },
};
export default function LayoutConta({ children }){
    return (
        <Container configuracao={'flex w-full h-screen justify-center lg:justify-evenly items-center'}>
            <main className="w-full flex">
                <section className="absolute w-0.5 h-full bg-gradient-to-t from-transparent via-gray-400 top-0 items-center hidden sm:flex">
                    <div className='w-1.5 h-40 rounded-full bg-gradient-to-t from-blue-500 absolute -left-0.5'></div>
                </section>
                <div className='w-full flex justify-center lg:justify-evenly items-center'>
                    <section className='hidden lg:flex'>
                        <Image
                            src="http://imgs.aprendacomeduke.com.br/icones/book.png"
                            alt="foto de um livro"
                            placeholder='blur'
                            blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                            width={600}
                            height={600}
                            className="w-full h-auto"
                        />
                    </section>
                    <Suspense fallback={<BoxCarregando tamanhos={'w-full h-20 | w-9/12 h-6 | w-5/12 h-6 | w-full h-10 | w-full h-10 | w-full h-10 | w-8/12 h-5'} global={'max-w-md w-full flex flex-col gap-5'} />}>
                        {children}
                    </Suspense>
                </div>
            </main>
        </Container>
    )
}