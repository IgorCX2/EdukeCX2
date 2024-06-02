"use client";
import { useState } from "react";
import { Envs } from "src/utils/configEnv"
import InputFunction from "../inputForms";
import Btn from "@/components/botoes/btn";
async function ValidarEmail(formSolicitar){
    try{
        const apiLogin = await fetch(`${Envs.API_LOCAL}api/contaRegistro/solicitacao-recuperacao`, {
            method: 'POST',
            body: JSON.stringify({dados: formSolicitar}),
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block'
                
            }
        });
        return apiLogin.json();
    }catch(error) {
        return error
    }
}
export default function FormContaRecuperar(){
    const [formDados, setFormDados] = useState({
        email: ''
    })
    const [response, setResponse] = useState({
        msg: '',
        status: ''
    })
    const [statusVerificador, setStatusVerificadores] = useState(false)
    const onChangeInput = e => setFormDados({...formDados, [e.target.name]: e.target.value})
    const SendEmailRecuperar = async e =>{
        e.preventDefault()
        if(formDados.email){
            const enviaSoliticacaoSenha = await ValidarEmail(formDados.email)
            if(enviaSoliticacaoSenha.status == '200'){
                setStatusVerificadores(true)
            }else{
                setResponse({
                    status: enviaSoliticacaoSenha.status,
                    msg: enviaSoliticacaoSenha.msg
                });
            }
        }else{
            setResponse({msg: 'Você deve preencher todos os campos!', status: ''})
        }
    }
    if(statusVerificador == true){
        return(
            <div className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h2 className='mt-5 text-center lg:text-left'>Para validarmos a sua identidade, basta clicar no link que nossa equipe enviou para seu email, e seguir o passo a passo para recuperar a senha =)</h2>
            </div>
        )
    }
    return(
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={SendEmailRecuperar}>
            <InputFunction
                value={formDados.email}
                onChange={onChangeInput}
                nome={'email'}
                tipo={"email"}
                estilo={''}
                completar={''}
                placeholder={'Email'}
            />
            <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'}>recuperar senha</Btn>
            {response.msg && <strong>{response.msg}. {(response.status && response.status != 0)&& `ERRO:${response.status}`}</strong>}
        </form>
    )
}