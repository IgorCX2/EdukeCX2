'use client'
import React, { useEffect, useState } from 'react';
import Btn from '../Botoes/btn';
async function mudarStatus(id){
  try{
      const mudandoStatus = await fetch('https://api.aprendacomeduke.com.br/api/usuariosInfos/mudar-status', {
          method: 'POST',
          body: JSON.stringify({id: id}),
          headers: { 'Content-Type': 'application/json',
          'Origin': 'http://aprendacomeduke.com.br'}
      });
      return mudandoStatus.json()
  }catch(error) {
      return error
  }
}
export default function VideoIntroducao({nome, id}){
  const [fechar, setFechar] = useState(false);
  const [audioBoasVindas, setAudioBoasVindas] = useState(null);
  const createAudioInstance = () => {
    const audio = new Audio('https://imgs.aprendacomeduke.com.br/audio/boasvindas.mp3');
    audio.addEventListener('ended', handleAudioEnded);
    return audio;
  };
  useEffect(() => {
    if (fechar === false) {
      const audio = createAudioInstance();
      mudarStatus(id)
      setAudioBoasVindas(audio);
      audio.play();
    } else {
      if (audioBoasVindas) {
        audioBoasVindas.pause();
        audioBoasVindas.currentTime = 0;
      }
    }
  }, [fechar]);
  const handleAudioEnded = () => {
    setFechar(true);
  };
  const FechamentoAudio = e => {
    e.preventDefault()
    setFechar(true)
  }
  const altura = ['h-7','h-8','h-11','h-14','h-16','h-24','h-11','h-10','h-28','h-24','h-16','h-14','h-12','h-16','h-20','h-24','h-16','h-10','h-11','h-14','h-7','h-9','h-11','h-14','h-16']
  const cor = ['from-bluelight to-blue-400','from-bluelight to-blue-500','from-sky-700 to-blue-500','from-sky-700 to-indigo-600','from-sky-700 to-blue-800','from-bluelight to-blue-500','from-sky-700 to-blue-500','from-bluelight to-blue-400','from-bluelight to-blue-500','from-sky-700 to-indigo-600','from-sky-700 to-blue-800','from-bluelight to-blue-400','from-bluelight to-blue-500','from-sky-700 to-blue-500','from-sky-700 to-indigo-600','from-sky-700 to-blue-800','from-bluelight to-blue-500','from-sky-700 to-blue-500','from-bluelight to-blue-400','from-bluelight to-blue-500','from-sky-700 to-indigo-600','from-sky-700 to-blue-800','from-bluelight to-blue-500','from-sky-700 to-indigo-600','from-sky-700 to-blue-800'] 
  const animacao = ['animate-audioanimate','animate-audioanimates','animate-audioanimates','animate-audioanimate','animate-audioanimate','animate-audioanimates','animate-audioanimates','animate-audioanimate','animate-audioanimate','animate-audioanimate','animate-audioanimate','animate-audioanimates','animate-audioanimates','animate-audioanimate','animate-audioanimate','animate-audioanimates','animate-audioanimates','animate-audioanimate','animate-audioanimate','animate-audioanimates','animate-audioanimates','animate-audioanimate','animate-audioanimate','animate-audioanimate','animate-audioanimate']
  var contadorVoz = -1
  return(
    <form onSubmit={FechamentoAudio} className={`fixed top-0 left-0 h-full w-full bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center	 ${fechar && 'hidden'}`}>
      <h1 className="text-center text-6xl font-extrabold">Olá {nome}!</h1>
      <h1 className="text-center text-2xl font-medium	mt-3">Seja bem vindo(a)</h1>
      <div className='flex items-center mt-16 gap-4'>
        {altura.map(audioParte=> {
          contadorVoz++
          return(
            <div key={`${audioParte}-${contadorVoz}`} className={`bg-gradient-to-t ${cor[contadorVoz]} ${audioParte} w-2 rounded-full ${animacao[contadorVoz]} ${contadorVoz > 12 ? 'sm:flex hidden' : ''}`}/>
          )
        })}
      </div>
      <p className='mt-16 text-lg max-w-2xl'>Olá <strong>{nome}</strong>, Muito obrigado por aceitar participar desta grande aventura! No entanto, antes de seguirmos em frente, precisamos conhecer o destino, os perigos que encontraremos e o objetivo principal da nossa missão. Por isso, a sua primeira missão é atribuir as suas forças para que possamos saber para onde enviá-lo e como fortalecê-lo. Após preencher o campo, o enviaremos para o campo de batalha, e quando sair dele, encontrará sua grande jornada! Boa aventura!</p>
        <Btn configuracao={'bg-blue-500 text-white drop-shadow-botao[2xl] mt-10'}>FECHAR</Btn>
    </form>
  )
}