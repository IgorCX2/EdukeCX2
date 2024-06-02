import NovaSenha from "@/components/formularios/conta/novasenha"
export const metadata = {
    title: 'Recuperar senha | EdukeCX2',
    openGraph: {
      title: 'Recuperar senha | EdukeCX2',
    },
}
export default function RecuperarNovaSenha({params}){
    console.log(params)
    if(Number(params.cod[0]) != 2){
        return(
        <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
            <h1 className='text-center md:text-left md:text-8xl text-5xl font-black w-full'>ERRO</h1>
            <h2 className='mt-5 text-center lg:text-left'>O Link informado não existe, verifique possiveis erros de digitação, ou tente pedir um novo!</h2>
        </section>
        )
    }
    return(
        <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
            <h1 className='text-center md:text-left md:text-8xl text-5xl font-black w-full'>RECUPERAR SENHA</h1>
            <h2 className='mt-5 text-center lg:text-left'>Digite a sua nova senha!</h2>
            <NovaSenha link={params.cod}/>
        </section>
    )
}