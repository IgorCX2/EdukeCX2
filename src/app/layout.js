import { Suspense } from "react";
import '../../globals.css'
export default function LayoutFull({children}){
    return(
        <html lang="pt-BR">
            {children}
        </html>
    )
}