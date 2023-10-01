"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
import Link from "next/link";
export default function FormContaCadastrar() {
    const [verSenha, setVerSenha] = useState(false)
    const [formDados, setFormDados] = useState({
        nome: '',
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
        </form>
    )
}