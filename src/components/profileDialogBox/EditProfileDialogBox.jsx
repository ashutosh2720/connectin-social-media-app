import React from "react";
import { useGlobalLogin } from "../../contexts/login-context";
import { useGlobalPost } from "../../contexts/post-context";
import { useState } from "react";
import { useGlobalUser } from "../../contexts/user-context";
import { useGlobalTheme } from "../../contexts/Theme-context";

function EditProfileDialogBox({ user }) {
    const [avatar, setAvatar] = useState(user.avatarUrl);
    const { Profilehandler } = useGlobalPost();
    const { theme } = useGlobalTheme();
    const { EditProfile } = useGlobalUser();
    const [bio, setBio] = useState(user.bio);
    const [web, setWeb] = useState(user.website);

    const updatedhandler = () => {
        EditProfile({ ...user, avatarUrl: avatar, bio: bio, website: web });
        Profilehandler();
    };
    const mediahandler = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0]);
        setAvatar(objectURL);
    };

    return (
        <div
            className={` ${theme === "dark-theme"
                ? "bg-neutral-900 shadow-slate-200 rounded-md border border-white	 text-white"
                : "bg-white text-black border-2 border-black-800 shadow-black"
                } fixed top-[30%] left-[40%]`}
        >
            <div className="content flex flex-col justify-around items-start p-3 shadow-md gap-5 rounded-md ">
                <div className="avtar flex justify-center items-center gap-2">
                    <h1>Avtar</h1>
                    <input
                        type="file"
                        name=""
                        id=""
                        className="cursor-pointer"
                        onChange={mediahandler}
                    />
                    <img src={avatar} alt="" className="h-[40px] w-[40px] rounded-full" />
                </div>
                <div className="name flex justify-center items-center gap-2">
                    <h1>Name : </h1>{" "}
                    <h1>
                        {user?.firstName} {user?.lastName}
                    </h1>
                </div>
                <div className="username flex justify-center items-center gap-2">
                    <h1>Username:</h1> <h1>{user?.username}</h1>
                </div>
                <div className="bio flex justify-center items-center gap-2">
                    <h1>Bio: </h1>{" "}
                    <input
                        type="text"
                        value={bio}
                        className={`${theme === "dark-theme"
                            ? "bg-neutral-900	 text-white"
                            : "bg-white text-black border-2 border-black-800"
                            } pl-2 border`}

                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="website flex justify-center items-center gap-2">
                    <h1>Website: </h1>
                    <input
                        type="text"
                        value={web}
                        className={`${theme === "dark-theme"
                            ? "bg-neutral-900	 text-white"
                            : "bg-white text-black border-2 border-black-800"
                            } pl-2  pr-2 border`}
                        onChange={(e) => setWeb(e.target.value)}
                    />
                </div>
                <div className="update flex justify-end items-end">
                    <h1
                        className="border rounded-md  pl-2 pr-2 text-right cursor-pointer"
                        onClick={updatedhandler}
                    >
                        Update
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default EditProfileDialogBox;
