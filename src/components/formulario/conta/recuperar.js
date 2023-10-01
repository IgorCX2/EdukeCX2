"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
export default function FormContaNovaSenha({params}){
    const [verSenha, setVerSenha] = useState(false)
    const [formDados, setFormDados] = useState({
        senha: ''
    })
    const onChangeInput = e => setFormDados({ ...formDados, [e.target.name]: e.target.value })
    return(
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={''}>
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
        </form>
    )
}