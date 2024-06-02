'use server'
import { redirect } from 'next/navigation'
var jwt = require('jsonwebtoken');
const { promisify } = require('util');
import { cookies } from 'next/headers'
async function setCookie(nome, token, tempo) {
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
  const cookieStore = cookies()
  const buscarCookie = cookieStore.get(nome)
  switch (acao) {
    case 'cadastrar':
      if (buscarCookie != undefined && apenasUmCookies.includes(nome)) {
        return 'erro: cookies ja definido'
      }
      setCookie(nome, token, tempo)
      break;
    case 'delete':
      cookies().delete(nome)
      redirect('/sair-conta')
    case 'consultar':
      if (buscarCookie) {
        var decode = await promisify(jwt.verify)(buscarCookie.value, "OD2DS8S21DSA4SD4SS3A");
        return {
          nome: decode.nome,
          id: decode.id
        };
      }
      return buscarCookie
  }
}