import React from "react";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LongMenu from "../../components/option/Option";
import FadeMenu from "../../components/option/Option";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BottomSide from "../../components/bottomSideBar/BottomSide";
import AccountMenu from "../../components/accountMenu/AccountMenu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import { useGlobalTheme } from "../../contexts/Theme-context";
import DialogBox from "../../components/dialogBox/DialogBox";
import { useGlobalPost } from "../../contexts/post-context";
import { useGlobalLogin } from "../../contexts/login-context";
import { useGlobalBookMark } from "../../contexts/bookMark-context";
import { useGlobalLike } from "../../contexts/liked-context";
import { useNavigate } from "react-router-dom";
import { users } from "../../backend/db/users";
import { useGlobalUser } from "../../contexts/user-context";
import { useState } from "react";
import LikedUser from "../likedUserModal/LikedUser";

const PostCard = ({ post }) => {
    const [likeModal, setLikeModal] = useState(false)
    const { addToBooksMark, bookMark, removeBookMark } = useGlobalBookMark();
    const { addToLike, disLike } = useGlobalLike();
    const { userDetail } = useGlobalLogin();
    const { userData } = useGlobalUser();
    const { theme } = useGlobalTheme()

    const navigate = useNavigate();
    const isLiked = post.likes.likedBy.find((item) => item._id === userDetail._id)
    const user = userData?.find((item) => item.username === post?.username);


    return (
        <div className={` ${theme === 'dark-theme' ? 'bg-neutral-800  text-white' : 'bg-white text-black'} content w-[55%] flex flex-col gap-2  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md xs:w-full sm:w-full p-3`}>
            <div className="option flex justify-end items-end ">
                {post?.username === userDetail?.username ? <FadeMenu post={post} /> : ""}
            </div>
            <div
                className="user-detail cursor-pointer flex justify-start items-center gap-3"
                onClick={() => navigate(`/profile/${post?.username}`)}
            >
                <img
                    src={user?.avatarUrl}
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                />
                <h1 className="text-md font-bold text-gray-600 font-serif">
                    {user?.firstName} {user?.lastName}
                </h1>
            </div>
            <div
                className="content cursor-pointer flex flex-col justify-center items-start "
                onClick={() => navigate(`/PostDesscription/${post._id}`)}
            >
                <p>{post?.content}</p>
                <img src={post?.mediaURL} alt="" className="rounded-lg h-[90%] min-w-[100%] " />
            </div>
            <div className="flex gap-3"><p className="text-sm cursor-pointer " onClick={() => setLikeModal(true)} >{post?.likes?.likeCount} Likes</p>
                {likeModal && <div onClick={() => setLikeModal(false)} > <LikedUser post={post} /> </div>}
                <p className="text-sm cursor-pointer"  >{post?.comments?.length} Comments</p>
            </div>
            <hr />
            <div className="socialbtn flex justify-around item start">
                <div onClick={() => isLiked ? disLike(post._id) : addToLike(post._id)}>
                    {post?.likes?.likeCount} {isLiked ? <ThumbUpIcon className="cursor-pointer  text-cyan-600" /> : <ThumbUpOffAltIcon className="cursor-pointer" />}

                </div>
                <div
                    className="
                cursor-pointer"
                    onClick={() =>
                        bookMark.find((id) => id === post._id)
                            ? removeBookMark(post._id)
                            : addToBooksMark(post._id)
                    }
                >
                    {bookMark.find((id) => id === post._id) ? (
                        <BookmarkRemoveIcon />
                    ) : (
                        <BookmarkAddOutlinedIcon className="text-gray-600" />
                    )}
                </div>
                <div>
                    <ShareOutlinedIcon className="cursor-pointer" />
                </div>
                <div>
                    {post?.comments?.length} < CommentOutlinedIcon className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
