import Image from 'next/image';
import { cookieAction } from 'src/app/action';
async function getFrase(dia){
    try{
        const frase = await fetch(`https://api.aprendacomeduke.com.br/api/frases/?data=${dia}`, {
            cache: 'force-cache',
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Origin': 'http://aprendacomeduke.com.br'}
        });
        return frase.json()
    }catch(error) {
        return error
    }
}
export default async function FraseMotivacional({data, }){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var carregaMensagem = await getFrase(data)
    const fraseComDestinatario = carregaMensagem.bancoFrases.filter(frase => (frase.id_destinatario == pegarCookieLogin.id));
    if(fraseComDestinatario.length > 0){
        carregaMensagem = fraseComDestinatario[Math.floor(Math.random() * fraseComDestinatario.length)]
    }
    return(
        <section className="rounded-lg w-full py-5 px-10 xl:px-20 relative bg-gray-100 flex justify-between">
            <div className="max-w-2xl  flex flex-col justify-between relative">
                <div className="max-w-2xl lg:mt-5 flex flex-col relative">
                    <h1 className="text-2xl sm:text-4xl font-semibold mb-2 lg:mb-5">Mensagem do Dia</h1>
                    <p>{carregaMensagem.frase || carregaMensagem.fraseDiaria.frase}</p>
                </div>
            </div>
            <div className='sm:flex hidden relative'>
                <Image
                    src={"https://imgs.aprendacomeduke.com.br/personagens/user.png"}
                    alt="imagem do seu personagem"
                    priority={true}
                    width={170}
                    height={200}	
                    className="h-64 w-40"
                />
            </div>
        </section>
    )    
}