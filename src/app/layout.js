import { Suspense } from "react";
import '../../globals.css'
export default function LayoutFull({children}){
    return(
        <html lang="pt-BR">
            <Suspense fallback={'carregando pagina'}>
                {children}
            </Suspense>
        </html>
    )
}