import React from 'react';
import { useGlobalTheme } from '../../contexts/Theme-context';

const Footer = () => {
    const { theme } = useGlobalTheme()
    return (
        <footer className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} border-solid-1 flex justify-center items-center border border-slate-600 p-6 t`}>
            <div className="copy flex justify-center items-center flex-col gap-2">
                <h1>Made by Ashutosh Singh</h1>
                <h1>@Copyright ConnectIn</h1>

            </div>
        </footer>
    );
};

export default Footer;
