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
import { useGlobalLike } from "../../contexts/liked-context";
import { useGlobalLogin } from "../../contexts/login-context";

function LikedPost() {
    const { theme } = useGlobalTheme();
    const { likePost, likePostId } = useGlobalLike();
    const { userDetail } = useGlobalLogin();
    const { postsData } = useGlobalPost();

    const likedPost = postsData?.filter((post) =>
        post?.likes?.likedBy.find((item) => item._id === userDetail?._id)
    );
    console.log(postsData);
    return (
        <div className="home flex justify-around items-start h-full w-full sm:flex-wrap ">
            <div className={`${theme === 'dark-theme' ? 'bg-neutral-800  text-white' : ' shadow-md text-black'} max-[20%] sticky left-[220px] top-[91px]  p-5 sm:hidden xs:hidden border-t-[3px]   h-[50%] rounded-lg`}>
                <LeftSidebar />
            </div>
            <div className="mid w-[100%]  flex justify-center items-center flex-col  gap-2">
                {likedPost?.length ? likedPost.map((post) => (
                    <PostCard post={post} />
                )) : <div className="empty"><h1 className="text-2xl">Nothing in Liked page</h1></div>}
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
                    ? "bg-neutral-00 text-white"
                    : "bg-white text-black "
                    } right-[220px]  w-[350px]  sm:hidden xs:hidden min-h-full sticky top-[95px] rounded-md h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default LikedPost;
