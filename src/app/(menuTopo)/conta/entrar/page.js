import FormContaEntrar from "@/components/formularios/conta/entrar"

export const metadata = {
    title: 'Entrar | EdukeCX2',
    openGraph: {
      title: 'Entrar | EdukeCX2',
    },
}
export default function Entrar(){
    return(
        <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
            <h1 className={`text-center md:text-left md:text-8xl text-5xl font-black w-full`}>LOGAR</h1>
            <h2 className='mt-5 text-center lg:text-left'>Realize o seu login para juntar-se à nossa comunidade e desfrute de vantagens incríveis</h2>
            <FormContaEntrar/>
        </section>
    )
}