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
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import { useGlobalTheme } from "../../contexts/Theme-context";
import DialogBox from "../../components/dialogBox/DialogBox";
import { useGlobalPost } from "../../contexts/post-context";
import PostCard from "../../components/postCard/PostCard";

function Explore() {
    const { theme } = useGlobalTheme();
    const { postsData } = useGlobalPost()

    return (
        <div className="home flex justify-around items-start h-full w-full sm:flex-wrap ">
            <div className="w-[20%] sticky left-[170px]  top-20 p-9  sm:hidden xs:hidden min-h-full  h-screen rounded">
                <LeftSidebar />
            </div>
            <div className="mid w-[100%]  flex justify-center items-center flex-col  gap-2 ">

                {
                    postsData.map((post) =>
                        <PostCard post={post} />

                    )
                }
                <div
                    className={`${theme === "dark-theme"
                        ? "bg-neutral-900  text-white"
                        : "bg-white text-black border-2 border-black"
                        }bottom fixed bottom-0 min-w-full bg-black lg:hidden xl:hidden 2xl:hidden flex justify-around items-center`}
                >
                    <BottomSide />
                </div>
            </div>
            <div
                className={`${theme === "dark-theme"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-black "
                    } right  right-[190px]  sm:hidden xs:hidden min-h-full sticky top-20 rounded-md  h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default Explore;
