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
import { useGlobalTheme } from "../../contexts/Theme-context";

const Navbar = () => {
    const { theme, handleTheme } = useGlobalTheme()

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <nav className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black border-2 border-black-800'} sticky top-0  min-w-full z-10 flex items-center justify-around h-16 border-2 border-slate-400	 gap-5 pl-10 pr-3`} >
            <div className="flex items-center">
                <div className="flex gap-6">
                    <div className="logo flex justify-center item-center">
                        <div className="">
                            <ConnectWithoutContactIcon
                                fontSize="large"
                                className=""
                            />
                        </div>
                        <div className="text-cyan-500 font-bold text-xl italic xs:hidden sm:hidden md:hidden md:inline ">
                            {" "}
                            <p>ConnectIn </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-around gap-10 w-200 font-light ">

                <input placeholder="Search users..." type="search" name="" id="" className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white-200 text-black border-2 border-black'} rounded-full h-10 text-black-300 border-2 border-white-100 pl-3 pr-3 outline-none`} />
            </div>
            <div className=" md:flex justify-around item-center gap-20">
                <div className="flex items-center jusity-around">
                    <Tooltip title="theme" style={{ color: "cyan" }}>
                        <div className="theme w-15" onClick={() => handleTheme()}>
                            <Switch />
                        </div>
                    </Tooltip>
                    <div className="theme xs:hidden sm:hidden">
                        <Tooltip title="account">
                            <AccountMenu cla />
                        </Tooltip>
                    </div>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
