import React from "react";
import Image from "next/image";
import TG_icon from "../static/svg/telegram-svgrepo-com.svg";
import INST_icon from "../static/svg/instagram-1-svgrepo-com.svg";
import TWITTER_icon from "../static/svg/twitter-svgrepo-com.svg";
import COPY_icon from "../static/svg/copyright-svgrepo-com.svg";

export default function Footer() {
    interface contactsGroup {
        value: string;
        href: string;
        img: any;
    }

    const contactsGroup: contactsGroup[] = [
        { value: "Telegram", href: "https://t.me/OnLevelEng", img: TG_icon },
        {
            value: "Instagram",
            href: "https://www.instagram.com/",
            img: INST_icon,
        },
        { value: "Twitter", href: "https://twitter.com/", img: TWITTER_icon },
    ];

    return (
        <footer className='relative w-full h-80 bg-base-300 flex items-center'>
            <div className='flex flex-col h-full w-1/2 md:w-1/5 items-center justify-start'>
                <ul className='h-full flex flex-col justify-start mt-10 '>
                    <p className='text-zinc-300'>Социальные сети</p>
                    {contactsGroup.map((item) => {
                        return (
                            <a
                                href={item.href}
                                className='text-gray-600 mt-7 flex items-center hover:text-gray-200 cursor-pointer transition-colors'
                                key={item.value}
                            >
                                <Image
                                    className='mr-3'
                                    alt='#'
                                    src={item.img}
                                />{" "}
                                {item.value}
                            </a>
                        );
                    })}
                </ul>
            </div>

            <p className='absolute flex justify-center items-center bottom-6 w-full text-center text-xs'>
                <Image className='inline' src={COPY_icon} alt='#' /> LevelENG
                2023
            </p>
        </footer>
    );
}
