export default function BoxCarregando({tamanhos, global}){
    const tamanho = tamanhos.split('|')
    const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent`
    return(
        <div className={`${global} relative`}>
            {tamanho.map((quebra_tamanho) => {
                return(<div key={quebra_tamanho} className={`${quebra_tamanho} rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 ${shimmer}`}/>)
            })}
        </div>
    )
}