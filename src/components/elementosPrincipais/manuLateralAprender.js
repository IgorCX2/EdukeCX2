import Image from 'next/image';
export default function MenuAprender({imageLoader}) {
    return (
        <aside className='lg:flex hidden w-3/12 flex gap-12 flex-col'>
            <div className='w-full flex flex-col gap-5'>
                <div className="w-full rounded-lg py-10 px-3 xl:px-7 bg-[#191022] relative flex flex-col justify-center items-center text-white">
                    <Image
                        loader={imageLoader}
                        src={"/logos/logovip.png"}
                        alt="logo de vip"
                        width={100}
                        height={100}

                    />
                    <h1 className="text-3xl font-bold mt-5">Seja Vip!</h1>
                    <p className='text-center mt-1'>Entre em nossa loja e assine o vip! Zero anúncios, moedas dobradas e muito mais!</p>
                </div>
                <div className="rounded-lg w-full px-3 xl:px-7 py-3.5 relative bg-amber-300 font-semibold text-white">
                    <p>A plataforma está instavel [BETA]</p>
                </div>
            </div>
            <div className="w-full rounded-lg h-60 border-2">
                <h1 className="text-3xl font-bold mt-5 text-center">propaganda</h1>
            </div>
            <div className="w-full rounded-lg py-10 px-7 bg-red-600 relative flex flex-col justify-center items-center text-white">
                <Image
                    loader={imageLoader}
                    src={"/logos/logoyoutube.png"}
                    alt="logo de vip"
                    width={100}
                    height={100}
                    className="h-16 w-24"
                />
                <h1 className="text-3xl font-bold mt-5 text-center">Visite nosso canal do YouTube!</h1>
            </div>
            <div className="w-full rounded-lg h-60 border-2">
                <h1 className="text-3xl font-bold mt-5 text-center">propaganda</h1>
            </div>
        </aside>
    )
}