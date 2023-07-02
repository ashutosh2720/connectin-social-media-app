import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGlobalPost } from "../../contexts/post-context";
import { useGlobalTheme } from "../../contexts/Theme-context";

const SearchBox = ({ searchInput, setSearchInput }) => {
    const { theme } = useGlobalTheme();
    const { users } = useGlobalPost();
    const navigate = useNavigate();

    function handleSearch() {

    }
    let searchData = users?.filter(({ username }) =>
        username?.includes(searchInput)
    );

    if (searchData.length === 0) {
        searchData = [];
    }

    return (
        <div
            className={`${theme === "dark-theme"
                ? "bg-neutral-900 text-white"
                : "bg-white text-black border-2 border-black-800"
                }search-model absolute  top-[50px]  w-[15%] z-300 overflow-y-auto shadow-md rounded-md text-lg`}
        >
            {searchInput ? (
                searchData.length !== 0 ? (
                    <div className="search-data flex flex-col overflow-y-auto max-h-full ">
                        {searchData.map(({ _id, username, avatarUrl, firstName }) => (
                            <Link
                                className="ind-search-product "
                                onClick={() => setSearchInput("")}
                            >
                                <div className="seacrh-item flex  justify-start items-start gap-5 p-2" onClick={() => navigate(`/profile/${username}`)}>
                                    <img
                                        src={avatarUrl}
                                        alt=""
                                        className="rounded-full h-[40px] w-[40px]"


                                    />
                                    <div className="userDetail flex flex-col ">
                                        <h1>{firstName}</h1>
                                        <p className=" text-xs"> {username}</p>
                                    </div>
                                </div>
                                <hr className="w-[100%]" />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="no-data-found p-10">No data found</p>
                )
            ) : null}
        </div>
    );
};

export default SearchBox;
