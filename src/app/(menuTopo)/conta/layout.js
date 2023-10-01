import Image from "next/image"
import { Suspense } from "react";
import Container from "@/components/containers/container";
export default async function LayoutConta({children, imageLoader}){
    return(
        <Container configuracao={'flex w-full h-screen justify-center lg:justify-evenly items-center'}>
            <main className="w-full flex">
                <section className="absolute w-0.5 h-full bg-gradient-to-t from-transparent via-gray-400 top-0 items-center hidden sm:flex">
                    <div className='w-1.5 h-40 rounded-full bg-gradient-to-t from-blue-500 absolute -left-0.5'></div>
                </section>
                <div className='w-full flex justify-center lg:justify-evenly items-center'>
                    <section className='hidden lg:flex'>
                        <Image
                            loader={imageLoader}
                            src="/icones/book.png"
                            alt="foto de um livro"
                            placeholder ='blur'
                            blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                            width={600}
                            height={600}
                            className="w-full h-auto"
                        />
                    </section>
                    <Suspense fallback={"J"}>
                        {children}
                    </Suspense>
                </div>
            </main>
        </Container>
    )
}