"use client"
import Link from "next/link"
import Btn from "../Botoes/btn";
import { cookieAction } from "src/app/action"
import { useEffect, useState } from 'react';
import BoxCarregando from "../carregando/boxcarregando";

export default function VerificarLogin({value}) {
    const [pegarCookieLogin, setPegarCookieLogin] = useState("Carregando");
    useEffect(() => {
        async function fetchData() {
          try {
            const cookieData = await cookieAction('consultar', 'UserToken');
            setPegarCookieLogin(cookieData);
          } catch (error) {
            console.error('Erro ao buscar cookie:', error);
          }
        }
        fetchData();
    }, []);
    return (
        <div>
          {(pegarCookieLogin != undefined && pegarCookieLogin != "Carregando") ? (
            <Link href="/perfil">
                <div className="flex gap-5 items-center">
                    <div className="flex flex-col ">
                        <p className="text-blue-500 font-bold text-2xl">1</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Seja Bem Vindo(a)</p>
                        <p>{pegarCookieLogin.nome}</p>
                    </div>
                </div>
            </Link>
          ) : pegarCookieLogin != "Carregando" ? (
            <div className="flex gap-5 flex-col lg:flex-row">
                <Btn link='/conta/entrar' configuracao={'bg-blue-500 text-white'}>LOGIN</Btn>
                <Btn link='/conta/cadastrar' configuracao={'border-2'}>CADASTRO</Btn>
            </div>
          ) : 
            <BoxCarregando global={'flex gap-5'} tamanhos={'h-9 w-20 | h-9 w-20'}/>
          }
        </div>
    )
}