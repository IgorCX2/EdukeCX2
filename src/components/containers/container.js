export default function Container({ children, configuracao }) {
    return <div className={`container mx-auto px-12 z-20 ${configuracao}`}>{children}</div>
}