"use client";
import { useState } from "react";
import { Envs } from "src/utils/configEnv"
import { useRouter } from 'next/navigation'
import Link from "next/link";
import InputFunction from "../inputForms";
import Btn from "@/components/botoes/btn";

async function postCadastro(formCadastro){
    try{
        const apiCadastro = await fetch(`${Envs.API_LOCAL}api/contaRegistro/cadastrar`, {
            method: 'POST',
            body: JSON.stringify({dados: formCadastro}),
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block'
                
            }
        });
        return apiCadastro.json();
    }catch(error) {
        return error
    }
}
export default function FormContaCadastrar(){
    const router = useRouter()
    const [returnSenha, setReturnSenha]=useState("")
    const [estiloInput, setEstiloInput] = useState("");
    const [verSenha, setVerSenha] = useState(false)
    const [response, setResponse] = useState({
        msg:'',
        status: ''
    })
    const [formDados, setFormDados] = useState({
        nome: '',
        email: '',
        senha: '',
        escolaridade: ''
    })
    const SendCadastro = async e => {
        e.preventDefault()
        console.log(formDados)
        if(formDados.nome && formDados.email && formDados.escolaridade){
            if(formDados.senha.length >= 6 && /[A-Z]/.test(formDados.senha) && /\d/.test(formDados.senha) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formDados.senha)){
                const responseDados = await postCadastro(formDados)
                if(responseDados.status == 200){
                    return router.push('/conta/entrar')
                }else{
                    setResponse({
                        status: responseDados.status,
                        msg: responseDados.msg
                    });
                }
            }else{
                setResponse({ msg: "A sua senha está fugindo do nosso padrão estabelecido pela rede", status: '' })
            }
        }else{
            setResponse({msg: 'Você deve preencher todos os campos!', status: ''})
        }
    }
    const onChangeInput = e =>{
        if (e.target.name == "senha"){
            validarSenha(e.target.value);
        }
        setFormDados({...formDados, [e.target.name]: e.target.value})
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
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={SendCadastro}>
            <InputFunction
                value={formDados.email}
                onChange={onChangeInput}
                nome={'email'}
                tipo={'email'}
                estilo={''}
                completar={'email'}
                placeholder={'Email'}
            />
            <InputFunction
                value={formDados.nome}
                onChange={onChangeInput}
                nome={'nome'}
                tipo={'text'}
                estilo={''}
                completar={'username'}
                placeholder={'Nome de usuário'}
            />
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
            <select name="escolaridade" className={`w-full border rounded-lg outline-gray-800 p-2 py-3 mb-2`} onChange={onChangeInput}>
                <option value={null} hidden>Em qual etapa você se enquadra?</option>
                <option value={"1Ensino"}>Ensino Fundamental 1</option>
                <option value={"2Ensino"}>Ensino Fundamental 2</option>
                <option value={"3Ensino"}>Ensino Médio</option>
                <option value={"4Ensino"}>Ensino Superior</option>
                <option value={"5Ensino"}>Outro....</option>
            </select>
            <Link href="/conta/entrar">Já tenho um cadastro. <u>Fazer Login</u></Link>
            <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'}>fazer cadastro</Btn>
            {response.msg && <strong>{response.msg}. {response.status && `ERRO:${response.status}`}</strong>}
            <Link href="/conta/entrar"><p>Ao realizar o cadastro, você estará concordando com a nossa <u>política de privacidade e termos.</u></p></Link>
        </form>
    )
}