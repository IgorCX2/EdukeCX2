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
export default async function BuscarPlano({descricao, posicao, imageLoader}){
    const descricaoSepara = descricao.split('|')[0]
    console.log(descricaoSepara)
    var pegarPlano
    if(descricaoSepara[0] == 'R' || descricaoSepara[0] == 'E'){
        pegarPlano = await postPlano(descricaoSepara.slice(1),'P')
    }else{
        pegarPlano = await postPlano(descricaoSepara,'P')
    }
    const materiasEscolares = ["Matemática", "Português", "Geografia", "História", "Biologia", "Química", "Física", "Literatura", "Artes", "Sociologia", "Filosofia"];
    const coresMaterias = ["border-rose-500", "border-blue-500", "border-orange-500", "border-yellow-500", "border-emerald-500", "border-lime-500", "border-teal-500", "border-violet-500", "border-pink-500", "border-fuchsia-500", "border-sky-500"]
    return(
       <Link href={posicao == 0 ? `/estudar/${materiasEscolares[pegarPlano.meuPlano[0].materia].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}/${descricao}` : `/aprender`} className={posicao != 0 ? "cursor-not-allowed pointer-events-none	" : ""}>
            <div className={`${posicao != 0 ? "grayscale-[80%]" : ""} flex relative`}>
                <div className="z-20 saturate-150">
                    <Image
                        loader={imageLoader}
                        src={`/ilhas/materias/${materiasEscolares[pegarPlano.meuPlano[0].materia].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}.png`}
                        alt="ilha de estudo"
                        priority={true}
                        width={190}
                        height={190}	
                    /> 
                </div>
                <div className={`border-2 ${coresMaterias[pegarPlano.meuPlano[0].materia]} rounded-lg h-full w-60 -ml-20`}>
                    <div className="flex justify-between flex-col ml-20 p-2 ">
                        <div>
                            <span className="text-xs font-medium">{descricao[0] == 'R' ? "RETOMADA" : descricao[0] == 'E' ? "EXERCICIO":"ESTUDO"}</span>
                            <h1 className={`text-sm font-semibold text-${coresMaterias[pegarPlano.meuPlano[0].materia]}`}>{materiasEscolares[pegarPlano.meuPlano[0].materia].toUpperCase()}</h1>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">{pegarPlano.meuPlano[0].plano_estudos}</h2>
                        </div>
                    </div>
                </div>
            </div> 
        </Link>
    )
}