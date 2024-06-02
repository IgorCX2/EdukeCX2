import FormContaRecuperar from "@/components/formularios/conta/recuperar"
import Modal from "@/components/modal/modal"

export default function RecuperarModal(){
    return(
        <Modal>
            <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h1 className={`text-center md:text-6xl text-5xl font-black w-full`}>RECUPERAR SENHA</h1>
                <h2 className='mt-5 text-center lg:text-left'>Enviaremos um email para você!</h2>
                <FormContaRecuperar/>
            </section>
        </Modal>
    )
}