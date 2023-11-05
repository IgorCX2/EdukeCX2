'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Btn from "../Botoes/btn";
async function cadastrarNivel(id, nivel){
    try{
        const salvalNivel = await fetch(`https://api.aprendacomeduke.com.br/api/usuariosInfos/cad-nivel`, {
            method: 'POST',
            body: JSON.stringify({form: nivel, id: id}),
            headers: { 'Content-Type': 'application/json',
            'Origin': 'http://aprendacomeduke.com.br'}
        });
        return salvalNivel.json()
    }catch(error) {
        return error
    }
}
export default function SelecionarNivel({id}){
    const router = useRouter()
    const [nivel, setNivel] = useState({
        matemática: '2', 
        português: '2',
        geografia: '2',
        história: '2',
        biologia: '2',
        química: '2',
        física: '2',
        literatura: '2',
        artes: '2',
        sociologia: '2',
        filosofia: '2'
    })
    const onChangeInput = e => setNivel({...nivel, [e.target.name]: e.target.value})
    const coresMaterias = ["bg-rose-500", "bg-blue-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-lime-500", "bg-teal-500", "bg-violet-500", "bg-pink-500", "bg-fuchsia-500", "bg-sky-500"]
    const materiasEscolares = ["matemática", "português", "geografia", "história", "biologia", "química", "física", "literatura", "artes", "sociologia", "filosofia"];
    const SendNivel = async e => {
        e.preventDefault()
        const responseEnv = await cadastrarNivel(id,nivel)
        if(responseEnv.status == 200){
            router.push(`/avaliacao/diagnostica`);
        }
    }
    return(
        <form className="flex flex-col gap-2" onSubmit={SendNivel}>
            <h1 className="font-bold text-2xl">Selecione um nivel de conhecimento para cada materia</h1>
            <span>sendo 1 baixo(ensino fundamental I) e 5 alto(ensino médio/superior)</span>
            <div className="w-full flex flex-wrap gap-10 mt-10 pb-10">
                {materiasEscolares.map(materia =>{
                    const valorMateria = materiasEscolares.indexOf(materia)
                    return(
                        <div className={`rounded-lg w-full lg:w-60 h-24 flex flex-col gap-3 px-6 py-3 ${coresMaterias[valorMateria]}`} key={materia}>
                            <div className='flex items-center justify-between'>
                                <h1 className="text-xl font-medium">{materiasEscolares[valorMateria].charAt(0).toUpperCase() + materiasEscolares[valorMateria].slice(1)}</h1>
                                <p className="text-lg font-bold	text-gray-300">{Number(nivel[materiasEscolares[valorMateria]])+1}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>1</p>
                                    <input className="appearance-none h-1 w-full bg-gray-300 rounded-full" type="range" name={materia} min="0" max="4" onChange={onChangeInput}/>
                                <p>5</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Btn configuracao={'bg-gradient-to-r from-bluelight to-blue-500 text-white font-bold hover:from-blue-500 hover:to-blue-500 mb-10'}>SALVAR</Btn>
        </form>
    )
}