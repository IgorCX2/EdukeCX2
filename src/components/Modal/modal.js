'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Modal({children}){
    const router = useRouter();
    const EscPress = (e) => {
        if (e.key === 'Escape') {
            router.back()
        }
    };
    const clickVoltar = (e) => {
        if(e.target.classList.contains('fixed')){
            router.back()
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', EscPress);
        return () => {
            document.removeEventListener('keydown', EscPress);
        };
    }, []);
    return(
        <div className="fixed top-0 left-0 w-screen h-full bg-black/50 flex justify-center items-center overflow-hidden z-30" onClick={clickVoltar}>
            <div className="bg-white px-8 py-10 rounded-3xl">
                {children}
            </div>
        </div>
    )
}