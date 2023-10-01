import MenuTopo from "@/components/elementosPrincipais/menuTopo";
import Rodape from "@/components/elementosPrincipais/rodape";

export default function LayoutMenuTopo(props){
    return(
        <body className="overflow-x-hidden">
            <MenuTopo/>
                {props.children}
                {props.modal}
            <Rodape/>
        </body>
    )
}