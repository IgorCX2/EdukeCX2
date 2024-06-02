import '../../globals.css'
export const metadata = {
    metadataBase: new URL('https://aprendacomeduke.com.br/'),
    title: 'Home | EdukeCX2',
    description: 'Um site de educação gratuita, onde oferece um plano de estudo intuitivo, divertido e totalmente personalizado, que se adapta ao ritmo de aprendizagem de cada usuário.',
    keywords: ["enem 2024","plano de estudos", "estudo gratuito", "aprendizagem", "adaptativo", "personalizado", "tecnologia educacional", "inteligência artificial", "ensino online", "autodidatismo", "educação a distância", "e-learning", "cursos online", "conhecimento", "habilidades", "aprendizado personalizado", "algoritmo adaptativo", "plataforma de aprendizagem", "recursos educacionais", "autoaperfeiçoamento",'educação', 'aprender', 'enem', 'vestibulares', 'aprender gratis', 'matematica', 'portugues', 'home'],
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
        url: 'https://aprendacomeduke.com.br/',
        siteName: 'EDUKE CX2',
        images: [
            {
            url: 'imgs.aprendacomeduke.com.br/telaInicial/slidemain.png',
            width: 800,
            height: 600,
            },
        ],
        authors: ['Igor'],
        locale: 'pt-br',
        type: 'website',
    },
}
export default function LayoutPrincipal({children}){
    return(
        <html lang="pt-BR">{children}</html>
    )
}