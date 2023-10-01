import Btn from "../Botoes/btn";

export default function VerificarLogin(){
    return(
        <div className="flex gap-5 flex-col lg:flex-row">
            <Btn link='/conta/entrar' configuracao={'bg-blue-500 text-white'}>LOGIN</Btn>
            <Btn link='/conta/cadastrar' configuracao={'border-2'}>CADASTRO</Btn>
        </div>
    )
}