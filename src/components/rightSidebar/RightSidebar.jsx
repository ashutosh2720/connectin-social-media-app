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
        <div className=" right-side w-[100%] flex justify-center flex-col rounded-md">

            <div
                className={`${theme === "dark-theme"
                    ? "bg-neutral-800	 text-white"
                    : " text-black "
                    } suggestion border-t-2  flex justify-center items-center rounded-md  shadow-md flex-col`}
            >
                <h1 className="text-xl bg-cyan-800 text-white p-2 ">Suggestion for you</h1>
                {userData.map((user) => (
                    <div className="seacrh-item w-[100%] flex p-5 justify-around items-start gap-3">
                        <img
                            src={user.avatarUrl}
                            alt=""
                            className="rounded-full h-[40px] w-[40px]  cursor-pointer"
                            onClick={() => navigate(`/profile/${user?.username}`)}

                        />
                        <div className="userDetail flex flex-col ">
                            <h1>{user.firstName}</h1>
                            <p className=" text-xs"> {user.username}</p>
                        </div>
                        <button
                            className=" pl-2 pr-2 bg-cyan-800 text-white "
                            onClick={() =>
                                user?.followers?.find((user) => user?._id === userDetail?._id)
                                    ? UnfollowUser(user._id)
                                    : FollowUser(user._id)
                            }
                        >
                            {" "}
                            {user?.followers?.find((user) => user?._id === userDetail?._id)
                                ? "Following"
                                : "Follow"}{" "}
                        </button>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default RightSidebar;
