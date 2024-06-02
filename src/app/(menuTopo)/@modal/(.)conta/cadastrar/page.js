import FormContaCadastrar from "@/components/formularios/conta/cadastrar";
import Modal from "@/components/modal/modal";

export default function CadastrarModal(){
    return(
        <Modal>
            <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h1 className={`md:text-6xl text-center text-5xl font-black w-full`}>CADASTRAR</h1>
                <h2 className='mt-5 text-center'>Realize o seu cadastro para juntar-se a nossa comunidade e desfrute de vantagens incriveis</h2>
                <FormContaCadastrar/>
            </section>
        </Modal>
    )
}