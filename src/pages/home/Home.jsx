import React, { useEffect } from "react";
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
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import TuneIcon from "@mui/icons-material/Tune";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import { useGlobalTheme } from "../../contexts/Theme-context";
import DialogBox from "../../components/dialogBox/DialogBox";
import { useGlobalPost } from "../../contexts/post-context";
import PostCard from "../../components/postCard/PostCard";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ImageIcon from "@mui/icons-material/Image";
import { useGlobalLogin } from "../../contexts/login-context";
import { useGlobalUser } from "../../contexts/user-context";
import { useState } from "react";
import Loader from "../../components/loader/Loader";

function Home() {
    const [media, setMedia] = useState();
    const [filter, setFilter] = useState("latest");
    const [newPost, setNewPost] = React.useState();
    const { NewPost } = useGlobalPost();
    const { theme } = useGlobalTheme();
    const { postsData } = useGlobalPost();
    const { userDetail } = useGlobalLogin();
    const { isFollow } = useGlobalUser();
    const { loading } = useGlobalPost()

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

    const mediahandler = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0]);
        setMedia(objectURL);
    };

    function handlePost() {
        NewPost({
            username: userDetail.username,
            content: newPost,
            mediaURL: media,
        });
        setNewPost("");

    }

    console.log(homeData);

    return (
        <div className={`home flex justify-around  h-full w-full sm:flex-wrap `}>
            <div
                className={`${theme === "dark-theme"
                    ? "bg-neutral-800  text-white"
                    : " shadow-md text-black"
                    }  sticky left-[220px] top-[91px]  p-5 xs:hidden  border-t-[3px]   h-[80%] rounded-lg`}
            >
                <LeftSidebar />
            </div>
            <div className="mid  w-[100%]   flex justify-center items-center flex-col p-2 gap-2 ">
                {
                    loading ? <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2015/11/ispinner.jpg?fit=400%2C298&ssl=1" alt="" className="h-[55%] w-[55%]" /> : ''
                }
                <div
                    className={`${theme === "dark-theme"
                        ? "bg-neutral-800  text-white"
                        : "bg-white text-black"
                        } postModal w-[55%] xs:hidden  h-[140px] pt-4 pb-3 flex flex-col gap-5 shadow-md justify-center items-center mt-5 rounded-md`}
                >
                    <textarea
                        className={`${theme === "dark-theme"
                            ? "bg-neutral-800 flex justify-center items-center	 text-white"
                            : "bg-white "
                            } resize-none outline-none w-[60%] border-none`}
                        placeholder="whats happening"
                        id=" add-post-input-filed"
                        value={newPost}
                        cols="30"
                        rows="10"
                        onChange={(e) => setNewPost(e.target.value)}
                    ></textarea>
                    <hr className="w-[90%]" />
                    <div className="post-items flex justify-between items-center w-[60%]">
                        <div className="image-icon cursor-pointer">
                            <input
                                type="file"
                                name=""
                                id=""
                                onChange={mediahandler}
                                className="bg-cyan-800 w-60 text-white"
                            />
                        </div>

                        <h1
                            className="bg-cyan-800  text-white  pl-2 pr-2 pb-1 hover:bg-cyan-600 cursor-pointer"
                            onClick={handlePost}
                        >
                            Post
                        </h1>
                    </div>
                </div>

                <div className="filters w-[55%] flex justify-between items-center ">
                    <div className="left text-2xl">{filter}</div>
                    <div className="mid w-[70%]">
                        <hr />
                    </div>
                    <div className="right cursor-pointer ">
                        <div className="filter-options  z-5 ">
                            <select
                                className="bg-cyan-800 text-white p-1"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="trending">Trending</option>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
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
                    ? "bg-neutral-00 text-white"
                    : "bg-white text-black "
                    } right-[220px]  w-[350px]  sm:hidden xs:hidden min-h-full sticky top-[95px] rounded-md h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default Home;
