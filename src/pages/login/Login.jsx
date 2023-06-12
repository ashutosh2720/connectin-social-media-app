import React, { useState } from 'react';
import { useGlobalTheme } from '../../contexts/Theme-context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { theme } = useGlobalTheme()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset the form
        setEmail('');
        setPassword('');
    };

    return (
        <div className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black'} flex min-h-screen w-full flex-row-reverse justify-center items-center`}>
            <div className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} lg:min-w-full xs:min-w-full flex  justify-center items-center`}>
                <form onSubmit={handleSubmit} className="  flex xs:min-w-[90%] sm:min-w-[90%] md:min-w-[90%] lg:w-[90%] flex-col justify-center items-center my-10 shadow-lg shadow-cyan-100/50 rounded-md	 p-10">
                    <h2 className="text-2xl font-bold mb-6">Sign In</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block ">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
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
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="btn flex flex-col gap-5 ">
                        <button
                            type="submit"
                            className="bg-blue-950	 text-white px-2 py-1 rounded-md hover:bg-blue-900"
                        >
                            Sign In
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-950	 text-white px-2 py-1 rounded-md hover:bg-blue-900"
                        >
                            Dummy Login
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
