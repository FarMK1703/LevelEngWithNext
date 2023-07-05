"use client";

import React, {useState} from "react";

export interface userInputs {
    login: string;
    password: string;
    isValidated: boolean;
}

export default function Login() {

    const [userInputs, setUserInputs] = useState<userInputs>({
        login: "",
        password: "",
        isValidated: true,
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        userInputs.login.trim();
        userInputs.password.trim();

        if (userInputs.login === "" || userInputs.password === "") {
           setUserInputs((userInputs)=>({
            ...userInputs,
            isValidated:!userInputs.isValidated
           }))
        }



        
    };

    return (
        <div className='vh-100 flex items-center justify-around'>
            <form className='bg-base-100 min-w-[420px] py-[30px] rounded-xl shadow-xl flex flex-col items-center justify-center'>
                <input
                    type='text'
                    placeholder='Логин'
                    className={`input input-bordered ${
                        userInputs.isValidated ? "input-info" : "input-error"
                    } w-full max-w-xs`}
                    onChange={(e) => {
                        setUserInputs((userInputs) => ({
                            ...userInputs,
                            login: e.target.value,
                        }));
                    }}
                    value={userInputs.login}
                />
                <input
                    type='password'
                    placeholder='Пароль'
                    className={`input input-bordered mt-[30px]  ${
                        userInputs.isValidated ? "input-info" : "input-error"
                    } w-full max-w-xs`}
                    onChange={(e) => {
                        setUserInputs((userInputs) => ({
                            ...userInputs,
                            password: e.target.value,
                        }));
                    }}
                />

                <button
                    className='mt-[50px] btn-primary px-7 py-3 rounded-lg'
                    onClick={handleSubmit}
                    type='submit'
                >
                    Войти
                </button>
            </form>
        </div>
    );
}
