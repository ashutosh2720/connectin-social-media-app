import React, { useState } from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import PostDialogBox from "../postDialogBox/PostDialogBox";

const BottomSide = () => {
    const [dialogBox, setDialogBox] = useState(false)
    const navigate = useNavigate();
    return (
        <>
            {" "}
            <div className="left flex justify-center item-center p-5 pl-4 pr-4 gap-6	">
                <Tooltip title="home">
                    <div className="home flex justify-start item-start gap-3 ">
                        <HomeOutlinedIcon
                            onClick={() => navigate('/home')}
                            fontSize="large"
                            className="cursor-pointer text-black-400"
                        />
                    </div>
                </Tooltip>
                <Tooltip title="explore">
                    <div className="home flex justify-start item-start gap-3  cursor-pointer  ck">
                        <ExploreOutlinedIcon
                            onClick={() => navigate('/explore')}
                            fontSize="large"
                            className="cursor-pointer text-black-400"
                        />
                    </div>
                </Tooltip>
                <Tooltip title="post">
                    <div className="home flex justify-start item-start gap-3  cursor-pointer  ck">

                        <PostDialogBox />
                    </div>
                </Tooltip>

                <Tooltip title="Bookmark">
                    <div className="home flex justify-start item-center gap-3  cursor-pointer  ck">
                        <BookmarkBorderOutlinedIcon
                            onClick={() => navigate('/bookmark')}
                            fontSize="large"
                            className="cursor-pointer text-black-400"
                        />
                    </div>
                </Tooltip>
                <Tooltip title="Liked">
                    <div className="home flex justify-start item-center gap-3  cursor-pointer ">
                        <FavoriteIcon
                            onClick={() => navigate('/liked')}
                            fontSize="large"
                            className="cursor-pointer text-black-400"
                        />
                    </div>
                </Tooltip>
                <Tooltip title="profile">
                    <div className="home flex justify-start item-center gap-3  cursor-pointer ">
                        <AccountCircleOutlinedIcon
                            onClick={() => navigate(`/profile/${'ashutosh@'}`)}
                            fontSize="large"
                            className="cursor-pointer text-black-400"
                        />
                    </div>
                </Tooltip>
            </div>
        </>
    );
};

export default BottomSide;
