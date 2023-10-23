var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import { Suspense } from "react";
import { cookieAction } from "../action";
import MenuLateral from "@/components/elementosPrincipais/menuLateral";
import Container from "@/components/containers/container";

export default async function LayoutMenuLado(props){
    const pegarCookieLogin = await cookieAction('consultar', 'UserToken')
    var decode = await promisify(jwt.verify)(pegarCookieLogin.value, "OD2DS8S21DSA4SD4SS3A");
    return(
        <body className="overflow-x-hidden flex">
            <MenuLateral nome={decode.nome} id={decode.id}/>
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