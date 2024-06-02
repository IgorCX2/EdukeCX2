import MenuTopo from "@/components/menus/menuTopo/menuTopo";
import Rodape from "@/components/menus/rodape";


export default async function LayoutMenuTopo(props){
    return(
        <body className="overflow-x-hidden">
            <MenuTopo/>
            {props.modal}
            {props.children}
            <Rodape/>
        </body>
    )
}