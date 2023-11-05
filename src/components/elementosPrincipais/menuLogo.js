import Image from "next/image";
import Link from "next/link";
const imageLoader = ({ src, width, quality }) => {
    return `https://aprendacomeduke.com.br${src}?w=${width}&q=${quality || 75}`
}
export default function LogoEduke({ imageLoader }) {
    return (
        <Link href="/" className="flex gap-3 items-center">
            <div>
                <Image
                    loader={imageLoader}
                    src="/logosite.png"
                    alt="LogoCX2"
                    className="w-full h-auto saturate-200"
                    width={32}
                    height={50}
                    priority
                />
            </div>
            <div>
                <h1 className="text-2xl font-black">EDUKE</h1>
                <h2 className="text-xl font-semibold -mt-2 tracking-widest">by CX2</h2>
            </div>
        </Link>
    )
}