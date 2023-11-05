import Image from 'next/image';
export default function MontarBlocoPlano({ descricao}) {
    const materiasEscolares = ["Matemática", "Português", "Geografia", "História", "Biologia", "Química", "Física", "Literatura", "Artes", "Sociologia", "Filosofia"];
    return (
        <div className='flex gap-5'>
            <div className='-mt-14'>
                <Image
                    src={`/ilhas/materias/${materiasEscolares[descricao.materia].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}.png`}
                    alt="ilha de estudo"
                    priority={true}
                    width={140}
                    height={140}
                />
            </div>
            <div className='flex flex-col'>
                <span className="text-xs font-medium">{descricao.tipo == 'R' ? "RETOMADA" : descricao.tipo == 'E' ? "EXERCICIO" : "ESTUDO"}</span>
                <h1 className={`text-sm font-semibold`}>{materiasEscolares[descricao.materia].toUpperCase()}</h1>
                <h2 className="font-bold text-lg">{descricao.plano_estudos}</h2>
            </div>
        </div>
    )
}