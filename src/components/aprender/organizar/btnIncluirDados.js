'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";

async function addPlano(id,nome, refresh) {
    const apiaddPlano = await fetch(`http://localhost:8080/api/estudar/add-plano`, {
        method: 'POST',
        body: JSON.stringify({id,nome}),
        headers: { 'Content-Type': 'application/json',}
    });
    refresh();
}
export default function AutoSugestaoIncluir({data,id}){
    const router = useRouter()
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [sobreFucus, setSobreFucus] = useState(false)
    const handleInputChange = (e) => {
      const text = e.target.value;
      setInputValue(text);
      const filteredSuggestions = data.Planos.filter((plano) =>
        plano.plano_estudos.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    };
  
    const handleSuggestionSelect = (plano_estudos) => {
      setInputValue(plano_estudos);
      setSobreFucus(false)
      setSuggestions([]);
    };
    const incluirFunction = () => {
        if(inputValue){
            const valorExiste = data.Planos.some(plano => plano.plano_estudos === inputValue);
            if(valorExiste){
                addPlano(1, inputValue, router.refresh)
                setResponse('')
    
            }else{
                setResponse('Erro, este plano de estudos não existe!')
            }
        }else{
            setResponse('Você deve preencher todos os campos!')
        }

        
    }
    return(
        <div className='relative'>
            <div className={sobreFucus ? 'flex fixed h-screen w-full bg-black/50 z-30 top-0 left-0' : undefined} onClick={() => setSobreFucus(false)}/>
            <div className='relative z-40'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setSobreFucus(true)}
                    className='border rounded-lg outline-gray-800 px-2 py-2.5'
                />
                <button onClick={incluirFunction} className='ml-5 rounded-lg font-bold py-2.5 px-4 bg-blue-500 text-white'>Incluir</button>
            </div>
            {response}
            {(sobreFucus && suggestions.length > 0) &&
            <div className='absolute h-32 overflow-hidden z-40 bg-white'>
                <ul className='h-full overflow-y-scroll'>
                    {suggestions.map((plano) => (
                        <li key={plano.codigo_plano} className='py-1 border-b-2' onClick={() => handleSuggestionSelect(plano.plano_estudos)}>
                            {plano.plano_estudos}
                        </li>
                    ))}
                </ul>
            </div>
            }
      </div>
    )
}