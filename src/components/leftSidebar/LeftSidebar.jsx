import React from 'react'
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const LeftSidebar = () => {
    return (<>        <div className="left flex justify-start item-start  flex-col gap-10	">
        <Tooltip title='home'>
            <div className="home flex justify-start item-start gap-3 hover:bg-white cursor-pointer  hover:text-black">
                <HomeOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />
                <div className="name flex justify-center item-center relative top-1 text-lg"><h1>Home</h1></div>
            </div>
        </Tooltip>
        <Tooltip title='explore'>
            <div className="home flex justify-start item-start gap-3 hover:bg-white cursor-pointer  hover:text-black">
                <ExploreOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />
                <div className="name flex justify-center item-center relative top-1 text-lg"><p>Explore</p></div>
            </div>
        </Tooltip>

        <Tooltip title='Bookmark'>
            <div className="home flex justify-start item-center gap-3 hover:bg-white cursor-pointer  hover:text-black">
                <BookmarkBorderOutlinedIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />
                <div className="name flex justify-center item-center relative top-1 text-lg" ><p>Bookmark</p></div>
            </div>
        </Tooltip>
        <Tooltip title='Liked'>
            <div className="home flex justify-start item-center gap-3 hover:bg-white cursor-pointer  hover:text-black">
                <FavoriteIcon
                    fontSize="large"
                    className="cursor-pointer text-black-400"
                />
                <div className="name flex justify-center item-center relative top-1 text-lg"><p>Liked</p></div>
            </div>
        </Tooltip>
    </div>

    </>


    )
}

export default LeftSidebar
