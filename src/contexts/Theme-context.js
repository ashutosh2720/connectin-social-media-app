import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark-theme");
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const toastify = {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };


    const notifyInfo = (content) => toast.info(content, toastify);
    const notifySuccess = (content) => toast.success(content, toastify);
    const notifyWarn = (content) => toast.warn(content, toastify);
    const notifyError = (content) => toast.error(content, toastify);


    const handleSearchClick = () => {
        setIsExpanded(!isExpanded);
        setSearchQuery('');
    };
    function handleTheme() {
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    }
    return (
        <themeContext.Provider
            value={{
                handleSearchClick,
                handleTheme,
                theme,
                setTheme,
                toastify,
                notifyInfo,
                notifySuccess,
                notifyWarn,
                notifyError


            }}
        >
            {children}
        </themeContext.Provider>
    );
};

const useGlobalTheme = () => useContext(themeContext);

export { ThemeProvider, useGlobalTheme };
