import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const bookMarkContext = createContext();

const BookMarkProvider = ({ children }) => {
    const [bookmarksData, setBookMarksDatra] = useState([]);

    const addToBooksMark = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(`/api/users/bookmark/${postId}`, {
                headers: { authorization: encodedToken },
            });
            console.log(data)
            setBookMarksDatra(data.bookmarks);

            // saving the encodedToken in the localStorage
            // localStorage.setItem("token", data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <bookMarkContext.Provider
            value={{
                addToBooksMark,
                bookmarksData
            }}
        >
            {children}
        </bookMarkContext.Provider>
    );
};

const useGlobalBookMark = () => useContext(bookMarkContext);

export { BookMarkProvider, useGlobalBookMark };
