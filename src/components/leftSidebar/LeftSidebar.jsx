import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PostDialogBox from "../postDialogBox/PostDialogBox";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
    const navigate = useNavigate();
    return (
        <>
            {" "}
            <div className="left flex justify-start item-start  flex-col gap-5	">

                <div className="home flex justify-start item-start gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black ">
                    <HomeOutlinedIcon
                        fontSize="large"
                        className="cursor-pointer text-black-400"
                        o
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Home</p>
                    </div>
                </div>


                <div className="home flex justify-start item-start gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black">
                    <ExploreOutlinedIcon
                        onClick={() => navigate("/explore")}
                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Explore</p>
                    </div>
                </div>



                <div className="home flex justify-start item-center gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black">
                    <BookmarkBorderOutlinedIcon
                        onClick={() => navigate("/bookmark")}
                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Bookmark</p>
                    </div>
                </div>


                <div className="home flex justify-start item-center gap-3 hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white rounded p-1 cursor-pointer  hover:text-black">
                    <FavoriteIcon
                        onClick={() => navigate("/liked")}
                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Liked</p>
                    </div>
                </div>


                <div className="home flex justify-start item-center gap-3  cursor-pointer  hover:text-black">
                    <h1 className="w-full rounded text-center p-1  bg-cyan-700 text-white">Post</h1>
                </div>

            </div>
        </>
    );
};

export default LeftSidebar;
