import FormContaCadastrar from "@/components/formularios/conta/cadastrar"

export const metadata = {
    title: 'Cadastrar | EdukeCX2',
    openGraph: {
      title: 'Cadastrar | EdukeCX2',
    },
}
export default function Cadastrar(){
    return(
        <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
            <h1 className={`text-center md:text-left md:text-8xl text-5xl font-black w-full`}>CADASTRAR</h1>
            <h2 className='mt-5 text-center lg:text-left'>Realize o seu cadastro para juntar-se a nossa comunidade e desfrute de vantagens incriveis</h2>
            <FormContaCadastrar/>
        </section>
    )
}