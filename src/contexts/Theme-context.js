import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark-theme");
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

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
                setTheme


            }}
        >
            {children}
        </themeContext.Provider>
    );
};

const useGlobalTheme = () => useContext(themeContext);

export { ThemeProvider, useGlobalTheme };
