import React from "react";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LongMenu from "../../components/option/Option";
import FadeMenu from "../../components/option/Option";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BottomSide from "../../components/bottomSideBar/BottomSide";
import AccountMenu from "../../components/accountMenu/AccountMenu";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Home() {
    return (
        <div className="home flex justify-around items-start h-full w-full sm:flex-wrap ">
            <div className="max-w-50 sticky left-0 top-20 border-2 p-7 sm:hidden xs:hidden min-h-full">
                <LeftSidebar />
            </div>
            <div className="mid   flex justify-center items-center flex-col  gap-2 ">
                <div className="content w-2/3 flex flex-col gap-2 border-2 xs:w-full sm:w-full p-3">
                    <div className="option flex justify-end items-end ">
                        <FadeMenu />
                    </div>
                    <h1>@:Ashutosh singh</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur

                        !
                    </p>
                    {/* <img src="https://wallpaperaccess.com/full/870437.jpg" alt="" /> */}
                    <hr />
                    <div className="socialbtn flex justify-around item start ">
                        <ThumbUpOffAltIcon className="cursor-pointer" />
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                        <ShareOutlinedIcon className="cursor-pointer" />
                        <CommentOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <div className="content w-2/3 flex flex-col gap-2  border-2 xs:w-full sm:w-full p-3">
                    <div className="option flex justify-end items-end' ">
                        <FadeMenu />
                    </div>
                    <h1>@:Ashutosh singh</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur


                    </p>
                    <img src="https://wallpaperaccess.com/full/641612.jpg" alt="" />
                    <hr />
                    <div className="socialbtn flex justify-around item start ">
                        <ThumbUpOffAltIcon className="cursor-pointer" />
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                        <ShareOutlinedIcon className="cursor-pointer" />
                        <CommentOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <div className="content w-2/3 flex flex-col gap-2  border-2 xs:w-full sm:w-full p-3">
                    <div className="option flex justify-end items-end ">
                        <FadeMenu />
                    </div>
                    <h1>@:Ashutosh singh</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur

                    </p>
                    <img
                        src="https://w0.peakpx.com/wallpaper/622/475/HD-wallpaper-rashmika-actress-beautiful-cute-kannada-rashmika-mandana-tollywood-tollywood-actress-thumbnail.jpg"
                        alt=""
                    />
                    <hr />
                    <div className="socialbtn flex justify-around item start">
                        <ThumbUpOffAltIcon className="cursor-pointer" />
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                        <ShareOutlinedIcon className="cursor-pointer" />
                        <CommentOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <div className="content w-2/3 flex flex-col gap-2  border-2 xs:w-full sm:w-full p-3">
                    <div className="option flex justify-end items-end ">
                        <FadeMenu />
                    </div>
                    <h1>@:Ashutosh singh</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur

                    </p>
                    <img
                        src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?fit=1280%2C720&ssl=1"
                        alt=""
                    />
                    <hr />
                    <div className="socialbtn flex justify-around item start">
                        <ThumbUpOffAltIcon className="cursor-pointer" />
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                        <ShareOutlinedIcon className="cursor-pointer" />
                        <CommentOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <div className="content w-2/3 flex flex-col gap-2  border-2 xs:w-full sm:w-full p-3">
                    <div className="option flex justify-end items-end ">
                        <FadeMenu />
                    </div>
                    <h1>@:Ashutosh singh</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur

                    </p>
                    <img
                        src="https://igimages.gumlet.io/telugu/gallery/actress/shriya/shreyaposter3.jpg?w=160&dpr=2.6"
                        alt=""
                    />
                    <hr />
                    <div className="socialbtn flex justify-around item start">
                        <ThumbUpOffAltIcon className="cursor-pointer" />
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                        <ShareOutlinedIcon className="cursor-pointer" />
                        <CommentOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <div className="content w-2/3 flex flex-col gap-2  border-2 xs:w-full sm:w-full p-3">
                    <div className="option flex justify-end items-end ">
                        <FadeMenu />
                    </div>
                    <h1>@:Ashutosh singh</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur

                    </p>
                    <img
                        src="https://w0.peakpx.com/wallpaper/22/722/HD-wallpaper-kajal-aggarwal-telugu-actress-actress-tamil-movies-bollywood-movie-kajal-agarwal-kajalagarwal-telugu-movie-bollywood-tamil-actress-bollywood-actress.jpg"
                        alt=""
                    />
                    <hr />
                    <div className="socialbtn flex justify-around item start">
                        <ThumbUpOffAltIcon className="cursor-pointer" />
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                        <ShareOutlinedIcon className="cursor-pointer" />
                        <CommentOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <div className="bottom fixed bottom-0 min-w-full bg-black lg:hidden xl:hidden 2xl:hidden flex justify-around items-center">
                    <BottomSide />


                </div>
            </div>
            <div className="right lg:w-1/6 sticky top-20">
                {/* <LeftSidebar /> */}
            </div>
        </div>
    );
}

export default Home;
