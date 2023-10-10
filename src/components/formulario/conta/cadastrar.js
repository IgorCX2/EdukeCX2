"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
import Link from "next/link";
import TelaCarregando from "src/contexts/carregando/telacarregando";
import { useRouter } from 'next/navigation'
async function postCadastro(formCadastro){
    try{
        const apiCadastro = await fetch('http://localhost:8080/api/contaRegistro/cadastrar', {
            method: 'POST',
            body: JSON.stringify({form: formCadastro}),
            headers: { 'Content-Type': 'application/json',}
        });
        return apiCadastro.json()
    }catch(error) {
        return error
    }
}
export default function FormContaCadastrar() {
    const router = useRouter()
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [response, setResponse] = useState({
        msg:'',
        status: ''
    })
    const [verSenha, setVerSenha] = useState(false)
    const [formDados, setFormDados] = useState({
        nome: '',
        email: '',
        senha: ''
    })
    const onChangeInput = e => setFormDados({ ...formDados, [e.target.name]: e.target.value })
    const SendCadastro = async e => {
        e.preventDefault()
        setLoadingStatus(true)
        if(formDados.nome && formDados.email){
            if(formDados.senha.length >= 6 && formDados.nome.length >=3){
                const responseEnv = await postCadastro(formDados)
                console.log(responseEnv)
                console.log(responseEnv.status)
                if(responseEnv.status == 200){
                    return router.push('/conta/entrar')
                }else{
                    setResponse({
                        status: responseEnv.status,
                        msg: responseEnv.msg
                    });
                }
            }else{
                setResponse({msg: `Obs: ${formDados.senha.length < 6 && "a senha deve ser maior que 6 digitos"} ${formDados.nome.length < 3 && "o nome de usuario deve ser maior que 3 digitos"}`, status: ''})
            }
        }else{
            setResponse({msg: 'Você deve preencher todos os campos!', status: ''})
        }
        setLoadingStatus(false)
    }
    return (
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
            <Link href="/conta/entrar">Já tenho um cadastro. <u>Fazer Login</u></Link>
            <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'}>fazer login</Btn>
            <Link href="/conta/entrar"><p>Ao realizar o cadastro, você estará concordando com a nossa <u>política de privacidade e termos.</u></p></Link>
            {response.msg && <strong>{response.msg}. {response.status && `ERRO:${response.status}`}</strong>}
            {loadingStatus == true && <TelaCarregando/>}
        </form>
    )
}