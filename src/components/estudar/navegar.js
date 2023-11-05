import Image from "next/image"
import Link from "next/link"

export default function NavegarEstudo({ paginas, titulo, id, }) {
    var contarPaginas = -1
    paginas = paginas.split(',')
    titulo = titulo.split(',')
    return (
        <div className="px-8 overflow-y-scroll scrollbonito h-full">
            {paginas.map(tipo => {
                contarPaginas++
                const valordn = contarPaginas
                return (
                    <Link key={titulo[contarPaginas]?.toString()} href={"#" + titulo[contarPaginas]?.toString()}>
                        <div className={`flex gap-5 items-center border-b-2 py-6 ${tipo > 2 && 'px-6'}`}>
                            <div>
                                <Image src="/icones/booknotsmoke.png" alt="Picture of the author" width={40} height={40}/>
                            </div>
                            <div className="flex flex-col">
                                <strong className='text-xl'>{titulo[contarPaginas]}</strong>
                                <p className="text-sm">EM ANDAMENTO</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}