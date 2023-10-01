"use client";
import { useState } from "react";
import InputFunction from "../inputForms";
import Btn from "@/components/Botoes/btn";
export default function FormContaValidar(){
    const [formDados, setFormDados] = useState({
        email: '',
    })
    const onChangeInput = e => setForm({...form, [e.target.name]: e.target.value})
    return(
        <form className='gap-4 flex flex-col mt-5 w-full' onSubmit={''}>
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
        </form>
    )
}