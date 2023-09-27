import MenuTopo from "../../components/elementosPrincipais/menuTopo";

export default function LayoutMenuTopo({children}){
    return(
        <body className="overflow-x-hidden">
            <MenuTopo/>
            {children}
        </body>
    )
}