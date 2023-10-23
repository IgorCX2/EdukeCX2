"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
import TelaCarregando from "@/components/carregando/telacarregando";
import { useRouter } from 'next/navigation'
async function postNovaSenha(cod, senha) {
    try {
        const apiNovaSenha = await fetch('http://localhost:8080/api/contaRegistro/nova-senha', {
            method: 'POST',
            body: JSON.stringify({cod: cod, senha: senha}),
            headers: { 'Content-Type': 'application/json', }
        });
        return apiNovaSenha.json()
    } catch (error) {
        return error
    }
}
export default function FormContaNovaSenha({link}){
    const router = useRouter();
    const [verSenha, setVerSenha] = useState(false)
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [formDados, setFormDados] = useState({
        senha: ''
    })
    const [response, setResponse] = useState({
        msg: '',
        status: ''
    })
    const onChangeInput = e => setFormDados({ ...formDados, [e.target.name]: e.target.value })
    const SendNovaSenha = async e => {
        e.preventDefault()
        setLoadingStatus(true)
        if(formDados.senha){
            if(formDados.senha.length >= 6){
                const responseEnv = await postNovaSenha(link, formDados.senha)
                if(responseEnv.status == '200'){
                    return router.push('/conta/entrar')
                }else{
                    setResponse({
                        status: responseEnv.status,
                        msg: responseEnv.msg
                    });
                }
            }else{
                setResponse({msg: 'Sua senha deve ser maior que 6 digitos!', status: '2_F#60233'})
            }
        }else{
            setResponse({msg: 'Você deve preencher todos os campos!', status: '1_F#14042'})
        }
        setLoadingStatus(false)
    }
    return(
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={SendNovaSenha}>
            <div className="flex gap-2">
                <InputFunction
                    value={formDados.senha}
                    onChange={onChangeInput}
                    nome={'senha'}
                    tipo={verSenha == false ? "password" : "text"}
                    estilo={''}
                    completar={'new-password'}
                    placeholder={'Senha'}
                />
                <div className="border rounded-lg p-2 py-3 mb-2 select-none" onClick={() => setVerSenha(!verSenha)}>MOSTRAR</div>
            </div>
            <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'}>salvar senha</Btn>
            {response.msg && <strong>{response.msg}. {(response.status && response.status != 0)&& `ERRO:${response.status}`}</strong>}
            {loadingStatus == true && <TelaCarregando/>}
        </form>
    )
}