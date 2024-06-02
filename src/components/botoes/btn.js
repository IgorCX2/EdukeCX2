import Link from "next/link";

export default function Btn({link, children, configuracao}){
    const Component = link ? Link : 'button';
    return(
        <Component href={link} className={`rounded-lg font-bold py-2.5 px-4 ${configuracao}`}>
            {children}
        </Component>
    )
}