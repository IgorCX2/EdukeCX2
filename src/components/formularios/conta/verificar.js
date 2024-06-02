'use client';
import { useState } from "react";
import { Envs } from "src/utils/configEnv"
import { useRouter } from 'next/navigation';
import { cookieAction } from "src/app/action";
async function postVerificar(formCodigo, id){
    try{
        const apiVerificar = await fetch(`${Envs.API_LOCAL}api/contaRegistro/validar`, {
            method: 'POST',
            body: JSON.stringify({codigo: formCodigo, id: id}),
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block'
                
            }
        });
        return apiVerificar.json();
    }catch(error) {
        return error
    }
}
export default function FormContaVerificar({ id, modal }){
    const router = useRouter();
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [contadorCodigo, setContadorCodigo] = useState(0)
    const [response, setResponse] = useState({
        id: '',
        msg: '',
        status: ''
    })
    const [codigo, setCodigo] = useState({
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
    })
    const ValidarLogin = async e => {
        e.preventDefault()
        if (codigo.a && codigo.b && codigo.c && codigo.d && codigo.e && codigo.f) {
            const verificarUser = await postVerificar(codigo, id)
            if (verificarUser.status == '200') {
                const cadCookie = await cookieAction('cadastrar', 'UserToken', verificarUser.token, 60*100)
                return router.push('/aprender')
            } else {
                setResponse({
                    status: verificarUser.status,
                    msg: verificarUser.msg
                });
            }
        } else {
            setResponse({ msg: 'Você deve preencher todos os campos!', status: '' })
        }
    }
    const mudaFoco = e => {
        const nomeParaNumero = ['a', 'b', 'c', 'd', 'e', 'f']
        setCodigo({ ...codigo, [e.target.name]: e.target.value })
        const todosInputs = document.querySelectorAll('form input');
        if (e.target.value.length != 0) {
            setContadorCodigo(0)
            if (todosInputs[Number(nomeParaNumero.indexOf(e.target.name)) + 1].value.length == 0) {
                todosInputs[Number(nomeParaNumero.indexOf(e.target.name)) + 1]?.focus();
            }
        } else {
            if (contadorCodigo != 1) {
                setContadorCodigo(contadorCodigo + 1)
            } else {
                setContadorCodigo(0)
                todosInputs[Number(nomeParaNumero.indexOf(e.target.name)) - 1]?.focus();
            }
        }
    }
    return(
        <form className='gap-4 flex flex-col mt-5' autoComplete="off" onSubmit={ValidarLogin}>
            <h3 className={`mt-5 ${modal && 'text-center'}`}>Digite o codigo que enviamos em seu email!</h3>
            <div className="flex justify-between">
                <input type="text" className={`border rounded-lg bg-transparent h-12 sm:h-16 w-10 sm:w-14 text-center text-xl md:text-3xl font-bold text-gray-600 uppercase `} name="a" maxLength="1" onKeyUp={mudaFoco} />
                <input type="text" className={`border rounded-lg bg-transparent h-12 sm:h-16 w-10 sm:w-14 text-center text-xl md:text-3xl font-bold text-gray-600 uppercase `} name="b" maxLength="1" onKeyUp={mudaFoco} />
                <input type="text" className={`border rounded-lg bg-transparent h-12 sm:h-16 w-10 sm:w-14 text-center text-xl md:text-3xl font-bold text-gray-600 uppercase `} name="c" maxLength="1" onKeyUp={mudaFoco} />
                <input type="text" className={`border rounded-lg bg-transparent h-12 sm:h-16 w-10 sm:w-14 text-center text-xl md:text-3xl font-bold text-gray-600 uppercase `} name="d" maxLength="1" onKeyUp={mudaFoco} />
                <input type="text" className={`border rounded-lg bg-transparent h-12 sm:h-16 w-10 sm:w-14 text-center text-xl md:text-3xl font-bold text-gray-600 uppercase `} name="e" maxLength="1" onKeyUp={mudaFoco} />
                <input type="text" className={`border rounded-lg bg-transparent h-12 sm:h-16 w-10 sm:w-14 text-center text-xl md:text-3xl font-bold text-gray-600 uppercase `} name="f" maxLength="1" onKeyUp={mudaFoco} />
            </div>
            <input type="submit" className="w-full mt-5 rounded-lg bg-gradient-to-r from-bluelight to-blue-500 text-white p-2 font-bold py-3 hover:from-blue-500 hover:to-blue-500" value="validar" />
            <p className="text-xs text-center"><span className="underline">Porque isso esta aparecendo?</span> Não se preocupe, isso é um medida de segurança comum, as vezes indentificamos alguma atividade incomum ou estamos verificando o seu email</p>
            {response.msg && <strong>{response.msg}. {response.status && `ERRO:${response.status}`}</strong>}
        </form>
    )
}