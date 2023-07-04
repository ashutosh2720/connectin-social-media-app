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
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ImageIcon from '@mui/icons-material/Image';
import { useGlobalLogin } from "../../contexts/login-context";
import { useGlobalUser } from "../../contexts/user-context";
import { useState } from "react";

function Home() {
    const [filter, setFilter] = useState("latest");

    const [newPost, setNewPost] = React.useState()
    const { NewPost } = useGlobalPost()
    const { theme } = useGlobalTheme();
    const { postsData } = useGlobalPost();
    const { userDetail } = useGlobalLogin();
    const { isFollow } = useGlobalUser();

    const homeData = postsData?.filter(
        (post) =>
            isFollow(post?.username) || post?.username === userDetail?.username
    );
    let filteredPosts = homeData;
    if (filter === "trending") {
        filteredPosts = homeData.sort(
            (post1, post2) => post2?.likes?.likeCount - post1?.likes?.likeCount
        );
    } else if (filter === "latest") {
        filteredPosts = homeData.sort(
            (post1, post2) => new Date(post2?.createdAt) - new Date(post1?.createdAt)
        );
    } else if (filter === "oldest") {
        filteredPosts = homeData.sort(
            (post1, post2) => new Date(post1?.createdAt) - new Date(post2?.createdAt)
        );
    }

    function handlePost() {
        NewPost({ username: userDetail.username, content: newPost })


    }

    console.log(homeData);
    return (
        <div className="home flex justify-around  h-full w-full sm:flex-wrap ">
            <div className="max-[20%] sticky left-[170px] top-20  p-9 sm:hidden xs:hidden min-h-full  h-screen rounded">
                <LeftSidebar />
            </div>
            <div className="mid  w-[100%]  flex justify-center items-center flex-col p-2 gap-2 ">

                <div className="postModal w-[60%]  h-[210px] flex flex-col gap-5 shadow-md justify-center items-center mt-5 ">
                    <textarea className={`${theme === 'dark-theme' ? 'bg-neutral-900 flex justify-center items-center	 text-white' : 'bg-white text-black'} resize-none outline-none w-[60%] border-none`} placeholder='whats happening' id=" add-post-input-filed" cols="30" rows="10" onChange={(e) => setNewPost(e.target.value)}></textarea>
                    <div className="post-items flex justify-between items-center w-[60%]">
                        <div className="image-icon cursor-pointer">
                            <ImageIcon />
                        </div>
                        <div className="imojie cursor-pointer">
                            <AddReactionIcon />
                        </div>
                        <h1 className="bg-cyan-800  text-white border rounded pl-2 pr-2 pb-1 hover:bg-cyan-600 cursor-pointer" onClick={handlePost}

                        >
                            Post
                        </h1>
                    </div>
                </div>

                {homeData?.map((post) => (
                    <PostCard post={post} />
                ))}
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
                    } right-[190px]   sm:hidden xs:hidden min-h-full sticky top-20 rounded-md h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default Home;
