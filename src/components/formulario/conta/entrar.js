"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
import Link from "next/link";
export default function FormContaEntrar() {
    const [verSenha, setVerSenha] = useState(false)
    const [formDados, setFormDados] = useState({
        email: '',
        senha: ''
    })
    const onChangeInput = e => setFormDados({ ...formDados, [e.target.name]: e.target.value })
    return (
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={''}>
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
            <Link href="/conta/recuperar">Esqueceu a senha?</Link>
            <Link href="/conta/entrar"><p>Ao realizar o login, você estará concordando com a nossa <u>política de privacidade e termos.</u></p></Link>
        </form>
    )
}