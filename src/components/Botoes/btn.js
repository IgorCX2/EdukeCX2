import Link from "next/link";

export default function Btn({link, children, configuracao}){
    if(link){
        return(
            <Link href={link}  className={`rounded-lg font-bold py-2.5 px-4 ${configuracao}`}>
                {children}
            </Link> 
        )
    }
    return(
        <button className={`rounded-lg font-bold py-2.5 px-4 ${configuracao}`}>
            {children}
        </button>
    )
}