"use client"
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { cookieAction } from "src/app/action";
import BoxCarregando from "@/components/carregando/boxcarregando";


export default function Usuario() {
    const [userInfos, setUserInfos] = useState({})
    useEffect(() => {
        async function fetchData() {
            try {
                const cookieData = await cookieAction('consultar', 'UserToken');
                setUserInfos({ nome: cookieData.nome, id: cookieData.id });
            } catch (error) {
                console.error('Erro ao buscar cookie:', error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            {userInfos.nome ?
                <Link href={`/perfil/${userInfos.id}`}>
                    <h1 className='text-3xl font-bold'>{userInfos.nome}</h1>
                </Link>
                :
                <BoxCarregando tamanhos={'h-20 w-20 rounded-full'} />
            }
        </div>
    )
}