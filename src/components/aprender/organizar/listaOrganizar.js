'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

import MontarBlocoPlano from "./montarbloco";
import TelaCarregando from '@/components/carregando/telacarregando';
async function postNovoPlano(plano, id){
    try{
        const apiCadastro = await fetch('https://api.aprendacomeduke.com.br/api/usuariosInfos/salva-plano', {
            method: 'POST',
            body: JSON.stringify({plano, id}),
            headers: { 'Content-Type': 'application/json',}
        });
        return apiCadastro.json()
    }catch(error) {
        return error
    }
}
export default function ListaOrganizar({ data, planos, id}) {
    const router = useRouter()
    const coresMaterias = ["bg-rose-500", "bg-blue-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-lime-500", "bg-teal-500", "bg-violet-500", "bg-pink-500", "bg-fuchsia-500", "bg-sky-500"]
    const [array, setArray] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [sobreFucus, setSobreFucus] = useState(false)
    useEffect(() => {
        const planoProvisorio = data.filter((planoBuscar) => planoBuscar !== 'A').map((planoBuscar) => {
            const meuPlanoDados = planoBuscar
            planoBuscar = planoBuscar.split('|')[0];
            const planoPrimeiro = planoBuscar
            let meuPlano = planos.Planos.find(plano => plano.codigo_plano == (!isNaN(planoBuscar[0]) ? planoBuscar : planoBuscar.slice(1)));
            meuPlano.tipo = (!isNaN(planoPrimeiro[0]) ? "P" : planoPrimeiro[0])
            meuPlano.dados = meuPlanoDados
            return meuPlano;
        });
        setArray(planoProvisorio);
    }, [data, planos]);
    const moveItem = (index, direction) => {
        if (direction === 'up' && index > 0) {
            const newArray = [...array];
            [newArray[index - 1], newArray[index]] = [newArray[index], newArray[index - 1]];
            setArray(newArray);
        } else if (direction === 'down' && index < array.length - 1) {
            const newArray = [...array];
            [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index]];
            setArray(newArray);
        }
    };
    const deleteItem = (index) => {
        const newArray = [...array];
        newArray.splice(index, 1);
        setArray(newArray);
    };
    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputValue(text);
        const filteredSuggestions = planos.Planos.filter((plano) =>
            plano.plano_estudos.toLowerCase().includes(text.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };
    const handleSuggestionSelect = (plano_estudos) => {
        setInputValue(plano_estudos);
        setSobreFucus(false)
        setSuggestions([]);
    };
    const incluirFunction = () => {
        if (inputValue) {
            const valorExiste = planos.Planos.find(plano => plano.plano_estudos == inputValue)
            if (valorExiste) {
                const newArray = [valorExiste, ...array];
                setArray(newArray);
                setResponse('')
            } else {
                setResponse('Erro, este plano de estudos não existe!')
            }
        } else {
            setResponse('Você deve preencher todos os campos!')
        }
    }
    const salvaPlano = async e => {
        setLoadingStatus(true)
        if(array.length > 2){
            const meuNovoPlano = array.map(meuPlanoSalvar => {
                if(meuPlanoSalvar.dados){
                    return meuPlanoSalvar.dados
                }
                return meuPlanoSalvar.codigo_plano+'|'  
            })
            const responseEnv = await postNovoPlano(meuNovoPlano.toString()+",A",id)
            if(responseEnv.status == 200){
                return router.push('/conta/entrar')
            }else{
                setResponse(responseEnv.msg);
            }
        }else{
            setResponse('voce deve ter no minimo 3 planos de estudos');
        }
        setLoadingStatus(false)
    }
    return (
        <div className="my-5 relative">
            {loadingStatus == true && <TelaCarregando/>}
            <div className={sobreFucus ? 'flex fixed h-screen w-full bg-black/50 z-30 top-0 left-0' : undefined} onClick={() => setSobreFucus(false)} />
            <div className='relative flex gap-5 z-40 bg-white rounded-lg'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setSobreFucus(true)}
                    className='border rounded-lg outline-gray-800 px-2 py-2.5 w-full'
                />
                <button onClick={incluirFunction} className='rounded-lg font-bold py-2.5 px-4 bg-blue-500 text-white'>Incluir</button>
                <button onClick={salvaPlano} className='rounded-lg font-bold py-2.5 px-4 bg-blue-500 text-white'>SALVAR</button>
            </div>
            {response}
            {(sobreFucus && suggestions.length > 0) &&
                <div className='absolute h-32 overflow-hidden rounded-lg w-2/4 z-40 bg-white'>
                    <ul className='h-full overflow-y-scroll'>
                        {suggestions.map((plano) => (
                            <li key={plano.codigo_plano} className='p-2 border-b-2' onClick={() => handleSuggestionSelect(plano.plano_estudos)}>
                                {plano.plano_estudos}
                            </li>
                        ))}
                    </ul>
                </div>
            }
            <div className='flex flex-col mt-16 gap-12'>
                {array.map((plano, index) => {
                    return (
                        <div key={index} className={`w-full h-24 rounded-lg py-5 px-2 flex justify-between items-center	${coresMaterias[plano.materia]}`}>
                            <MontarBlocoPlano descricao={plano} />
                            <div className='flex flex-col h-24 justify-between py-1.5'>
                                <button onClick={() => moveItem(index, 'up')}>▲</button>
                                <button onClick={() => deleteItem(index)}>Excluir</button>
                                <button onClick={() => moveItem(index, 'down')}>▼</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={salvaPlano} className='w-full rounded-lg font-bold py-2.5 px-4 bg-blue-500 text-white mt-8'>SALVAR</button>
        </div>
    )
}