import Container from "./container";

export default function ContainerDoisSection({children, config}){
    return(
        <section className={`relative w-full ${config}`}>
            <Container configuracao={'justify-center lg:justify-between flex gap-12  items-center flex-wrap '}>
                {children}
            </Container>
        </section>
    )
}