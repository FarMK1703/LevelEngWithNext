import React from "react";
import Link from "next/link";

export default function IntroPageBtn() {

    
    return (
        <Link className='text-xl
         hover:bg-sky-500 
         hover:text-base-200 
         focus:ring-2
         transition-colors
          text-sky-500 
          ring-2 
          ring-sky-500 
          rounded-md 
          p-3 mt-[50px]'
          href='/home'
          >
            Начать погружение
        </Link>
    );
}
