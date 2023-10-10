import { NextResponse } from "next/server"

export default function middleware(request){
   const valueToken = request.cookies.get('UserToken')?.value
    const urlLogin = new URL('/conta/entrar', request.url)
    const urlAprender = new URL('/aprender', request.url)
    if(!valueToken && (request.nextUrl.pathname.startsWith("/aprender") || request.nextUrl.pathname.startsWith("/perfil") || request.nextUrl.pathname.startsWith("/avaliacao"))){
        if(request.nextUrl.pathname === '/conta/entrar'){
            return NextResponse.next()
        }
        return NextResponse.redirect(urlLogin)
    }
    if(valueToken && (request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith("/conta"))){
        return NextResponse.redirect(urlAprender)
    }
}
export const config = {
    matcher: ['/', '/conta/:path*', '/aprender/:path*', '/avaliacao/:path*']
}