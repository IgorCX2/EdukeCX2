"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
import TelaCarregando from "@/components/carregando/telacarregando";

async function ValidarEmail(formCadastro) {
    try {
        const apiValidarEmail = await fetch('https://api.aprendacomeduke.com.br/api/contaRegistro/recuperar-senha', {
            method: 'POST',
            body: JSON.stringify({ form: formCadastro }),
            headers: { 'Content-Type': 'application/json', }
        });
        return apiValidarEmail.json()
    } catch (error) {
        return error
    }
}
export default function FormContaValidar(){
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [statusVerificador, setStatusVerificadores] = useState(false)
    const [response, setResponse] = useState({
        msg: '',
        status: ''
    })
    const [formDados, setFormDados] = useState({
        email: '',
    })
    const onChangeInput = e => setFormDados({...formDados, [e.target.name]: e.target.value})
    const SendEmailRec = async e => {
        e.preventDefault()
        setLoadingStatus(true)
        if(formDados.email){
            const responseEnv = await ValidarEmail(formDados)
            if(responseEnv.status == '200'){
                setStatusVerificadores(true)
            }else{
                setResponse({
                    status: responseEnv.status,
                    msg: responseEnv.msg
                });
            }
        }else{
            setResponse({msg: 'Você deve preencher todos os campos!', status: '1_F#14042'})
        }
        setLoadingStatus(false)
    }
    if(statusVerificador == true){
        return(
            <div className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h2 className='mt-5 text-center lg:text-left'>Para validarmos a sua identidade, basta clicar no link que nossa equipe enviou para seu email, e seguir o passo a passo para recuperar a senha =)</h2>
            </div>
        )
    }
    return(
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={SendEmailRec}>
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
            {loadingStatus == true && <TelaCarregando/>}
        </form>
    )
}