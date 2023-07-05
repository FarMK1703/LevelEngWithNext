import React from "react";
import IntroPageBtn from "./components/IntroPageBtn";

export default function Introduction() {
    return (
        <div className='w-full vh-100 flex flex-col items-center justify-center'>
            <h1 className='inline w-[90%] lg:w-full text-center text-4xl text-zinc-200'>
                Погрузись в мир английского языка вместе с{" "}
                <span className='text-sky-500'>LevelENG</span>
            </h1>
            <h2 className="mt-[50px] text-2xl w-[90%] lg:w-full  text-center text-gray-400">
              Прокачайся свой IELTS на максимум
            </h2>
            <IntroPageBtn/>

        </div>
    );
}
