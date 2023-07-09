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
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import { useGlobalTheme } from "../../contexts/Theme-context";
import DialogBox from "../../components/dialogBox/DialogBox";
import { useGlobalPost } from "../../contexts/post-context";
import PostCard from "../../components/postCard/PostCard";
import { Link, useParams } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
// import { users } from "../../backend/db/users";
import { useGlobalLogin } from "../../contexts/login-context";
import EditProfileDialogBox from "../../components/profileDialogBox/EditProfileDialogBox";
import { useState } from "react";
import { useGlobalUser } from "../../contexts/user-context";
import FollowersModal from "../../components/folllowersModal/FollowersModal";
import FollowingUsers from "../../components/followingModal/FollowingUsers";

function Profile() {
    const { isProfileOpen, setIsProfileOpen, Profilehandler } = useGlobalPost();
    const { theme } = useGlobalTheme();
    const { postsData } = useGlobalPost();
    const { username } = useParams();
    const { userDetail, logoutUser, logoutAction } = useGlobalLogin();
    const { userData, FollowUser, UnfollowUser } = useGlobalUser();
    const [modal, setModal] = useState(false)
    const [followingModal, setFollowingModal] = useState(false)


    const post = postsData.filter((item) => item.username === username);
    const user = userData.find((item) => item.username === username);


    const isFollowing = user?.followers?.find(
        (user) => user?._id === userDetail?._id
    );

    return (
        <div className="home flex justify-around items-start h-full w-full sm:flex-wrap ">
            <div className={`${theme === 'dark-theme' ? 'bg-neutral-800  text-white' : ' shadow-md text-black'} max-[20%] sticky left-[220px] top-[91px]  p-5 sm:hidden xs:hidden border-t-[3px]   h-[50%] rounded-lg`}>
                <LeftSidebar />
            </div>
            <div className="mid  w-[100%] flex justify-center items-center flex-col  gap-2 ">
                <div
                    className={`${theme === "dark-theme"
                        ? "bg-neutral-800	 text-white"
                        : "bg-white text-black border rounded-md border-black-800"
                        }profile w-[55%]  flex flex-col justify-center items-start p-5 gap-2`}
                >
                    <div className="profile-detail flex flex-col justify-center items-start gap-3  ">
                        {" "}
                        <img
                            src={user?.avatarUrl}
                            alt=""
                            className="h-[110px] w-[110px] rounded-full"
                        />
                        <div className="div flex justify-between items-center gap-5">
                            <h1 className="text-3xl">
                                {user?.firstName} {user?.lastName}
                            </h1>
                            {userDetail?.username === username ? (
                                <div className="flex gap-4">
                                    <button
                                        className="border pl-2 pr-2 rounded-md"
                                        onClick={Profilehandler}
                                    >
                                        Edit profile
                                    </button>{" "}
                                    <div className="logout" onClick={logoutUser}>
                                        <LogoutIcon className="cursor-pointer" />
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className="border pl-2 pr-2 rounded-md"
                                    onClick={() => isFollowing ? UnfollowUser(user._id) : FollowUser(user._id)}
                                >
                                    {isFollowing ? "following" : "follow"}
                                </button>
                            )}
                            {isProfileOpen && <EditProfileDialogBox user={user} />}
                        </div>
                        <h1 className=" text-xl text-gray-400">{user?.username}</h1>
                    </div>
                    <div className="about text-xl">{user?.bio}</div>
                    <div className="about text-xl text-blue-300">  <LinkIcon />  <Link>{user?.website}</Link> </div>
                    <div className=" w-[100%] h-[40%]  post-folllowig-folloers flex justify-between items-center gap-4 " >
                        <div className="post text-xl flex"><h1 className="text-xl text-gray-400 font-semibold">{post?.length} posts</h1></div>
                        <div className="folllowers  text-xl"><h1 className="text-xl text-gray-400 font-semibold cursor-pointer" onClick={() => setModal(true)} > {user?.followers?.length} Followers</h1></div>

                        {modal && <div className="cursor-pointer fixed flex right-[660px]  " onClick={() => setModal(false)}><FollowersModal user={user} setModal={setModal} /></div>}
                        <div className="foollowing text-xl"><h1 className="text-xl cursor-pointer text-gray-400 font-semibold" onClick={() => setFollowingModal(true)}>  {user?.following?.length} Following</h1></div>


                        {followingModal && <div className="cursor-pointer fixed flex right-[660px] "><FollowingUsers user={user} setFollowingModal={setFollowingModal} /></div>}

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
                    ? "bg-neutral-00 text-white"
                    : "bg-white text-black "
                    } right-[220px]  w-[350px]  sm:hidden xs:hidden min-h-full sticky top-[95px] rounded-md h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default Profile;
