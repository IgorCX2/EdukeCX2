import Modal from "@/components/Modal/modal";
import FormContaEntrar from "@/components/formulario/conta/entrar";

export default function EntrarModal(){

    return(
        <Modal>
            <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h1 className={`text-center md:text-6xl text-5xl font-black w-full`}>LOGAR</h1>
                <h2 className='mt-5 text-center lg:text-left'>Realize o seu login para juntar-se à nossa comunidade e desfrute de vantagens incríveis</h2>
                <FormContaEntrar/>
            </section>
        </Modal>
    )
}