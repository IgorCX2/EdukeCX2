import MenuTopo from "@/components/elementosPrincipais/menuTopo";
import Rodape from "@/components/elementosPrincipais/rodape";

export default function LayoutMenuTopo({children}){
    return(
        <body className="overflow-x-hidden">
            <MenuTopo/>
            {children}
            <Rodape/>
        </body>
    )
}