import React from "react";
import { useGlobalTheme } from "../../contexts/Theme-context";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useGlobalPost } from "../../contexts/post-context";
import { users } from "../../backend/db/users";

const RightSidebar = () => {
    const { theme } = useGlobalTheme()

    return (
        <div className=" right-side w-[100%] flex justify-around flex-col">
            <div className="navigation flex justify-around gap-5  pt-5 pr-0 max-w-50 item-center  ">
                <h1 className="border p-2 rounded cursor-pointer hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white text-center">
                    {" "}
                    Tranding
                </h1>
                <h1 className="border p-2 rounded w-20 cursor-pointer hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white text-center">
                    Latest
                </h1>
            </div>
            <div
                className={`${theme === "dark-theme"
                    ? "bg-neutral-900	 text-white"
                    : "bg-white text-black border-2 border-black-800"
                    }suggestion  flex justify-start items-start p-5 gap-5 flex-col`}
            >
                <h1>Suggestion for you</h1>
                {
                    users.map((user) =>
                        <div className="seacrh-item flex  justify-start items-start gap-3 p-1">
                            <img
                                src={user.avatarUrl}
                                alt=""
                                className="rounded-full h-[40px] w-[40px]"


                            />
                            <div className="userDetail flex flex-col ">
                                <h1>{user.firstName}</h1>
                                <p className=" text-xs"> {user.username}</p>
                            </div>
                            <button></button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default RightSidebar;
