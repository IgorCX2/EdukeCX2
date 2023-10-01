import FormContaNovaSenha from "@/components/formulario/conta/recuperar";

export default function Recuperar({params}){
    return(
        <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
            <h1 className='text-center md:text-left md:text-8xl text-5xl text-center md:text-left'>RECUPERAR SENHA</h1>
            <h2 className='mt-5 text-center lg:text-left'>Digite a sua nova senha!</h2>
            <FormContaNovaSenha link={params.cod}/>
        </section>
    )
}