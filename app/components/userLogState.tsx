'use client'


import React from 'react'
import Link from 'next/link'

export default function UserLogState() {
  return (
    <Link href='/login' className='flex items-center hover:text-sky-300 text-sky-400' >
     
     Войти

    </Link>
  )
}
