'use server'
 
import { cookies } from 'next/headers'
async function setCookie(nome, token, tempo){
  const setCookie = await cookies().set({
    name: nome,
    value: token,
    httpOnly: true,
    path: '/',
    secure: true,
    maxAge: tempo
  })
}
export async function cookieAction(acao, nome, token, tempo) {
  const apenasUmCookies = ['UserToken']
  const cookieStore = await cookies()
  const buscarCookie = cookieStore.get(nome)
  switch(acao){
    case 'cadastrar':
      if(buscarCookie!= undefined && apenasUmCookies.includes(nome)){
        return 'erro: cookies ja definido'
      }
      setCookie(nome, token, tempo)
      break;
    case 'delete':
      break;
    case 'consultar':
      return buscarCookie
      break;
  }
}