"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { Envs } from "src/utils/configEnv"
import InputFunction from "../inputForms";
import Btn from "@/components/botoes/btn";
async function postNovaSenha(formCadastro, cod){
    try{
        const apiNovaSenha = await fetch(`${Envs.API_LOCAL}api/contaRegistro/nova-senha`, {
            method: 'POST',
            body: JSON.stringify({dados: formCadastro, cod: cod}),
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block'
            }
        });
        return apiNovaSenha.json();
    }catch(error) {
        return error
    }
}
export default function NovaSenha({link}){
    const router = useRouter();
    const [returnSenha, setReturnSenha]=useState("")
    const [estiloInput, setEstiloInput] = useState("");
    const [verSenha, setVerSenha] = useState(false)
    const [formDados, setFormDados] = useState({
        senha: ''
    })
    const [response, setResponse] = useState({
        msg:'',
        status: ''
    })
    const onChangeInput = e =>{
        if (e.target.name == "senha"){
            validarSenha(e.target.value);
        }
        setFormDados({...formDados, [e.target.name]: e.target.value})
    }
    const enviarNovaSenha = async e =>{
        e.preventDefault()
        if(formDados.senha != "" && returnSenha == ""){
            const novaSenha = await postNovaSenha(formDados.senha, link)
            if(novaSenha.status == '200'){
                return router.push('/conta/entrar')
            }else{
                setResponse({
                    status: novaSenha.status,
                    msg: novaSenha.msg
                });
            }
        }else{
            setResponse({ msg: "A sua senha está fugindo do nosso padrão estabelecido pela rede", status: '' })
        }
    }
    const validarSenha = senha => {
        const erros = [];
        if (!/[A-Z]/.test(senha)) {
            erros.push("letra maiúscula");
        }
        if (!/\d/.test(senha)) {
            erros.push("número");
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) {
            erros.push("caractere especial");
        }
        if (senha.length < 6) {
            erros.push("no mínimo 6 caracteres");
        }
        if (erros.length > 0) {
            setReturnSenha("E nescessario ter: "+erros.join(", "));
            setEstiloInput('outline-red-500 border-red-500');
        } else {
            setReturnSenha("");
            setEstiloInput("");
        }
    };
    return(
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={enviarNovaSenha}>
            <div className="flex flex-col">
                <div className="flex gap-2">
                    <InputFunction
                        value={formDados.senha}
                        onChange={onChangeInput}
                        nome={'senha'}
                        tipo={verSenha == false ? "password" : "text"}
                        estilo={estiloInput}
                        completar={'new-password'}
                        placeholder={'Senha'}
                    />
                    <div className="border rounded-lg p-2 py-3 mb-2 select-none cursor-pointer" onClick={() => setVerSenha(!verSenha)}>MOSTRAR</div>
                </div>
                <span className="text-sm text-red-500 font-semibold">{returnSenha}</span>
            </div>
            <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'}>salvar senha</Btn>
            {response.msg && <strong>{response.msg}. {response.status && `ERRO:${response.status}`}</strong>}
        </form>
    )
}