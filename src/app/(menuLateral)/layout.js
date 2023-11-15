import MenuLateral from "@/components/elementosPrincipais/menuLateral";
import Container from "@/components/containers/container";
import { Suspense } from "react";

export default function LayoutMenuLado(props){
    return(
        <body className="overflow-x-hidden flex">
            <MenuLateral/>
            <Container configuracao={'mt-36 w-full flex gap-10 '}>
                <Suspense fallback={'carregando inicio'}>
                    {props.children}
                </Suspense>
                <Suspense fallback={'carregando paralaleo'}>
                    {props.menuinfoslateral}
                </Suspense>
            </Container>
        </body>
    )
}