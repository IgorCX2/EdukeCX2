"use client";
import { useState } from "react";
import { Envs } from "src/utils/configEnv"
import Link from "next/link";
import InputFunction from "../inputForms";
import Btn from "@/components/botoes/btn";
import { cookieAction } from "src/app/action";
import { useRouter } from 'next/navigation';
import FormContaVerificar from "./verificar";
async function postLogin(formLogin){
    try{
        const apiLogin = await fetch(`${Envs.API_LOCAL}api/contaRegistro/login`, {
            method: 'POST',
            body: JSON.stringify({dados: formLogin}),
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
export default function FormContaEntrar({modal}) {
    const router = useRouter();
    const [statusVerificador, setStatusVerificadores] = useState(false)
    const [verSenha, setVerSenha] = useState(false)
    const [formDados, setFormDados] = useState({
        email: '',
        senha: '',
    })
    const [response, setResponse] = useState({
        id: '',
        msg: '',
        status: ''
    })
    const onChangeInput = e => setFormDados({...formDados, [e.target.name]: e.target.value})
    const SendLogin = async e =>{
        e.preventDefault();
        if (formDados.email) {
            if(formDados.senha.length >= 6 && /[A-Z]/.test(formDados.senha) && /\d/.test(formDados.senha) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formDados.senha)){
                const loginUser = await postLogin(formDados)
                if(loginUser.status == "200"){
                    //const cadCookie = await cookieAction('cadastrar', 'UserToken', loginUser.token, 60*100)
                    return router.push('/aprender')
                }else{
                    console.log("naooo")
                    setResponse({id:loginUser.id, msg: loginUser.msg, status: loginUser.status })
                }
                if(loginUser.status == 'verificar'){
                    console.log("veererer")
                    setStatusVerificadores(true)
                }
            }else{
                setResponse({ msg: "A sua senha está fugindo do nosso padrão estabelecido pela rede", status: '' })
            }
        }else{
            setResponse({ msg: 'Você deve preencher todos os campos!', status: '' })
        }
    }
    return (
        <>
            {!statusVerificador ?
                <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={SendLogin}>
                    <InputFunction
                        value={formDados.email}
                        onChange={onChangeInput}
                        nome={'email'}
                        tipo={'email'}
                        estilo={''}
                        completar={'email'}
                        placeholder={'Email'}
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
                    <Link href="/conta/cadastrar">não tenho um cadastro. <u>Fazer Cadastro</u></Link>
                    <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white hover:from-blue-500 hover:to-blue-500'}>fazer login</Btn>
                    {response.msg && <strong>{response.msg}. {(response.status && response.status != 0)&& `ERRO:${response.status}`}</strong>}
                    <Link href="/conta/recuperar">Esqueceu a senha?</Link>
                    <Link href="/conta/entrar"><p>Ao realizar o login, você estará concordando com a nossa <u>política de privacidade e termos.</u></p></Link>
                </form>
                :
                <FormContaVerificar modal={modal} id={response.id}/>
            }
        </>
    )
}