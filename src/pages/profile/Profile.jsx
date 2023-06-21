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

function Profile() {
    const { theme } = useGlobalTheme();
    const { postsData } = useGlobalPost()

    // const homeData = postsData.filter((post) => post.username === 'adarshbalika')
    return (
        <div className="home flex justify-around items-start h-full w-full sm:flex-wrap ">
            <div className="max-w-50 sticky left-10 top-20  p-9 sm:hidden xs:hidden min-h-full border-r-2 h-screen rounded">
                <LeftSidebar />
            </div>
            <div className="mid  w-[100%] flex justify-center items-center flex-col  gap-2 ">
                <div className="profile w-[66%] bg-white flex flex-col justify-center items-center p-4 ">
                    <div className="profile-detail"> <img src="
                    " alt="" /> Ashutosh Singh</div>
                    <div className="about">Be carefull</div>
                    <div className=" w-[50%]  post-folllowig-folloers flex justify-around items-center  ">
                        <div className="post">post</div>
                        <div className="folllowers">Followers</div>
                        <div className="foollowing">Following</div>
                    </div>
                </div>

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
                    }right max-w-50 sticky right-10 top-12 sm:hidden xs:hidden min-h-full sticky top-20 rounded-md border-l-2 h-screen`}
            >
                <RightSidebar />
            </div>
        </div>
    );
}

export default Profile;