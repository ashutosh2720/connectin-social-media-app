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
import { useGlobalLogin } from "../../contexts/login-context";
import { useGlobalBookMark } from "../../contexts/bookMark-context";
import { useGlobalLike } from "../../contexts/liked-context";

const PostCard = ({ post }) => {
    const { addToBooksMark, bookMark, removeBookMark } = useGlobalBookMark();
    const { addToLike } = useGlobalLike()
    const { userDetail } = useGlobalLogin()



    return (
        <div className="content w-[50%] flex flex-col gap-2  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md xs:w-full sm:w-full p-3">
            <div className="option flex justify-end items-end ">
                {post.username === userDetail.username ? <FadeMenu post={post} /> : ''}
            </div>
            <div className="user-detail">
                <img src={post.avatar} alt="" /> {post.createdAt}
                <h1>{post.username}</h1>

            </div>
            <p>{post.content}</p>
            <img src={post.mediaURL} alt="" className="rounded-lg" />

            <hr />
            <div className="socialbtn flex justify-around item start">
                <div onClick={() => addToLike(post._id)}>
                    <ThumbUpOffAltIcon className="cursor-pointer" />
                </div>
                <div onClick={() => bookMark.find((id) => id === post._id) ? removeBookMark(post._id) : addToBooksMark(post._id)}>

                    <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                </div>
                <div>
                    <ShareOutlinedIcon className="cursor-pointer" />
                </div>
                <div>
                    <CommentOutlinedIcon className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
