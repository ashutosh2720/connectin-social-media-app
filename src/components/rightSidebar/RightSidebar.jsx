import React from "react";
import { useGlobalTheme } from "../../contexts/Theme-context";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useGlobalPost } from "../../contexts/post-context";
import { users } from "../../backend/db/users";
import { useGlobalUser } from "../../contexts/user-context";
import { useGlobalLogin } from "../../contexts/login-context";
import { useNavigate } from "react-router-dom";


const RightSidebar = () => {
    const { theme } = useGlobalTheme();
    const { userDetail } = useGlobalLogin();
    const { userData, FollowUser, UnfollowUser } = useGlobalUser();
    const navigate = useNavigate();



    // const isFollowing = userData?.followers.find(user => user?._id === userDetail?._id)

    return (
        <div className=" right-side w-[100%] flex justify-around flex-col">

            <div
                className={`${theme === "dark-theme"
                    ? "bg-neutral-900	 text-white"
                    : "bg-white text-black "
                    }suggestion  flex justify-start items-start p-5 gap-5 flex-col`}
            >
                <h1>Suggestion for you</h1>
                {userData.map((user) => (
                    <div className="seacrh-item flex  justify-between items-start gap-3 p-1">
                        <img
                            src={user.avatarUrl}
                            alt=""
                            className="rounded-full h-[40px] w-[40px] cursor-pointer"
                            onClick={() => navigate(`/profile/${user?.username}`)}

                        />
                        <div className="userDetail flex flex-col ">
                            <h1>{user.firstName}</h1>
                            <p className=" text-xs"> {user.username}</p>
                        </div>
                        <button
                            className="border rounded-md pl-2 pr-2"
                            onClick={() =>
                                user?.followers?.find((user) => user?._id === userDetail?._id)
                                    ? UnfollowUser(user._id)
                                    : FollowUser(user._id)
                            }
                        >
                            {" "}
                            {user?.followers?.find((user) => user?._id === userDetail?._id)
                                ? "following"
                                : "follow"}{" "}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;
