async function getVidas(id){
    try{
        const apiVerVidas = await fetch(`http://localhost:8080/api/usuariosVida/vida/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',}
        });
        return apiVerVidas.json()
    }catch(error) {
        return error
    }
}
export default async function Xp({id}){
    //const verQtdVidas = await getVidas(id)
    //console.log(verQtdVidas)
    return(
        <div className="flex gap-2 mt-2">
            <div>
                <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-amber-500 overflow-hidden"></div>
                <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-amber-500	 after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>
            </div>
            <div>
                <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-amber-500	 overflow-hidden"></div>
                <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-amber-500	 after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>
            </div>
            <div>
                <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-amber-500	 overflow-hidden"></div>
                <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-amber-500	 after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>
            </div>
            <div>
                <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-amber-500	 overflow-hidden"></div>
                <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-amber-500	 after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>
            </div>
            <div>
                <div className="rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-white after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-amber-500	 overflow-hidden"></div>
                <div className="ml-1 -mt-0.5 rotate-90 after:absolute after:h-[200%] after:w-[200%] after:bg-amber-500	 after:origin-top-left after:rotate-45 relative h-2.5 w-2.5 bg-white overflow-hidden"></div>
            </div>
    </div>
    )
}