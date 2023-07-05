"use client";

import React from "react";
import { toggleMenu } from "../Redux/features/menuToggleSlice";
import { NavMenuLink } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../Redux/hooks/hooks";
import Link from "next/link";
import UserLogState from "./userLogState";

export default function HamburgerMenu({ links }: { links: NavMenuLink[] }) {
    const dispatch = useAppDispatch();
    const menuState = useAppSelector((state) => state.menuToggleSlice.value);

    const toggle=()=>{
        dispatch(toggleMenu());
        document
            .querySelector("body")
            ?.classList.toggle("inactive-body");
    }

    return (
        <>
            <ul className='md:hidden  absolute z-20 right-6 top-9'
            onClick={toggle}
            >
                {[1, 2, 3].map((item, index) => {
                    return (
                        <li className='w-9 h-1 m-2 bg-sky-500' key={index}></li>
                    );
                })}
            </ul>
            <div
                className={`md:hidden ${
                    !menuState && "transform translate-y-[-100%]"
                } transition-transform absolute right-0 top-0 z-10 w-full h-screen bg-base-300`}
            >
                <ul
                    className='pt-[120px] pl-7 '
                    onClick={toggle}
                >
                    <UserLogState />
                    <div className='divider'></div>
                    {links.map((item, index) => {
                        return (
                            <Link
                                href={item.href}
                                className='mt-7 block text-sky-500'
                                key={index}
                            >
                                {item.value}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
