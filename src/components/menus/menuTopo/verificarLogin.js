import Btn from "@/components/botoes/btn";


export default function VerificaLogin(){
    return(
        <section className="flex gap-5">
            <Btn link='/conta/entrar' configuracao={'bg-blue-500 text-white'}>LOGIN</Btn>
            <Btn link='/conta/cadastrar' configuracao={'border-2'}>CADASTRO</Btn>
        </section>
    )
}