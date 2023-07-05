import React from "react";
import AdvList from "./components/AdvList";

export default function page() {


    return (
        <div>
            <section className='w-full vh-100 mt-12 flex-col items-center justify-center flex lg:px-14'>
                
                   <div className="lg:w-[80%]">
                   <h1 className="text-6xl leading-relaxed text-zinc-200 text-center">
                    Онлайн платформа <span className="text-sky-400">LevelENG</span>
                    
                    </h1>

                    <p className="text-lg px-[30px] leading-[35px] text-zinc-300 mt-[50px]">
                    <span className="text-accent">LevelENG</span> - это онлайн-платформа, которая предлагает качественно подобранные материалы и современную методику обучения основанную на интерактивных материалах. Гибкий график и опытные преподаватели сделают процесс обучения более плавным и эффективным. Записывайтесь на наши курсы и получайте максимальное удовольствие от обучения!
                    </p>
                   </div>
              
            </section>

            <section className="w-full m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 auto mt-28">
              <AdvList/>
            </section>
        </div>
    );
}
