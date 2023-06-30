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
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import { useGlobalTheme } from "../../contexts/Theme-context";
import DialogBox from "../../components/dialogBox/DialogBox";
import { useGlobalPost } from "../../contexts/post-context";
import PostCard from "../../components/postCard/PostCard";
import { useParams } from "react-router-dom";
// import { users } from "../../backend/db/users";
import { useGlobalLogin } from "../../contexts/login-context";
import EditProfileDialogBox from "../../components/profileDialogBox/EditProfileDialogBox";
import { useState } from "react";
import { useGlobalUser } from "../../contexts/user-context";

function Profile() {
    const { isProfileOpen, setIsProfileOpen, Profilehandler } = useGlobalPost()
    const { theme } = useGlobalTheme();
    const { postsData } = useGlobalPost();
    const { username } = useParams();
    const { userDetail } = useGlobalLogin()
    const { userData, FollowUser, UnfollowUser } = useGlobalUser()
    console.log(userData)
    const post = postsData.filter((item) => item.username === username);
    const user = userData.find((item) => item.username === username);
    console.log(user)


    return (
        <div className="home flex justify-around items-start h-full w-full sm:flex-wrap ">
            <div className="max-w-50 sticky left-10 top-20  p-9 sm:hidden xs:hidden min-h-full border-r-2 h-screen rounded">
                <LeftSidebar />
            </div>
            <div className="mid  w-[100%] flex justify-center items-center flex-col  gap-2 ">
                <div className={`${theme === "dark-theme"
                    ? "bg-neutral-900	 text-white"
                    : "bg-white text-black border rounded-md border-black-800"
                    }profile w-[50%]  flex flex-col justify-center items-start p-5 gap-2`} >
                    <div className="profile-detail flex flex-col justify-center items-start gap-3  ">
                        {" "}
                        <img
                            src={user.avatarUrl}
                            alt=""
                            className="h-[110px] w-[110px] rounded-full"
                        />

                        <div className="div flex justify-between items-center gap-5">
                            <h1 className="text-3xl">{user?.firstName} {user?.lastName}</h1>
                            {userDetail.username === username ? <div className="flex gap-4"><button className="border pl-2 pr-2 rounded-md" onClick={Profilehandler}>Edit profile</button> <LogoutIcon className="cursor-pointer" /></div> : <button className="border pl-2 pr-2 rounded-md" onClick={() => FollowUser(user._id)} >Follow</button>}
                            {isProfileOpen && <EditProfileDialogBox user={user} />}
                        </div>

                        <h1 className=" text-xl text-gray-400">{user.username}</h1>

                    </div>
                    <div className="about text-xl">Be carefull</div>
                    <div className=" w-[100%]  post-folllowig-folloers flex justify-between items-center gap-4 ">
                        <div className="post text-xl flex">200 Post</div>
                        <div className="folllowers text-xl"> 30.5M Followers</div>
                        <div className="foollowing text-xl">100 Following</div>
                    </div>
                </div>

                {post.map((post) => (
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
                    }right max-w-50 sticky right-10 top-12 sm:hidden xs:hidden min-h-full sticky top-20 rounded-md border-l-2 h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default Profile;
