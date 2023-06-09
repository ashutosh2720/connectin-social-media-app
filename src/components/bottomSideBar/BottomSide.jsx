import React from 'react'
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const BottomSide = () => {
    return (<>        <div className="left flex justify-center item-center p-5 pl-4 pr-4 gap-6	">
        <Tooltip title='home'>
            <div className="home flex justify-start item-start gap-3 ">
                <HomeOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />

            </div>
        </Tooltip>
        <Tooltip title='explore'>
            <div className="home flex justify-start item-start gap-3  cursor-pointer  ck">
                <ExploreOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />

            </div>
        </Tooltip>
        <Tooltip title='explore'>
            <div className="home flex justify-start item-start gap-3  cursor-pointer  ck">
                <AddCircleIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />

            </div>
        </Tooltip>

        <Tooltip title='Bookmark'>
            <div className="home flex justify-start item-center gap-3  cursor-pointer  ck">
                <BookmarkBorderOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />

            </div>
        </Tooltip>
        <Tooltip title='Liked'>
            <div className="home flex justify-start item-center gap-3  cursor-pointer ">
                <FavoriteIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />

            </div>
        </Tooltip>
        <Tooltip title='Liked'>
            <div className="home flex justify-start item-center gap-3  cursor-pointer ">
                <AccountCircleOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />

            </div>
        </Tooltip>
    </div>

    </>


    )
}

export default BottomSide
