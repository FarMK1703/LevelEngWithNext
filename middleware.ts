import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest){

    

    if (request.nextUrl.pathname.startsWith('/personal_page') && !request.cookies.get('token')?.value) {
        return NextResponse.redirect(new URL('/login', request.url))
      }

    else{
        return
    }  
}