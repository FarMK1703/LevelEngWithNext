'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { NavMenuLink } from '../interfaces';
import Link from "next/link";

export default function NavLinks({links}:{links:NavMenuLink[]}) {
   const pathname=usePathname()
    
   return (
   <>
    {links.map((item, index) => {
      
        const isActive=pathname.startsWith(item.href)
        return (
            <Link
                key={index}
                href={item.href}
                className={`m-5  ${isActive?'text-sky-300':'text-sky-500'} hover:text-sky-300`}
            >
                {item.value}
            </Link>
        );
    })}
   </>
   )
}
