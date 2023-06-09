import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountMenu from "../accountMenu/AccountMenu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import Switch from "../switch/Switch";

const Navbar = () => {
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

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <nav className={`${theme === 'dark-theme' ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'} sticky top-0  min-w-full z-10 flex items-center justify-around h-16 border-b-2 border-white-900 gap-5 pl-10 pr-3`} >
            <div className="flex items-center">
                <div className="flex gap-6">
                    <div className="logo flex justify-center item-center">
                        <div className="">
                            <ConnectWithoutContactIcon
                                fontSize="large"
                                className=""
                            />
                        </div>
                        <div className="text-cyan-500 font-bold text-xl italic hidden md:inline ">
                            {" "}
                            <p>ConnectIn </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-around gap-10 w-200 font-light ">

                <input placeholder="Search ConnectIn" type="search" name="" id="" className={`${theme === 'dark-theme' ? 'bg-black text-white' : 'bg-white-200 text-black border-2 border-black'} rounded-full h-10 text-black-300 border-2 border-white-400 pl-3 pr-3 outline-none`} />
            </div>
            <div className="hidden md:flex justify-around item-center gap-20">
                <div className="flex items-center jusity-around">
                    <Tooltip title="theme" style={{ color: "cyan" }}>
                        <div className="theme" onClick={() => handleTheme()}>
                            <Switch />
                        </div>
                    </Tooltip>
                    <Tooltip title="account">
                        <AccountMenu className="xs:hidden sm:hidden " />
                    </Tooltip>
                </div>
            </div>
            <div className="theme md:hidden flex" onClick={() => handleTheme()}>
                <Switch />
            </div>

        </nav>
    );
};

export default Navbar;
