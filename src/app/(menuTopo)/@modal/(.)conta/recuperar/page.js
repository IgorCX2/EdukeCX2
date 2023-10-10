import Modal from "@/components/Modal/modal";
import FormContaValidar from "@/components/formulario/conta/validar";

export default function RecuperarModal(){
    return(
        <Modal>
            <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h1 className={`text-center md:text-6xl text-5xl font-black w-full`}>RECUPERAR SENHA</h1>
                <h2 className='mt-5 text-center'>Enviaremos um email para você!</h2>
                <FormContaValidar/>
            </section>
        </Modal>
    )
}