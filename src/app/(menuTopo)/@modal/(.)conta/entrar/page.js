import FormContaEntrar from "@/components/formularios/conta/entrar"
import Modal from "@/components/modal/modal"

export default function ModalEntrar(){
    return(
        <Modal>
            <section className='max-w-md w-full flex flex-col lg:items-start items-center'>
                <h1 className={`text-center md:text-6xl text-5xl font-black w-full`}>LOGAR</h1>
                <h2 className='mt-5 text-center'>Realize o seu login para juntar-se à nossa comunidade e desfrute de vantagens incríveis</h2>
                <FormContaEntrar Modal={true} />
            </section>
        </Modal>
    )
}