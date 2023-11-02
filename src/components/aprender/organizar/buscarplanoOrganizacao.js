import Image from 'next/image';
import Link from "next/link";
async function postPlano(id,tipo){
    try{
        const apiPlano = await fetch(`http://localhost:8080/api/estudar/get-infos/?id=${id}&tipo=${tipo} `, {
            cache: 'force-cache',
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Origin': 'http://aprendacomeduke.com.br'}
        });
        return apiPlano.json()
    }catch(error) {
        return error
    }
}
export default async function BuscarPlanoOrganizacao({descricao, imageLoader}){
    const descricaoSepara = descricao.split('|')[0]
    var pegarPlano
    if(descricaoSepara[0] == 'R' || descricaoSepara[0] == 'E'){
        pegarPlano = await postPlano(descricaoSepara.slice(1),'P')
    }else{
        pegarPlano = await postPlano(descricaoSepara,'P')
    }
    const materiasEscolares = ["Matemática", "Português", "Geografia", "História", "Biologia", "Química", "Física", "Literatura", "Artes", "Sociologia", "Filosofia"];
    const coresMaterias = ["bg-rose-500", "bg-blue-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-lime-500", "bg-teal-500", "bg-violet-500", "bg-pink-500", "bg-fuchsia-500", "bg-sky-500"]
    return(
        <div className={`w-full h-24 rounded-lg py-5 px-2 flex ${coresMaterias[pegarPlano.meuPlano[0].materia]}`}>
            <div className='flex gap-5'>
                <div className='-mt-14'>
                    <Image
                        loader={imageLoader}
                        src={`/ilhas/materias/${materiasEscolares[pegarPlano.meuPlano[0].materia].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}.png`}
                        alt="ilha de estudo"
                        priority={true}
                        width={140}
                        height={140}	
                    /> 
                </div>
                <div className='flex flex-col'>
                    <span className="text-xs font-medium">{descricao[0] == 'R' ? "RETOMADA" : descricao[0] == 'E' ? "EXERCICIO":"ESTUDO"}</span>
                    <h1 className={`text-sm font-semibold text-${coresMaterias[pegarPlano.meuPlano[0].materia]}`}>{materiasEscolares[pegarPlano.meuPlano[0].materia].toUpperCase()}</h1>
                    <h2 className="font-bold text-lg">{pegarPlano.meuPlano[0].plano_estudos}</h2>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}