import Image from "next/image"
import Btn from "../botoes/btn"
export default function BoxDescricao({title, text, img, style, btnlink, btnltexto, type}){
    return(
        <div className={`${style} flex flex-col justify-between rounded-lg`}>
            <div className={`${type ? 'items-center' : undefined} flex flex-col gap-2`}>
                <div>
                    <Image
                        src={`http://imgs.aprendacomeduke.com.br${img}`}
                        alt={`logo do produto ${title}`}
                        width={type ? 80 : 40}
                        height={type ? 80 : 50}
                        style={{ objectFit: 'contain', width: "auto"}}
                    />
                </div>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <p className={type ? 'text-center' : undefined}>{text}</p>
            <div className="mt-5">
                <Btn link={btnlink} configuracao={'bg-blue-500 text-white'}>{btnltexto}</Btn>
            </div>
        </div>
    )
}