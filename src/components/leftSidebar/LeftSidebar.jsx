import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PostDialogBox from "../postDialogBox/PostDialogBox";
import IosShareIcon from "@mui/icons-material/IosShare";
import { NavLink, useNavigate } from "react-router-dom";


const LeftSidebar = () => {

    const active = ({ isActive }) => ({
        fontWeight: isActive ? "800" : "200",
        color: isActive ? "green" : "",
    });
    return (
        <>
            {" "}
            <div className="left flex justify-start item-start p-7 flex-col gap-5	">
                <div className="home flex justify-start item-start gap-3 hover:bg-cyan-900 transition hover:text-white ease-in-out delay-15 rounded p-1   cursor-pointer " >
                    <NavLink to={'/home'} style={active}>

                        <div className="name flex justify-center item-center gap-2 text-md">
                            <HomeOutlinedIcon
                                fontSize="large"
                                className="cursor-pointer text-black-400"
                            />
                            <p>Home</p>
                        </div>
                    </NavLink>
                </div>

                <div className="home flex justify-start item-start gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black">
                    <NavLink to={'/explore'} style={active}>

                        <div className="name flex justify-center item-center gap-2 text-md">
                            <ExploreOutlinedIcon

                                fontSize="large"
                                className="cursor-pointer text-black-400"
                            />
                            <p>Explore</p>
                        </div>
                    </NavLink>
                </div>

                <div className="home flex justify-start item-center gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black" >
                    <NavLink to={'/bookmark'} style={active}>

                        <div className="name flex justify-center item-center gap-2 text-md">
                            <BookmarkBorderOutlinedIcon

                                fontSize="large"
                                className="cursor-pointer text-black-400"
                            />
                            <p>Bookmark</p>
                        </div>
                    </NavLink>
                </div>

                <div className="home flex justify-start item-center gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black">
                    <NavLink to={'/liked'} style={active}>

                        <div className="name flex justify-center item-center gap-2 text-md">
                            <FavoriteIcon

                                fontSize="large"
                                className="cursor-pointer text-black-400"
                            />
                            <p>Liked</p>
                        </div>
                    </NavLink>
                </div>

                <div className="home flex justify-start item-center gap-3  cursor-pointer  hover:text-black">
                    <h1 className="w-full rounded text-center p-1  bg-cyan-700 text-white">
                        <PostDialogBox />
                    </h1>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;
