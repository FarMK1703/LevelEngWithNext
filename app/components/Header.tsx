


import React from "react";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";
import { NavMenuLink } from "../interfaces";
import Link from "next/link";
import UserLogState from "./userLogState";


export default function Header() {
    const links: NavMenuLink[] = [
        { value: "Главная", href: "/home" },
        { value: "Личный кабинет", href: "/personal_page" },
        {value: 'Партнерская программа', href:'/colobarate'}
    ];

    

    return (
        <>
            <nav className='px-3 py-10 w-full flex md:p-7 items-bottom justify-between relative'>
               <div className="flex">
               <Link href='/' className="flex items-center">
                    <h1 className='text-2xl inline-flex text-sky-400 font-semibold ml-3 cursor-pointer'>
                        LevelENG
                    </h1>
                </Link>
                <ul className='hidden md:flex items-end ml-7'>
                    <NavLinks links={links} />
                </ul>
               </div>
                 
               <div className="flex items-center'">
               <div className="hidden md:flex">
               <UserLogState></UserLogState> 
               </div>
                <HamburgerMenu links={links} />
               </div>
            </nav>
        </>
    );
}
