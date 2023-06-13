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


const PostCard = ({ post }) => {
    const { DeletePost } = useGlobalPost()
    console.log(post)
    return (
        <div className="content w-2/3 flex flex-col gap-2  border-2 xs:w-full sm:w-full p-3">
            <div className="option flex justify-end items-end ">
                <FadeMenu post={post} /> <h1 onClick={() => DeletePost(post._id)} >delete</h1>
            </div>
            <h1>{post.username}</h1>
            <p>
                {post.content}
            </p>
            <img src={post.mediaURL} alt="" />

            <hr />
            <div className="socialbtn flex justify-around item start">
                <ThumbUpOffAltIcon className="cursor-pointer" />
                <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                <ShareOutlinedIcon className="cursor-pointer" />
                <CommentOutlinedIcon className="cursor-pointer" />
            </div>
        </div>
    )
}

export default PostCard
