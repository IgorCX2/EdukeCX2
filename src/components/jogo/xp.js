import { cookieAction } from "src/app/action";

async function getVidas(id) {
    try {
        const apiVerVidas = await fetch(`http://localhost:8080/api/usuariosVida/vida/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', }
        });
        return apiVerVidas.json()
    } catch (error) {
        return error
    }
}
export default async function Xp() {
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    const verQtdVidas = await getVidas(pegarCookieLogin.id)
    const vidasTotal = [0, 0, 0, 0, 0, 0]
    return (
        <div className="flex gap-2 mt-2">
            {vidasTotal.map((vidaVisual, index) => (
                <div key={5-index}>
                    {verQtdVidas.minhasVidas[5-index] != undefined ? (
                        <>
                            <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-black overflow-hidden"></div>
                            <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-black after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>

                        </>
                    ) : (
                        <>
                            <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-amber-500 overflow-hidden"></div>
                            <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-amber-500 after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}