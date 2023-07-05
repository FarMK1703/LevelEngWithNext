'use client'

import React from "react";
import { useAppSelector } from "@/app/Redux/hooks/hooks";


export default function AdvList() {
    const advertisments = useAppSelector((state) => state.advertismentListSlice.value)

    return advertisments.map((advertisment, index) => {
        return (
            <div key={index} className='flex  items-center justify-between mx-[10px] my-[10px]'>
                <div className=' w-[90%] h-[400px] m-auto mx-5 my-5 flex flex-col bg-base-100  justify-between rounded-lg shadow-xl'>
                    <div className='card-body mx-[10px] my-[10px]  lg:mx-[20px] lg:my-[30px] '>
                        <h2 className='card-title text-accent'>{advertisment.title}</h2>
                        <p className="pt-6">{advertisment.description}</p>
                    </div>

                    <div className='card-actions justify-end mb-[30px] pr-[15px]'>
                        <button className='btn btn-primary'>
                            Узнать больше
                        </button>
                    </div>
                </div>
            </div>
        );
    });
}
