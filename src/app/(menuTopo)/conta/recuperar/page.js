import FormContaRecuperar from "@/components/formularios/conta/recuperar"

export const metadata = {
    title: 'Recuperar senha | EdukeCX2',
    openGraph: {
      title: 'Recuperar senha | EdukeCX2',
    },
}
export default function Recuperar(){
    return(
        <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
            <h1 className={`text-center md:text-left md:text-8xl text-5xl font-black w-full`}>RECUPERAR SENHA</h1>
            <h2 className='mt-5 text-center lg:text-left'>Enviaremos um email para você!</h2>
            <FormContaRecuperar/>
        </section>
    )
}