import React, { useEffect, useState } from 'react';
import { useGlobalTheme } from '../../contexts/Theme-context';
import { useGlobalLogin } from '../../contexts/login-context';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { input, setInput, dummyData, loginAction, userToken } = useGlobalLogin()
    const { theme } = useGlobalTheme()
    const navigate = useNavigate()



    useEffect(() => {
        if (userToken) {
            navigate('/');
        }

    }, [userToken])

    const setDummyData = (event) => {
        event.preventDefault();
        setInput(dummyData)
    }


    const setInputUsername = (event) => {
        setInput((prev) => ({ ...prev, email: event.target.value }))
    }

    const setInputPassword = (event) => {
        setInput((prev) => ({ ...prev, password: event.target.value }))
    }


    return (
        <div className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black'} flex min-h-screen w-full flex-row-reverse justify-center items-center`}>
            <div className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} lg:min-w-full xs:min-w-full flex  justify-center items-center`}>
                <form className="  flex xs:min-w-[90%] sm:min-w-[90%] md:min-w-[90%] lg:w-[90%] flex-col justify-center items-center my-10 shadow-lg shadow-cyan-100/50 rounded-md	gap-5  p-20">
                    <h2 className="text-2xl font-bold mb-6">Sign In</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={input.email}
                            onChange={setInputUsername}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={input.password}
                            onChange={setInputPassword}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="btn flex flex-col gap-5 ">
                        <button
                            type="submit"
                            onClick={loginAction}
                            className="bg-cyan-800	 text-white px-2 py-1 rounded-md hover:bg-blue-900"
                        >
                            Sign In
                        </button>
                        <button
                            type="submit"
                            onClick={setDummyData}
                            className="bg-cyan-800	 text-white px-2 py-1 rounded-md hover:bg-blue-900"
                        >
                            Apply Dummy Sata
                        </button>
                    </div>
                    <h1>don't have an account</h1> <p onClick={() => navigate('/signup')} className='cursor-pointer bg-cyan-700 borer rounded pl-2 pr-2 pb-1 text-white' >Signup</p>
                </form>

            </div>

        </div>
    );
};

export default Login;
