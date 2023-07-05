'use client'

import { useRouter } from 'next/navigation'
import React,{FC,useEffect} from 'react'


 const RedirectComponent:FC=()=>{
    const router=useRouter()
     useEffect(()=>{
       router.push('/')
       console.log('work')
     },[])
   
     return <>
      
     </>
   }



   export default RedirectComponent