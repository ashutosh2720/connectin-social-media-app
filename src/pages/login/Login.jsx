import React, { useEffect, useState } from 'react';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
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
        setInput((prev) => ({ ...prev, username: event.target.value }))
    }

    const setInputPassword = (event) => {
        setInput((prev) => ({ ...prev, password: event.target.value }))
    }


    return (
        <div className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black'} flex min-h-[100px] w-full flex-row-reverse border border-black justify-center items-center`}>
            <div className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} lg:min-w-full xs:min-w-full flex  justify-center items-center`}>
                <form onSubmit={loginAction} className="  flex xs:min-w-[90%] sm:min-w-[90%] md:min-w-[90%] lg:w-[90%] flex-col justify-center items-center my-10 shadow-lg shadow-cyan-100/50 border border-black rounded-md	gap-5 h-[20%] p-20">
                    <div className="text-cyan-500 flex gap-3 justify-center items-center font-bold text-6xl italic xs:hidden sm:hidden md:hidden md:inline ">
                        {" "}
                        <div className="connect text-6xl">
                            <ConnectWithoutContactIcon fontSize="" className="" />
                        </div> <p>ConnectIn </p>
                    </div>
                    <h2 className="text-2xl font-bold mb-6">Sign In</h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block ">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={input?.username}
                            onChange={setInputUsername}
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
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
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
                            required
                        />
                    </div>
                    <div className="btn flex flex-col gap-5 ">
                        <button
                            type="submit"

                            className="bg-cyan-800	 text-white px-2 py-1 rounded-md hover:bg-yellow-300 hover:text-black"
                        >
                            Sign In
                        </button>
                        <button
                            type="submit"
                            onClick={setDummyData}
                            className="bg-cyan-800 	 text-white px-2 py-1 rounded-md hover:bg-yellow-300 hover:text-black"
                        >
                            Apply Dummy Data
                        </button>
                    </div>
                    <h1>don't have an account</h1> <p onClick={() => navigate('/signup')} className='cursor-pointer bg-cyan-700 borer rounded pl-2 pr-2 pb-1   hover:bg-yellow-300 hover:text-black"' >Signup</p>
                </form>

            </div>

        </div>
    );
};

export default Login;
